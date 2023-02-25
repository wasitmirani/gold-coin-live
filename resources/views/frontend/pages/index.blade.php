
@extends('layouts.frontend.master')

<style>
        .navigation{
  padding-top:30px;
  padding-bottom:20px;
  position:absolute;
  top:0;
  width:100%;
  z-index:1;
  background-color: rgba(0,0,0,0.3); /** Change value according to you transperncy**/
}

.navbar-right{
  float:right;
  padding-right:10%;
}

.navbar-right a{
  text-decoration:none;
  padding:10px;
  color: #fff;
  font-family:Arial;
  font-weight:900;
}

.navbar-right a:hover{
  text-decoration:underline;
}
.navbar-logo{
  padding-left:10%;
  font-family:Arial;
  font-size:30px;
  font-weight:bold;
  text-decoration:none;
  color:#fff;
}

.video-container {
z-index: -100;
width:100%;
height:100%;
overflow:hidden;
position:absolute;
top:0;
left:0;
}

#video-bg{
  width:100%;
/*height: 100%;*/


}
@media only screen and (max-width: 749px) {
  /* For mobile phones: */
 #video-bg{
 width: 100%;
     max-width: 100%;
  height:auto;


}
}
.portfolio-section{
  margin-top:50%;
}
.tagline-left{
  float:left;
  width:50%;
  text-align:center;
}

.tagline-right{
  float:right;
  width:50%;
  text-align:center;
}

.tagline-video{
  width:75%;
}

.tagline-right-text{
 position:absolute;
 margin-top:9%;
 text-align:center;
 margin-left:17%;
font-family:Arial;
 color:#fff;
  width:290px;
  font-size:40px;
}

.tagline-left-text{
 position:absolute;
 margin-top:9%;
 text-align:center;
 margin-left:11%;
font-family:Arial;
 color:#fff;
  width:375px;
  font-size:40px;
}
a{
  text-decoration: none  !important;

}

.goldheading {
    font-size: 60px;
    line-height: 75px;
    text-shadow: 1px 1px 2px black, 0 0 25px #fac840, 0 0 5px darkblue;
    color: #fac840 !important;
}


    .site-menu-main .nav-link-item {
    color: #fac840 !important;
    text-shadow: 1px 1px 2px black, 0 0 25px #fac840, 0 0 5px darkblue;
}

    .fugu-btn.fugu-header-btn {
    padding: 11px 33px;
    margin-left: 40px;

    color: #fac840 !important;
    background-color: transparent;
    border: 2px solid #fac840 !important;
}

</style>
@section('content')

