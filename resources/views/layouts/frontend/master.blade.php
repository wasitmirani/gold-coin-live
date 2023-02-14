
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> @yield('title') | {{ config('app.name') }}</title>
  <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
  <!--<link href="//db.onlinewebfonts.com/c/e662339992c4abf5b43f537391bd3169?family=Candara" rel="stylesheet" type="text/css"/>-->
  <link rel="shortcut icon" href="{{ asset('/assets/images/favicon.png')}}') }}" type="image/x-icon">
  <link rel="icon" href="{{ asset('/assets/images/favicon.png')}}') }}" type="image/x-icon">
  <!--- End favicon-->


  <!-- End google font  -->

  <link rel="stylesheet" href="{{ asset('/assets/css/bootstrap.min.css')}}" />
  <link rel="stylesheet" href="{{ asset('/assets/css/fontawesome.css')}}" />
  <link rel="stylesheet" href="{{ asset('/assets/css/slick.css')}}" />
  <link rel="stylesheet" href="{{ asset('/assets/css/magnific-popup.css')}}" />
  <link rel="stylesheet" href="{{ asset('/assets/css/swiper-bundle.min.css')}}" />
  <link rel="stylesheet" href="{{ asset('/assets/css/icomoon-font.css')}}" />
  <link rel="stylesheet" href="{{ asset('/assets/css/animate.css')}}" />
  <link rel="stylesheet" href="{{ asset('/assets/css/custom.css')}}" />


  <!-- Code Editor  -->

  <link rel="stylesheet" href="{{ asset('/assets/css/main.css')}}" />
  <link rel="stylesheet" href="{{ asset('/assets/css/app.min.css')}}" />

</head>


<style>
    
    body{
        font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
        
    }
    
    h1,h2,h3,h5,h6,h4,span,p,a,strong,small,ul,li,button{
             font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
    }
    .menu-block.active .nav-link-item {
     /*color: #000!important; */
}
</style>
<body class="light">


{{--  Start Header  --}}

@include('layouts.frontend.components.navbar')

{{--  Start Body  --}}

{{--  End Header  --}}

@yield('content')


@include('layouts.frontend.components.footer')

  <div class="fugu-preloader">
    <div class="fugu-spinner">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" />
      </svg>
    </div>
    <div class="fugu-title">loading...</div>
  </div>

  <!-- scripts -->
  <script src="{{ asset('assets/js/jquery-3.6.0.min.js')}}"></script>
  <script src="{{ asset('assets/js/bootstrap.bundle.min.js')}}"></script>
  <script src="{{ asset('assets/js/menu/menu.js')}}"></script>
  <script src="{{ asset('assets/js/slick.js')}}"></script>
  <script src="{{ asset('assets/js/isotope.pkgd.min.js')}}"></script>
  <script src="{{ asset('assets/js/jquery.magnific-popup.min.js')}}"></script>
  <script src="{{ asset('assets/js/swiper-bundle.min.js')}}"></script>
  <script src="{{ asset('assets/js/countdown.js')}}"></script>
  <script src="{{ asset('assets/js/wow.min.js')}}"></script>


  <script src="{{ asset('assets/js/app.js')}}"></script>
</body>
</html>
