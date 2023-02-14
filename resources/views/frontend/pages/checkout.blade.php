@extends('layouts.frontend.master')



@section('title', 'CheckOut')
@section('content')
<style>
input[type="radio"] {
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 50% ;
}

.form-control + .form-control {
  margin-top: 1em;
}
</style>
@component('frontend.components.breadcrumb',['active'=>'Check out'])

@endcomponent



<section class="checkout-area ptb-100 fugu-section-padding3">
    <div class="container">
        <div class="checkout-wrap">
            <form method="POST" action="{{ route('processed.payment') }}">

            @csrf
            <div class="row">


                <div class="col-lg-7 col-md-12 ">
                    <input type="hidden" name="package_id" id="" value="{{ $package->id }}">
                    <h3 class="title">User Details</h3>
                    <div class="fugu-contact-wrap  wow fadeInUpX" style="visibility: visible; animation-name: fadeInUpX;">
                      <div class="fugu-input-field">
                        <label>Full name*</label>
                        <input type="text" name="name" required value="{{Auth::user()->name}}" placeholder="Enter your full name">
                      </div>
                      <div class="fugu-input-field">
                        <label>Email address*</label>
                        <input type="email" name="email" required value="{{Auth::user()->email}}" placeholder="Enter your email">
                      </div>

                      <div class="fugu-input-field">
                        <label>Phone *</label>
                        <input type="text" name="phone" required  value="{{Auth::user()->phone}}" placeholder="Enter your phone">
                      </div>
                      <div class="fugu-input-field">
                        <label>Company name (Optional)</label>
                        <input type="text" name="company"  value="" placeholder="Enter your company name">
                      </div>
                      <div class="fugu-input-field">
                        <label>Street address *</label>
                        <input type="text" name="address" required  value="{{Auth::user()->address}}" placeholder="Enter your street address">
                      </div>
                      <div class="fugu-input-field">
                        <label>Town / City *</label>
                        <input type="text" name="city" required  value="{{Auth::user()->city}}" placeholder="Enter your city">
                      </div>
                      <div class="fugu-input-field">
                        <label>State*</label>
                        <input type="text" name="state" required  value="{{Auth::user()->state}}" placeholder="Enter your state">
                      </div>
                      <div class="fugu-input-field">
                        <label>Zip *</label>
                        <input type="text" name="zip" required  value="{{Auth::user()->zip}}" placeholder="Enter your zip">
                      </div>
                      <div class="fugu-input-field">
                        <label>Write your message</label>
                        <textarea name="textarea" placeholder="Write us your question here..."></textarea>
                      </div>

                    </div>
                  </div>
                  <div class="col-lg-5 col-md-12 ">
                    <h3 class="title">User Details</h3>
                    <div class="fugu-contact-wrap  wow fadeInUpX" style="visibility: visible; animation-name: fadeInUpX;">
                      <div class="fugu-input-field">
                            <h3>Checkout summary</h3>

                            <ul>
                                <li>Package: <span>{{ ucfirst($package->name) }}- {{$package->unit_cost}}{{$package->unit}} </span></li>
                                <li>Subtotal: <span>${{ $package->rate }}</span></li>

                                <li>Coupon: <span>$00.00</span></li>
                                <li>Total: <span>${{ $package->rate }}</span></li>
                                <li><b>Payable Total:</b> <span><b>${{ $package->rate }}</b></span></li>
                            </ul>
                        </div>

                        <div class="faq-accordion">
                            <h3>Payment method</h3>

                            <div class="accordion" id="accordionExample">



                                <div class="form-check">
                                    <label class="form-check-label">
                                      <input type="radio" class="form-check-input" checked value="bank" name="payment_type">Pay via Direct bank transfer
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <label class="form-check-label">
                                      <input type="radio" class="form-check-input" value="paypal" name="payment_type">Pay via PayPal
                                    </label>
                                  </div>

                                <div class="form-check">
                                    <input class="form-check-input" required type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        I’ve read and accept the <a href="#">Terms &amp; Conditions*</a>
                                    </label>
                                </div>
                                <button type="submit"  id="fugu-input-submit">Place order</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </div>
    </div>
</section>
@endsection
