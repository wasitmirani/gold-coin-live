
  <header class="site-header site-header--menu-right fugu-header-section" id="sticky-menu">
    <div class="container-fluid">
      <nav class="navbar site-navbar">
        <!-- Brand Logo-->
        <div class="brand-logo">
          <a href="{{ url('/') }}">
            <img src="{{ asset('/assets/images/logo.png') }}" alt="" width="80" class="light-version-logo">
          </a>

          {{--  <h2 class="wow fadeInUpX">{{ config('app.name') }}</h2>  --}}
        </div>
        <div class="menu-block-wrapper">
          <div class="menu-overlay"></div>
          <nav class="menu-block" id="append-menu-header">
            <div class="mobile-menu-head">
              <div class="go-back">
                <i class="fa fa-angle-left"></i>
              </div>
              <div class="current-menu-title"></div>
              <div class="mobile-menu-close">&times;</div>
            </div>
            <ul class="site-menu-main">
                <li class="nav-item nav-item-has-children">
                    <a href="{{url('/') }}" class="nav-link-item {{ Request::routeIs('home') ? 'active' : '' }}">Home </a>
                </li>

                <li class="nav-item nav-item-has-children">
                <a href="#" class="nav-link-item drop-trigger">About <i class="fas fa-angle-down"></i></a>
                <ul class="sub-menu" id="submenu-1">
                  <li class="sub-menu--item">
                    <a href="{{ route('about') }}">About us</a>
                  </li>
                  <li class="sub-menu--item">
                    <a href="{{ route('digitalCoin') }}">Digital Gold Coin</a>
                  </li>
                  <li class="sub-menu--item">
                    <a href="{{ route('digitalCoinWork') }}">How It Works</a>
                  </li>

                </ul>
              </li>
                <li class="nav-item nav-item-has-children">
                    <a href="{{ route('pricing') }}" class="nav-link-item ">Pricing </a>
                </li>
                <li class="nav-item nav-item-has-children">
                    <a href="{{ route('services') }}" class="nav-link-item ">Services </a>
                </li>

                <li class="nav-item nav-item-has-children">
                    <a href="{{ route('contact') }}" class="nav-link-item ">Contact Us </a>
                </li>
                <li class="nav-item nav-item-has-children">
                    <a href="#" class="nav-link-item drop-trigger">
                    {{!empty(request('language'))  ? request('language') : 'language'  }}
                    <i class="fas fa-angle-down"></i>
                    </a>
                    <ul class="sub-menu" id="submenu-1">
                      <li class="sub-menu--item">
                        <a href="{{ route('home',['language'=>'english']) }}">English</a>
                      </li>
                      <li class="sub-menu--item">
                        <a href="{{ route('home',['language'=>'hindi']) }}">Hindi</a>
                      </li>

                    </ul>
                  </li>



              <div class="header-btn header-btn-l1 fugu-responsive-btn">
                @if(!Auth::check())
                <a class="fugu-btn fugu-header-btn" href="{{ route('login') }}">
                  Get Started
                </a>
                @else
                <a class="fugu-btn fugu-header-btn" href="{{ route('login') }}">
                    Dashboard
                  </a>
                @endif
                <a class="fugu-btn fugu-header-btn mt-2" href="#">
                <img src="{{asset('assets/images/global.png')}}" alt="" srcset="">
                <strong style="color:#000000 !important;margin-left: 5px;" >

                {{getCountry()}}
                </strong>
                </a>

              </div>

            </ul>
          </nav>

        </div>
        <div class="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
            @if(!Auth::check())
            <a class="fugu-btn fugu-header-btn" href="{{ route('login') }}">
              Get Started
            </a>
            @else
            <a class="fugu-btn fugu-header-btn" href="{{ route('login') }}">
                Dashboard
              </a>
            @endif
        </div>
        <div class="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex" style="padding: 10px;">
                <img src="{{asset('assets/images/global.png')}}" alt="" srcset="">
                <strong style="color:#ffffff;margin-left: 5px;" >

                {{getCountry()}}
                </strong>
        

        </div>
        <!-- mobile menu trigger -->
        <div class="mobile-menu-trigger">
          <span></span>
        </div>
        <!--/.Mobile Menu Hamburger Ends-->
      </nav>
    </div>
  </header>

