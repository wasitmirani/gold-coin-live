@extends('layouts.frontend.master')

<style>

.fugu-breadcrumb-section {
    padding: 120px 0 61px;
    position: relative;
    color:white;
    /* background-color: var(--warning-400); */
    background-image: url({{ asset('/assets/images/all-img/about/sample3.png')}}) !important;
}

.breadcrumb .breadcrumb-item {
    color: wheat !important;
    text-shadow: 1px 1px 2px black, 0 0 25px black, 0 0 5px darkblue;
}
.h1, h1 {
    font-size: 60px;
    line-height: 75px;
    text-shadow: 1px 1px 2px black, 0 0 25px black, 0 0 5px darkblue;
    color: wheat !important;
}

.breadcrumb .breadcrumb-item a {
    color: wheat !important;
    text-shadow: 1px 1px 2px black, 0 0 25px black, 0 0 5px darkblue;
}

.site-menu-main .nav-link-item {
    color: wheat !important;
    text-shadow: 1px 1px 2px black, 0 0 25px black, 0 0 5px darkblue;
}

.fugu-btn.fugu-header-btn {
    padding: 11px 33px;
    margin-left: 40px;

    color: wheat !important;
    background-color: transparent;
    border: 2px solid wheat !important;
}


</style>
@section('title', 'Pharma Digital Gold Coin')

@section('content')



<div class="fugu-breadcrumb-section">
    <div class="container">
      <div class="breadcrumbs">
        <h1 class="wow fadeInUpX" data-wow-delay="0s" style="visibility: visible; animation-delay: 0s; animation-name: fadeInUpX;">Pharma Digital Gold Coin</h1>
        <nav aria-label="breadcrumb" class="wow fadeInUpX" data-wow-delay="0.15s" style="visibility: visible; animation-delay: 0.15s; animation-name: fadeInUpX;">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page"> Pharma Digital Gold Coin</li>
          </ol>
        </nav>
      </div>

    </div>
    <div class="fugu-shape8">
      <img src="{{ asset('/assets/images/shape/shape7.png') }}" alt="">
    </div>
    <div class="fugu-shape9">
      <img src="{{ asset('/assets/images/shape/shape8.png')}}" alt="">
    </div>
  </div>


<div class="section bg-warning-600 fugu-section-padding">
    <div class="container">

            <div class="row">
                <div class="col-lg-6 col-md-10 d-flex">

                    <div class="pos" id="_136:596" style="top:596;">
                        <span id="_17.5" style="font-weight:bold; font-family:Arial; font-size:17.5px; color:#000000">
                            What is PHARMA DIGITAL GOLD COIN?</span>
                    <p id="_14.8" style=" font-family:Arial; font-size:14.8px; color:#000000">
                    A Gold-backed Digital Gold Coin is a type of digital currency that is backed by physical
                    gold. The currency&#146;s value is determined on the basis of the current market price of gold
                    and can be used for transactions for Medical purposes as it is a Pharma-based coin
                    Digital Gold Coin <span style="font-weight:normal"> is backed by gold to tie the derivative asset i.e., Gold Coin to a tangible
                        asset i.e, Gold thereby preventing excessive fluctuations in price. The Gold backed Digital is digitally more secure than other digital currencies because the price of gold

                        is  generally  less  volatile than  the  prices  of  other  digital  assets,  such  as  stocks  or cryptocurrencies.
                    </p>
                    <p id="_14.4" style=" font-family:Arial; font-size:14.4px; color:#000000">
                        The Gold-backed Digital Gold Coins can also be used as a hedge against inflation. If the
                        price of gold rises, the value of the Digital Gold Coin will also increase accordingly. This will
                        protect investors from losing money if the price of other assets, such as stocks, were to
                        fall.
                        People who invest in Gold-backed Digital coins enjoy increased returns from the pricing of gold.
                    </p>
                    </div>
                </div>

                <div class="col-lg-6 col-md-10 ">
                    <video width="100%" autoplay muted id="videoplay">
                        <source src="{{asset('/assets/home.mp4')}}" type="video/mp4">
                      </video>
                </div>
            </div>

    </div>
</div>

@endsection