<div class="fugu-hero-section">
     <div class="video-container embed-responsive embed-responsive-16by9" >

      <video autoplay muted loop   id="video-bg">

        <source src="{{asset('/assets/images/video.mp4')}}" type="video/mp4">
        <source src="{{asset('/assets/images/video.mp4')}}" type="video/ogg">
      </video>


    </div>
    {{-- <div class="container">


      <div class="row">
        <div class="col-xl-9 col-lg-9">
          <div class="fugu-hero-content">
            <h2 class="wow fadeInUpX goldheading" data-wow-delay="0s">Guard Your Wealth  </h2>
            <h2 class="wow fadeInUpX goldheading" data-wow-delay="0s">Guard Your Health </h2>

            <p class="wow fadeInUpX goldheading" data-wow-delay="0.25s">The Ultimate Solution Against Inflation & Expensive Medical Services.</p>

          </div>
        </div>
      </div>
    </div> --}}
    <div class="fugu-shape1">
      <img src="{{asset('assets/images/shape/shape1.png')}}" alt="">
    </div>
    </div>

  <!-- End hero section -->

  <!--<div class="fugu-client-section bg-gray-800">-->
  <!--  <div class="container">-->
  <!--    <div class="fugu-client-title text-white">-->
  <!--      <h5>Trusted by 1600+ of the worlds most popular companies</h5>-->
  <!--    </div>-->
  <!--    <div class="fugu-client-slider">-->
  <!--      <div class="fugu-brand-logo">-->
  <!--        <img src="{{asset('assets/images/all-img/client1.png')}}" alt="">-->
  <!--      </div>-->
  <!--      <div class="fugu-brand-logo">-->
  <!--        <img src="{{asset('assets/images/all-img/client2.png')}}" alt="">-->
  <!--      </div>-->
  <!--      <div class="fugu-brand-logo">-->
  <!--        <img src="{{asset('assets/images/all-img/client3.png')}}" alt="">-->
  <!--      </div>-->
  <!--      <div class="fugu-brand-logo">-->
  <!--        <img src="{{asset('assets/images/all-img/client4.png')}}" alt="">-->
  <!--      </div>-->
  <!--      <div class="fugu-brand-logo">-->
  <!--        <img src="{{asset('assets/images/all-img/client5.png')}}" alt="">-->
  <!--      </div>-->
  <!--      <div class="fugu-brand-logo">-->
  <!--        <img src="{{asset('assets/images/all-img/client1.png')}}" alt="">-->
  <!--      </div>-->
  <!--      <div class="fugu-brand-logo">-->
  <!--        <img src="{{asset('assets/images/all-img/client2.png')}}" alt="">-->
  <!--      </div>-->
  <!--      <div class="fugu-brand-logo">-->
  <!--        <img src="{{asset('assets/images/all-img/client3.png')}}" alt="">-->
  <!--      </div>-->
  <!--      <div class="fugu-brand-logo">-->
  <!--        <img src="{{asset('assets/images/all-img/client4.png')}}" alt="">-->
  <!--      </div>-->
  <!--      <div class="fugu-brand-logo">-->
  <!--        <img src="{{asset('assets/images/all-img/client5.png')}}" alt="">-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <!--</div>-->
  <!-- End client section -->

  <div class="section bg-warning-600 fugu-section-padding z-index">
    <div class="container">
      <div class="fugu-section-title title-large">
        <h3>What We Do
        </h3>
      </div>
      <div class="fugu--content-bottom">
        <div class="row">
          <!--<div class="col-xl-6 d-flex align-items-center">-->
          <!--  <div class="fugu--content-thumb">-->
          <!--    <img class="wow fadeInLeft" data-wow-delay=".10s" src="{{asset('assets/images/bankinfo.jpg')}}" alt="" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInLeft;">-->
              <!--<div class="fugu--bitcoin">-->
              <!--  <img src="{{asset('assets/images/all-img/v5/bitcoin4.png')}}" alt="">-->
              <!--</div>-->
              <!--<div class="fugu--content-shape">-->
              <!--  <img src="{{asset('assets/images/shape2/shape2.png')}}" alt="">-->
              <!--</div>-->
          <!--  </div>-->
          <!--</div>-->
            <div class="col-lg-7 col-md-10 d-flex align-items-center">
            <div class="fugu-thumb" style="right: 10%;bottom: 10%;">
                <img src="{{asset('/assets/images/bankinfo.jpg')}}" alt="" style="border-radius: 30px;opacity: 0.8;filter: drop-shadow(8px 6px 8px #222);">
                <div class="fugu-shape2">
                  <img src="{{asset('assets/images/shape/shape2.png')}}" alt="">
                </div>
                <div class="fugu-hero-star">
                  <!--<img src="https://test.pharmadigitalgoldcoin.com/assets/images/all-img/star-shape.png" alt="">-->
                </div>
                <div class="fugu-hero-star">
                    <!--<img src="https://test.pharmadigitalgoldcoin.com/assets/images/all-img/star-shape.png" alt="">-->
                  </div>
              </div>
        </div>
          <div class="col-lg-5 col-md-10 d-flex align-items-center">
            <div class="fugu--default-content">

              <h3 style="color:#000;" class="wow fadeInUpX mt-3" data-wow-delay="0s">The Value We Offer That Our Users Love</h3>
              <p style="color:#000;">While the concept is simple a place to store your crypto &amp; use choosing Fugu crypto wallet can be an incredibly experience. </p>
              <div class="fugu--accordion-one accordion-two" id="accordionExample">
                <div class="accordion-item">
                  <h2 style="color:#000;" class="accordion-header" id="headingOne">
                    <button style="color:#000;" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        24/7 Support
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style="">
                    <div class="accordion-body"  style="color:#000;"s>

                        Facing any difficulties? Not a problem. Our hardworking team is always available to serve you and help you whenever required.
                    </div>
                  </div>
                </div>
                <div class="accordion-item" >
                  <h2 class="accordion-header" id="headingTwo">
                    <button style="color:#000;" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Inflation Solution

                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style="">
                    <div style="color:#000;" class="accordion-body">
                        Tired of seeing the value of your money dropping as everything becomes more and more expensive? Try gold. The value keeps going up!
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 style="color:#000;" class="accordion-header" id="headingThree">
                    <button style="color:#000;" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Yearly Profits
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div style="color:#000;" class="accordion-body">
                        You don’t just secure your money’s worth with us, but we also offer an annual profit surplus that depends on your investment.
                    </div>
                  </div>
                </div>
              </div>

              <div class="fugu-btn-wrap">
                <a class="fugu-btn" href="{{ route('login') }}">Go To Exchanges</a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <!-- End section -->
  @component('frontend.components.pricing')

  @endcomponent

  <!-- End section -->

  <div class="section bg-warning-600 fugu-section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-1 order-lg-2">
            <div class="fugu-video-thumb wow fadeInUpX" data-wow-delay=".20s">
            <video width="100%" autoplay muted >
                <source src="{{asset('/assets/home.mp4')}}" type="video/mp4">
              </video>
          </div>
        </div>
        <div class="col-lg-5 col-md-10 d-flex align-items-center">
          <div class="fugu-default-content large-content">
            <h3>Money Loses Its Value Daily While Gold Becomes More Valuable Every Day.</h3>
            <p>Gold has always been the most secure type of investment, and the present is the biggest reason why. Money is terrible at retaining its value. Gold, on the other hand, keeps becoming more expensive.</p>
            <div class="fugu-icon-list">
              <ul>
                <li><img src="{{asset('assets/images/svg/check1.svg')}}" alt="">The Real Dollar Value Has Fallen By 86% In The Last 50 Years.</li>
                <li><img src="{{asset('assets/images/svg/check1.svg')}}" alt="">Gold’s Value Has Only Risen Over The Last 50 Years.</li>
                <li><img src="{{asset('assets/images/svg/check1.svg')}}" alt="">During Covid, Gold’s Value Sky-Rocketed To An All-Time High: $2,290.75/Ounce</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
  <!-- End section -->

  <div class="section bg-warning-600 fugu-section-padding z-index">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
            <div class="fugu-thumb" style="right: 10%;bottom: 10%;">
                <img src="{{asset('assets/images/all-img/thumb.png')}}" style="border-radius: 25px;opacity: 0.8;filter: drop-shadow(8px 6px 8px #222);" alt="">
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
            <h3>Wealth, Profit, Discounts - All in One</h3>
            <p>
                What is the biggest issue that people are facing nowadays? Preserving their money. Cash is losing its value. And fast. Which is why we are bringing the option to purchase real gold, store it in an online wallet where it’s completely safe and preserves its value.

