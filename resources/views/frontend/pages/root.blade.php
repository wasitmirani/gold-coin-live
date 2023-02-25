@extends('layouts.frontend.master')

@section('title', 'About')

<style>
    @media (max-width: 991px){
.fugu-about-thumb {
    display: block;
    margin: 0 0 50px;
    padding-right: 1px !important;
}}

</style>
@section('content')

@component('frontend.components.breadcrumb',['active'=>'About us'])

@endcomponent

<div class="bg-warning-600 fugu-about-section">
    <div class="container">
      <div class="row">
        <div class="col-xl-7 col-lg-6">
          <div class="fugu-about-thumb">
            <img class="wow fadeInLeft" data-wow-delay=".10s" style="border-radius: 20px;opacity: 0.8;filter: drop-shadow(8px 6px 8px #222);"  src="{{ asset('assets/images/b1358d30c5.jpg')}}" alt="" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInLeft;">
            <div class="fugu-about-thumb2">
              <!--<img class="wow fadeInUpX" data-wow-delay=".30s" src="{{ asset('assets/images/all-img/cta-thumb')}}" alt="" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUpX;">-->
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-lg-6 col-md-11 d-flex align-items-center">
          <div class="fugu-default-content">
            <h3>We Are Your Partner Who Wants To Protect Your Future</h3>
            <p>Right now, what the people need most is a reliable and safe way to protect the wealth they have accumulated through years of hard work. Every day, the value of your hard earned money keeps falling, putting you to a loss. To protect you from this landsliding depreciation, we present to you a golden opportunity to preserve the value of your wealth.</p>

        </div>
        </div>
        <div class="col-12 mt-4">

             <p>Just by taking a quick look at history, we can easily understand that gold is the ultimate form of investment, which preserves value like no other. Hence, we offer you the chance to buy gold with your money and secure the value of it. The gold you buy is kept in your e-wallet. But that’s not it. Every year you stick with us, you will be rewarded with yearly profits on your investment.</p>
            <p>Furthermore, we have partnered up with quite a few medical institutions. In case you require medical attention, you can choose any from the list and use the e-wallet to make payment and receive a discount on the overall expense.</p>
        </div>
      </div>
    </div>
  </div>


  <div class="section bg-warning-600 fugu-section-padding z-index">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
            <div class="fugu-thumb" style="right: 10%;bottom: 10%;">
                <img src="{{asset('assets/images/all-img/thumb.png')}}" alt="">
                <div class="fugu-shape2">
                  <img src="{{asset('assets/images/shape/shape2.png')}}" alt="">
                </div>
                <div class="fugu-hero-star">
                  <!--<img src="{{asset('assets/images/all-img/star-shape.png')}}" alt="">-->
                </div>
                <div class="fugu-hero-star">
                    <!--<img src="{{asset('assets/images/all-img/star-shape.png')}}" alt="">-->
                  </div>
              </div>
        </div>
        <div class="col-lg-6 col-md-10 d-flex align-items-center">
          <div class="fugu-default-content large-content">
            <h3>Become A Part Of Our Pharma-Family</h3>
            <p>

Take a step in the right direction by becoming a member of our organization today. The only good spending you can do in times of recession is smart investments, and that’s precisely what we are offering. If you have a few questions that you wish to ask, please do not hesitate to give us a call. We will be more than happy to give you our time.
            </p>
            <div class="fugu-icon-list2">
              <ul>
                <li>
                    <div class="fulo-list-icon">
                      <img src="{{asset('assets/images/svg/check2.svg')}}" alt="">
                    </div>
                    <h3>Pay Less</h3>
                  </li>
                <li>
                  <div class="fulo-list-icon">
                    <img src="{{asset('assets/images/svg/check2.svg')}}" alt="">
                  </div>
                  <h3>Time Saved</h3>
                </li>
                <li>
                    <div class="fulo-list-icon">
                      <img src="{{asset('assets/images/svg/check2.svg')}}" alt="">
                    </div>
                    <h3>
                        Quality Compared
                    </h3>
                  </li>
                  <li>
                    <div class="fulo-list-icon">
                      <img src="{{asset('assets/images/svg/check2.svg')}}" alt="">
                    </div>
                    <h3>
                        Telehealth During COVID-19
                    </h3>
                  </li>
                  <li>
                    <div class="fulo-list-icon">
                      <img src="{{asset('assets/images/svg/check2.svg')}}" alt="">
                    </div>
                    <h3>

                        Share Documents Securely

                    </h3>
                  </li>
                  <li>
                    <div class="fulo-list-icon">
                      <img src="{{asset('assets/images/svg/check2.svg')}}" alt="">
                    </div>
                    <h3>


                        Primary Care & Urgent Care


                    </h3>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fugu-shape3">
      <img src="{{asset('assets/images/shape/shape2.png')}}" alt="">
    </div>
  </div>
<script>
 window.location = "{{route('home')}}";

</script>
@endsection
