
<!DOCTYPE html>


<html lang="en" class="light-style  customizer-hide" dir="ltr" data-theme="theme-semi-dark" data-assets-path="/masterassets/" data-template="vertical-menu-template-semi-dark">

  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

    <title>Login | {{config('app.name')}}</title>

    <meta name="description" content="" />
    <meta name="keywords" content="">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

    <!-- Icons -->
    <link rel="stylesheet" href="{{asset('masterassets/vendor/fonts/fontawesome.css')}}" />
    <link rel="stylesheet" href="{{asset('masterassets/vendor/fonts/tabler-icons.css')}}"/>
    <link rel="stylesheet" href="{{asset('masterassets/vendor/fonts/flag-icons.css')}}" />

    <!-- Core CSS -->
    <link rel="stylesheet" href="{{asset('masterassets/vendor/css/rtl/core.css')}}" class="template-customizer-core-css" />
    <link rel="stylesheet" href="{{asset('masterassets/vendor/css/rtl/theme-semi-dark.css')}}" class="template-customizer-theme-css" />
    <link rel="stylesheet" href="{{asset('masterassets/css/demo.css')}}" />

    <!-- Vendors CSS -->
    <link rel="stylesheet" href="{{asset('masterassets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css')}}" />
    <link rel="stylesheet" href="{{asset('masterassets/vendor/libs/node-waves/node-waves.css')}}" />
    <link rel="stylesheet" href="{{asset('masterassets/vendor/libs/typeahead-js/typeahead.css')}}" />
    <!-- Vendor -->
<link rel="stylesheet" href="{{asset('masterassets/vendor/libs/formvalidation/dist/css/formValidation.min.css')}}" />

    <!-- Page CSS -->
    <!-- Page -->
<link rel="stylesheet" href="{{asset('masterassets/vendor/css/pages/page-auth.css')}}">
    <!-- Helpers -->
    <script src="{{asset('masterassets/vendor/js/helpers.js')}}"></script>
    <script src="{{asset('masterassets/vendor/js/template-customizer.js')}}"></script>
    <script src="{{asset('masterassets/js/config.js')}}"></script>
</head>

<body>


<div class="authentication-wrapper authentication-cover authentication-bg">
  <div class="authentication-inner row">
    <!-- /Left Text -->
    <div class="d-none d-lg-flex col-lg-7 p-0">
      <div class="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
        <img src="/masterassets/img/illustrations/auth-verify-email-illustration-light.png" alt="auth-login-cover" class="img-fluid my-5 auth-illustration" data-app-light-img="illustrations/auth-login-illustration-light.png" data-app-dark-img="illustrations/auth-login-illustration-dark.png">

        <img src="/masterassets/img/illustrations/bg-shape-image-light.png" alt="auth-login-cover" class="platform-bg" data-app-light-img="illustrations/bg-shape-image-light.png" data-app-dark-img="illustrations/bg-shape-image-dark.png">
      </div>
    </div>
    <!-- /Left Text -->
    @yield('content')
  </div>
</div>

<!-- / Content -->







  <!-- Core JS -->
  <!-- build:js masterassets/vendor/js/core.js -->
  <script src="/masterassets/vendor/libs/jquery/jquery.js"></script>
  <script src="/masterassets/vendor/libs/popper/popper.js"></script>
  <script src="/masterassets/vendor/js/bootstrap.js"></script>
  <script src="/masterassets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>
  <script src="/masterassets/vendor/libs/node-waves/node-waves.js"></script>

  <script src="/masterassets/vendor/libs/hammer/hammer.js"></script>
  <script src="/masterassets/vendor/libs/typeahead-js/typeahead.js"></script>

  <script src="/masterassets/vendor/js/menu.js"></script>
  <!-- endbuild -->

  <!-- Vendors JS -->
  <script src="/masterassets/vendor/libs/formvalidation/dist/js/FormValidation.min.js"></script>
<script src="/masterassets/vendor/libs/formvalidation/dist/js/plugins/Bootstrap5.min.js"></script>
<script src="/masterassets/vendor/libs/formvalidation/dist/js/plugins/AutoFocus.min.js"></script>

  <!-- Main JS -->
  <script src="/masterassets/js/main.js"></script>

  <!-- Page JS -->
  <script src="/masterassets/js/pages-auth.js"></script>

</body>

</html>

<!-- beautify ignore:end -->

