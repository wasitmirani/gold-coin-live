

<style>

.fugu-breadcrumb-section {
    padding: 120px 0 61px;
    position: relative;
    color:white;
    background-image: url({{ asset('/assets/images/cover2.jpg')}}) !important;
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
<div class="fugu-breadcrumb-section">
    <div class="container">
      <div class="breadcrumbs">
        <h1 class="wow fadeInUpX" data-wow-delay="0s" style="visibility: visible; animation-delay: 0s; animation-name: fadeInUpX;">{{ $active }}</h1>
        <nav aria-label="breadcrumb" class="wow fadeInUpX" data-wow-delay="0.15s" style="visibility: visible; animation-delay: 0.15s; animation-name: fadeInUpX;">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">{{ $active }}</li>
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

