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


.containers {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.containers img {vertical-align: middle;}

.containers .content {
  position: absolute;
  bottom: 0;

color: white;
  width: 100%;
  padding: 20px;
}
.img-blur{
    filter:blur(4px); !important -webkit-filter: blur(4px);

}
.para{margin:0in;font-size:15px;font-family:"Calibri",sans-serif;margin-top:1.35pt;margin-right:25.8pt;margin-bottom:.0001pt;margin-left:26.0pt;text-align:justify;'}
</style>
@section('title', 'Pharma Digital Gold Coin Work')
@section('content')


<div class="fugu-breadcrumb-section">
    <div class="container">
      <div class="breadcrumbs">
        <h1 class="wow fadeInUpX" data-wow-delay="0s" style="visibility: visible; animation-delay: 0s; animation-name: fadeInUpX;">How It Works</h1>
        <nav aria-label="breadcrumb" class="wow fadeInUpX" data-wow-delay="0.15s" style="visibility: visible; animation-delay: 0.15s; animation-name: fadeInUpX;">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page"> How It Works</li>
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


<div class="section bg-warning-600  fugu-section-padding z-index">

<div class="section fugu-section-padding">
    <div class="container">
        <h2 style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:26.0pt;text-align:justify;font-size:19px;font-family:"Calibri",sans-serif;'>How does a Pharma Digital Gold Coin work?</h2>

        <p style="margin:0in;font-size:15px;font-family:'Calibri',sans-serif;margin-top:1.35pt;margin-right:25.8pt;margin-bottom:.0001pt;margin-left:26.0pt;">The physical gold used to back Digital Gold Coin is held in gold reserves. These reserves are held by financial custodians, typically banks or reputed vaults. In respect to the specific backing ratio, it may vary depending on the Digital Gold Coin</strong>. For example, some are backed 1:1 (1 coin to 5 grams of gold) with physical gold, while others may be backed by a fraction of an ounce.</p>

        <p  class="para">The main advantage of nvesting in a Gold-backed Digital Gold Coin is that it provides stability, assurance and security. Gold has been used as a form of currency for centuries, and its value has conventionally remained steady over the time. As such, the value of Gold-backed Digital Gold Coin </strong>will not fall beyond the current market value of gold, making it a relatively stable and secure Digital investment option.</p>
        <p ><br></p>




        <div class="containers">
 <img class="mt-2 img-blur" src="{{asset('assets/images/sample3.png')}}"  height="400" style="width:100%;" alt="" srcset="">
  <div class="content">

    <p>Gold Backed Digital coins offer investores the stability of gold without having to own or store it physically.</p>
    <p>When a person ivests in Gold backed digital coin, they receive a serial number corresponding to the physical gold bar backing their token.</p>
    <p>Gold typically attracts investors during periods of global economic of political uncertainties. Gold back digital coins have the potential to do the same, but with the added benefit of being digital and more easily divisible transportable and tradeable then  physical gold bars. </p>
  </div>
</div>
     <br>
        <p  class="para">Pharma Digital Gold Coin is a Gold-backed Coin that is part of the Pharma Park Global Group. Launched in 2022 Pharma Digital Gold Coin is currently the latest Gold-backed DIGITAL GOLD COIN in the market. The gold is held in a vault controlled by our refinery.</p>
        <p class="para">On top of gold, Pharma Digital Gold Coin also grants access to traditional payments for medical bills. The holders can check the amount of gold they own by simply logging into their account on our website, <a data-fr-linked="true" href="https://www.pharmadigitalgoldcoin.com">www.pharmadigitalgoldcoin.com</a>, which will provide the entire information on the gold coins the holders who own these coins.</p>
        <p class="para">The minimum purchase for Pharma Digital Gold Coin is 5 Grams of gold. Who issues gold-backed tokens?</p>

        <p class="para">For a Digital Gold Coin to be Gold-backed, it must be issued or created by a company that owns and stores physical gold in vaults.</p>
        <p class="para">Pharma Digital Gold Coin makes investing in gold quite accessible by offering fractional coins. Such as, investors can accumulate gold in small amounts and manage their holdings in real time, as well as they can use it for medical treatment purposes. The physical gold is held in a reputed third-party vault controlled by Dhahabu International Refinery.</p>
        <p class="para">One Pharma Digital Gold Coin is (5) five Grams of gold, with a minimum purchase amount (as per then prevailing current market price).</p>
        <p class="para">The Pharma Digital Gold Coin can be stored and transferred much like any other Digital Currency.</p>
        <p class="para">Pharma Digital Gold Coin requires a minimum purchase of 5 (five) Grams of gold for Pharma Digital</p>
        <p class="para">Gold Coin and does not have any maximum limit.</p>
        <p class="para">What are some benefits of investing in Gold-backed Digital coins?</p>
        <p class="para">The major advantage of investing in Gold-backed Digital Gold Coins is that, unlike physical gold, they are in digital form and can be divided into small parts, which makes them conveniently transportable, easily transferable, and relatively more affordable.</p>
        <p class="para">Another key benefit is that since Gold-backed Digital Gold Coins are pegged to the price of gold, they will maintain their value even if the value of Cryptocurrencies or Stocks is crashing. This makes them a good investment option during volatile periods in the market.</p>
        <p class="para">Pharma Digital Gold Coins also offer additional features and benefits, such as access to medical treatments.</p>

        </div>
    </div>
</div>
@endsection