This wallet gold can be then used to pay for medical services from medical institutions that we are in partnership with. But that’s not all. We have also created a reward for our loyal users. At the end of every year, depending on the amount of investment they have made, we will give a profit surplus.
            </p>
            <div class="fugu-icon-list2">
              <ul>
                <li>
                  <div class="fulo-list-icon">
                    <img src="{{asset('assets/images/svg/lightning-bolt.svg')}}" alt="">
                  </div>
                  <h4>Earn & Save</h4>
                  <p>Earn yearly profits and save on the discounts we offer on the much needed medical services.</p>
                </li>
                <li>
                  <div class="fulo-list-icon">
                    <img src="{{asset('assets/images/svg/lightning-bolt.svg')}}" alt="">
                  </div>
                  <h4>
                    Convenient Buying
                  </h4>
                  <p>Our buying and spending process is extremely simple and accessible. We aim to please.</p>
                </li>
                <li>
                  <div class="fulo-list-icon">
                    <img src="{{asset('assets/images/svg/lightning-bolt.svg')}}" alt="">
                  </div>
                  <h4>
                    The Smart Investment
                </h4>
                  <p>Cash is losing value every day. Crypto is far too unstable and risky. Gold is the best and only option.</p>
                </li>
                <li>
                    <div class="fulo-list-icon">
                      <img src="{{asset('assets/images/svg/lightning-bolt.svg')}}" alt="">
                    </div>
                    <h4>
                        Safe & Secure
                  </h4>
                    <p>We offer you an opportunity to protect the value of your money safely and securely.</p>
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
  <!-- End apps section -->

  <!--<div class="fugu-testimonial-section fugu-section-padding2">-->
  <!--  <div class="container">-->
  <!--    <div class="fugu-section-title title-large">-->
  <!--      <h2>User gives feedback</h2>-->
  <!--    </div>-->
  <!--    <div class="fugu-testimonial-slider">-->
  <!--      <div class="fugu-testimonial-card">-->
  <!--        <div class="fugu-testimonial-author-wrap">-->
  <!--          <div class="fugu-testimonial-author-thumb">-->
  <!--            <img src="{{asset('assets/images/all-img/testimonial1.png')}}" alt="">-->
  <!--          </div>-->
  <!--          <div class="fugu-testimonial-author-data">-->
  <!--            <h5>Marcel Gafam</h5>-->
  <!--            <span>@margafam</span>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <h4>Very satisfied 😊</h4>-->
  <!--        <p>I started with the Fugu app and now I am planning on upgrading to higher value &-->
  <!--          $25 welcome bonus. when you very first register for the app or the exchange with a referral code.</p>-->
  <!--      </div>-->
  <!--      <div class="fugu-testimonial-card">-->
  <!--        <div class="fugu-testimonial-author-wrap">-->
  <!--          <div class="fugu-testimonial-author-thumb">-->
  <!--            <img src="{{asset('assets/images/all-img/testimonial2.png')}}" alt="">-->
  <!--          </div>-->
  <!--          <div class="fugu-testimonial-author-data">-->
  <!--            <h5>Patrick Perfetto</h5>-->
  <!--            <span>@patrickfetto</span>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <h4>Really happy with the app 💰</h4>-->
  <!--        <p>Here, I'm rating the Fugu crypto app and the debit card. My experience is great! & the app is very well designed. Crypto is a marketing is very good and I think it'll to win long term with fugu app.</p>-->
  <!--      </div>-->
  <!--      <div class="fugu-testimonial-card">-->
  <!--        <div class="fugu-testimonial-author-wrap">-->
  <!--          <div class="fugu-testimonial-author-thumb">-->
  <!--            <img src="{{asset('assets/images/all-img/testimonial3.png')}}" alt="">-->
  <!--          </div>-->
  <!--          <div class="fugu-testimonial-author-data">-->
  <!--            <h5>Alex Zansir</h5>-->
  <!--            <span>@alexzan</span>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <h4>I love it! ❤️</h4>-->
  <!--        <p>I have been using Fugu crypto app since December 2021 and so far things have a been alright where purchasing BTCs and to my external wallets. Thanks fugu for a good experience at my first Wallet</p>-->
  <!--      </div>-->
  <!--      <div class="fugu-testimonial-card">-->
  <!--        <div class="fugu-testimonial-author-wrap">-->
  <!--          <div class="fugu-testimonial-author-thumb">-->
  <!--            <img src="{{asset('assets/images/all-img/testimonial1.png')}}" alt="">-->
  <!--          </div>-->
  <!--          <div class="fugu-testimonial-author-data">-->
  <!--            <h5>Marcel Gafam</h5>-->
  <!--            <span>@margafam</span>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <h4>Very satisfied 😊</h4>-->
  <!--        <p>I started with the Fugu app and now I am planning on upgrading to higher value &-->
  <!--          $25 welcome bonus. when you very first register for the app or the exchange with a referral code.</p>-->
  <!--      </div>-->
  <!--      <div class="fugu-testimonial-card">-->
  <!--        <div class="fugu-testimonial-author-wrap">-->
  <!--          <div class="fugu-testimonial-author-thumb">-->
  <!--            <img src="{{asset('assets/images/all-img/testimonial2.png')}}" alt="">-->
  <!--          </div>-->
  <!--          <div class="fugu-testimonial-author-data">-->
  <!--            <h5>Patrick Perfetto</h5>-->
  <!--            <span>@patrickfetto</span>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <h4>Really happy with the app 💰</h4>-->
  <!--        <p>Here, I'm rating the Fugu crypto app and the debit card. My experience is great! & the app is very well designed. Crypto is a marketing is very good and I think it'll to win long term with fugu app.</p>-->
  <!--      </div>-->
  <!--      <div class="fugu-testimonial-card">-->
  <!--        <div class="fugu-testimonial-author-wrap">-->
  <!--          <div class="fugu-testimonial-author-thumb">-->
  <!--            <img src="{{asset('assets/images/all-img/testimonial3.png')}}" alt="">-->
  <!--          </div>-->
  <!--          <div class="fugu-testimonial-author-data">-->
  <!--            <h5>Alex Zansir</h5>-->
  <!--            <span>@alexzan</span>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <h4>I love it! ❤️</h4>-->
  <!--        <p>I have been using Fugu crypto app since December 2021 and so far things have a been alright where purchasing BTCs and to my external wallets. Thanks fugu for a good experience at my first Wallet</p>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <!--</div>-->
  <!-- End testimonail section -->

  <!--<div class="section bg-warning-300 fugu-section-padding2">-->
  <!--  <div class="container">-->
  <!--    <div class="row">-->
        <!--<div class="col-lg-5 position-relative">-->
        <!--  <div class="fugu-default-content large-content">-->
        <!--    <h2>Frequently asked questions </h2>-->
        <!--    <p>Frequently asked questions about our crypto currency app. The crypto security for conducting trusted transactions.</p>-->
        <!--    <a href="#" class="fugu-faq-btn">Don't find the answer? Contact us here</a>-->
        <!--  </div>-->
        <!--</div>-->
        <!--<div class="col-lg-5 offset-lg-2">-->
        <!--  <div class="fugu-accordion-wrap">-->
        <!--    <div class="fugu-accordion-item">-->
        <!--      <h4>What is Lorem Ipsum?</h4>-->
        <!--      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>-->
        <!--    </div>-->
        <!--    <div class="fugu-accordion-item">-->
        <!--      <h4>What is Lorem Ipsum?-->
        <!--    </h4>-->
        <!--    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>-->
        <!--    </div>-->
        <!--    <div class="fugu-accordion-item">-->
        <!--      <h4>What is Lorem Ipsum?</h4>-->
        <!--      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>-->
        <!--    </div>-->
        <!--  </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <!--</div>-->
  <!-- End faq -->

  <div class="fugu-go-top">
    <img src="{{asset('assets/images/svg/arrow-black-right.svg')}}" alt="">
  </div>
  {{-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script> --}}
  <script>


const videoEl = document.getElementById('video-bg');
// videoEl.muted=false;
// videoEl.controls=true;

// videoEl.volume = 1;

// videoEl.play();
// videoEl.pause();






  </script>
@endsection
