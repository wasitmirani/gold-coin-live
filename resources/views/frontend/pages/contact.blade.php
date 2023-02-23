@extends('layouts.frontend.master')

@section('title', 'Contact')
@section('content')

@component('frontend.components.breadcrumb',['active'=>'Get in touch'])

@endcomponent
<div class="section bg-warning-600 fugu-section-padding">
    <div class="container">
      <div class="row">
        <div class="col-xl-5 col-lg-6 col-md-10">
          <div class="fugu-default-content contact-page">
            <h2>Have any questions? We will talk to you sincerely anytime</h2>
            <p>If you have any questions about subscription or usage, please fill out the form and our team will get back to you within 24 hours.</p>
            <div class="fugu-contact-info">
                <ul>
                  <li>
                    <a href="tel:+44 7776 398036">
                      <div class="fugu-contact-info-icon">
                        <img src="http://pharmadigitalgoldcoin.com/assets/images/social/call.svg" alt="">
                      </div>
                      <h5>Call us</h5>
                      <p>+44 7776 398036
                      <br>+971 50 624 9964
                      </p>

                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@pharmadigitalgoldcoin.com">
                      <div class="fugu-contact-info-icon">
                        <img src="http://pharmadigitalgoldcoin.com/assets/images/social/email.svg" alt="">
                      </div>
                      <h5>Email us</h5>
                      <p>info@pharmadigitalgoldcoin.com</p>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div class="fugu-contact-info-icon">
                        <img src="http://pharmadigitalgoldcoin.com/assets/images/social/map.svg" alt="">
                      </div>
                      <h5>Office address</h5>
                      <p>
  18 Dalston Gardens
  Victoria House
  HA7 1BU</p>
                    </a>
                  </li>
                </ul>
              </div>
          </div>
        </div>

        <div class="col-xl-6 col-lg-6 offset-xl-1">

            <form action="{{route('contact.store')}}" method="post">
                @csrf
                @if (Session::has('message'))
            <div class="alert alert-info">{{ Session::get('message') }}</div>
            <br>
           @endif
          <div class="fugu-contact-wrap  wow fadeInUpX" style="visibility: visible; animation-name: fadeInUpX;">
            <div class="fugu-input-field">
              <label>Your name</label>
              <input type="text" required value="{{ old('name') }}" name="name" class="form-control @error('name') is-invalid @enderror"  placeholder="Enter your full name">
              @error('name')
              <span class="invalid-feedback" role="alert">
                  <strong>{{ $message }}</strong>
              </span>
             @enderror
            </div>
            <div class="fugu-input-field">
              <label>Email address</label>

                 <input type="email" required  value="{{ old('email') }}" class="form-control @error('email') is-invalid @enderror" id="email" name="email" placeholder="Enter your email" autofocus>
          @error('email')
          <span class="invalid-feedback" role="alert">
              <strong>{{ $message }}</strong>
          </span>
         @enderror
            </div>
            <div class="fugu-input-field">
                <label>Phone Number</label>

                   <input type="text" required  value="{{ old('phone') }}" class="form-control @error('phone') is-invalid @enderror" id="email" name="phone" placeholder="Enter your phone" autofocus>
            @error('phone')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
           @enderror
              </div>
            <div class="fugu-input-field">

              <label>Write your message</label>

              <textarea required minlength="20" name="message" placeholder="Write us your question here..."></textarea>

            </div>
            <button type="submit" id="fugu-input-submit">Send Message</button>
          </div>
        </form>
        </div>

      </div>
    </div>
  </div>

@endsection
