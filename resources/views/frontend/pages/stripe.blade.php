@extends('layouts.frontend.master')



@section('title', 'CheckOut')
@section('content')

@component('frontend.components.breadcrumb',['active'=>'Payment Details'])

@endcomponent

<section class="checkout-area ptb-100 fugu-section-padding3">

    <div class="container">
        <div class="checkout-wrap">
            <form role="form"
            action="{{ route('stripe.post') }}"
            method="post"
            class="require-validation"
            data-cc-on-file="false"
            data-stripe-publishable-key="{{ env('STRIPE_KEY') }}"
            id="payment-form">

            @csrf
            <div class="row justify-content-center">
                <div class="col-lg-7 col-md-12 ">
                @if (Session::has('message'))
                    <div class="alert alert-info">{{ Session::get('message') }}</div>
                 <br>
                 @endif


                    <div class="fugu-contact-wrap  wow fadeInUpX" style="visibility: visible; animation-name: fadeInUpX;">

                        <div class="billing-details mr-15">
                            <h3 class="title">Payment Details
                            </h3>
                                <div class="display-td" >
                                <img class="img-responsive pull-right" src="{{ asset('assets/images/pay.png')}}">
                            </div>
                            <hr>
                                <input type="hidden" name="uuid" value="{{ $cart->uuid}}" />
                                <input type="hidden" name="package_id" value="{{ $cart->package_id}}" />
                            <div class="row mt-4" style=" margin-top: 30px !important;">
                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label>Name on Card <span class="required">*</span></label>
                                        <input type="text" size='4' name="name" class="form-control " required>
                                    </div>
                                </div>



                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label>Card Number<span class="required">*</span></label>
                                        <input type="text" size='20' name="email" class="form-control card-number" required>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>CVC <span class="required">*</span></label>
                                        <input type="text" name="cvc" class="form-control card-cvc"  placeholder='ex. 311' size='4'>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Expiration Month
                                        </label>
                                        <input type="text" name="mm"  placeholder='MM' size='2' class="form-control card-expiry-month">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Expiration Year
                                        </label>
                                        <input type="text" name="year"  placeholder='YYYY' size='4' class="form-control card-expiry-year">
                                    </div>
                                </div>

                            

                                <button style="    margin-top: 30px;" type="submit"  id="fugu-input-submit"> Pay Now (${{$cart->amount  }})</button>





                            </div>


                        </div>


                </div>


            </div>

        </form>
        </div>
    </div>
</section>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>


<script type="text/javascript" src="https://js.stripe.com/v2/"></script>


<script type="text/javascript">

    $(function() {

        /*------------------------------------------
        --------------------------------------------
        Stripe Payment Code
        --------------------------------------------
        --------------------------------------------*/

        var $form = $(".require-validation");

        $('form.require-validation').bind('submit', function(e) {
            var $form = $(".require-validation"),
            inputSelector = ['input[type=email]', 'input[type=password]',
                             'input[type=text]', 'input[type=file]',
                             'textarea'].join(', '),
            $inputs = $form.find('.required').find(inputSelector),
            $errorMessage = $form.find('div.error'),
            valid = true;
            $errorMessage.addClass('hide');

            $('.has-error').removeClass('has-error');
            $inputs.each(function(i, el) {
              var $input = $(el);
              if ($input.val() === '') {
                $input.parent().addClass('has-error');
                $errorMessage.removeClass('hide');
                e.preventDefault();
              }
            });

            if (!$form.data('cc-on-file')) {
              e.preventDefault();
              Stripe.setPublishableKey($form.data('stripe-publishable-key'));
              Stripe.createToken({
                number: $('.card-number').val(),
                cvc: $('.card-cvc').val(),
                exp_month: $('.card-expiry-month').val(),
                exp_year: $('.card-expiry-year').val()
              }, stripeResponseHandler);
            }

        });

        /*------------------------------------------
        --------------------------------------------
        Stripe Response Handler
        --------------------------------------------
        --------------------------------------------*/
        function stripeResponseHandler(status, response) {
            if (response.error) {
                alert(response.error.message);
                $('.error')
                    .removeClass('hide')
                    .find('.alert')
                    .text(response.error.message);
            } else {
                /* token contains id, last4, and card type */
                var token = response['id'];

                $form.find('input[type=text]').empty();
                $form.append("<input type='hidden' name='stripeToken' value='" + token + "'/>");
                $form.get(0).submit();
            }
        }

    });
    </script>
@endsection
