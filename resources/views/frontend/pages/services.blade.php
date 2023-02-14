@extends('layouts.frontend.master')

@section('title', 'Services')
@section('content')

@component('frontend.components.breadcrumb',['active'=>'Our Service'])


@endcomponent

<div class="section bg-warning-600 fugu-section-padding3">
    <div class="container">
      <div class="fugu-section-title">
        <h2>Choose the service you need</h2>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="fugu-iconbox-wrap fugu-iconbox-wrap5 wow fadeInUpX" data-wow-delay="0s" style="visibility: visible; animation-delay: 0s; animation-name: fadeInUpX;">
            <div class="fugu-iconbox-icon">
              {{--  <img src="{{asset('assets/images/all-img/icon1-1.png')}}" alt="">  --}}
            </div>
            <div class="fugu-iconbox-data">
              <h4>Safe & Secure</h4>
              <p>We offer you an opportunity to protect the value of your money safely and securely..</p>
              <a class="fugu-icon-btn" href="#">Discover More <img src="{{asset('assets/images/svg/arrow-black-right-1.svg')}}" alt=""></a>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="fugu-iconbox-wrap fugu-iconbox-wrap5 wow fadeInUpX" data-wow-delay=".10s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUpX;">
            <div class="fugu-iconbox-icon">
              {{--  <img src="{{asset('assets/images/all-img/icon2-1.png')}}" alt="">  --}}
            </div>
            <div class="fugu-iconbox-data">
              <h4>Convenient Buying</h4>
              <p>Our buying and spending process is extremely simple and accessible. We aim to please.</p>
              <a class="fugu-icon-btn" href="#">Discover More <img src="{{asset('assets/images/svg/arrow-black-right-1.svg')}}" alt=""></a>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="fugu-iconbox-wrap fugu-iconbox-wrap5 wow fadeInUpX" data-wow-delay=".20s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUpX;">
            <div class="fugu-iconbox-icon">
              {{--  <img src="{{asset('assets/images/all-img/icon3-1.png')}}" alt="">  --}}
            </div>
            <div class="fugu-iconbox-data">
              <h4>Earn & Save</h4>
              <p>Earn yearly profits and save on the discounts we offer on the much needed medical services.</p>
              <a class="fugu-icon-btn" href="#">Discover More <img src="{{asset('assets/images/svg/arrow-black-right-1.svg')}}" alt=""></a>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="fugu-iconbox-wrap fugu-iconbox-wrap5 wow fadeInUpX" data-wow-delay=".30s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUpX;">
            <div class="fugu-iconbox-icon">
              {{--  <img src="{{asset('assets/images/all-img/icon4-1.png')}}" alt="">  --}}
            </div>
            <div class="fugu-iconbox-data">
              <h4>
                The Smart Investment</h4>
              <p>Cash is losing value every day. Crypto is far too unstable and risky. Gold is the best and only option.</p>
              <a class="fugu-icon-btn" href="#">Discover More <img src="{{asset('assets/images/svg/arrow-black-right-1.svg')}}" alt=""></a>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="fugu-iconbox-wrap fugu-iconbox-wrap5 wow fadeInUpX" data-wow-delay=".40s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUpX;">
            <div class="fugu-iconbox-icon">
              {{--  <img src="{{asset('assets/images/all-img/icon5.png')}}" alt="">  --}}
            </div>
            <div class="fugu-iconbox-data">
              <h4>Digital Pharmacy</h4>
              <p>Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Quisque velit nisi pretium lacinia in elementum id enim</p>
              <a class="fugu-icon-btn" href="#">Discover More <img src="{{asset('assets/images/svg/arrow-black-right-1.svg')}}" alt=""></a>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="fugu-iconbox-wrap fugu-iconbox-wrap5 wow fadeInUpX" data-wow-delay=".50s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUpX;">
            <div class="fugu-iconbox-icon">
              {{--  <img src="{{asset('assets/images/all-img/icon6.png')}}" alt="">  --}}
            </div>
            <div class="fugu-iconbox-data">
              <h4>Mental Health</h4>
              <p>Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Quisque velit nisi pretium lacinia in elementum id enim</p>
              <a class="fugu-icon-btn" href="#">Discover More <img src="{{asset('assets/images/svg/arrow-black-right-1.svg')}}" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  @component('frontend.components.pricing')

  @endcomponent


@endsection

