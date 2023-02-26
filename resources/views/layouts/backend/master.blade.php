<!DOCTYPE html>

<html lang="en" class="light-style layout-navbar-fixed layout-menu-fixed " dir="ltr" data-theme="theme-semi-dark"
    data-assets-path="/masterassets/" data-template="vertical-menu-template-semi-dark">

<head>
    <meta charset="utf-8" />
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

    <title>Dashboard - | {{ config('app.name') }}</title>

    <meta name="description" content="Start your development with a Dashboard for Bootstrap 5" />
    <meta name="keywords" content="dashboard, bootstrap 5 dashboard, bootstrap 5 design, bootstrap 5">




    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap"
        rel="stylesheet">

    <!-- Icons -->
    <link rel="stylesheet" href="{{ asset('masterassets/vendor/fonts/fontawesome.css') }}" />
    <link rel="stylesheet" href="{{ asset('masterassets/vendor/fonts/tabler-icons.css') }}" />
    <link rel="stylesheet" href="{{ asset('masterassets/vendor/fonts/flag-icons.css') }}" />

    <!-- Core CSS -->
    <link rel="stylesheet" href="{{ asset('masterassets/vendor/css/rtl/core.css') }}" class="template-customizer-core-css" />
    <link rel="stylesheet" href="{{ asset('masterassets/vendor/css/rtl/theme-semi-dark.css') }}"
        class="template-customizer-theme-css" />
    <link rel="stylesheet" href="{{ asset('masterassets/css/demo.css') }}" />
    <link rel="stylesheet" href="{{ asset('masterassets/css/custom.css') }}" />

    <!-- Vendors CSS -->
    <link rel="stylesheet" href="{{ asset('masterassets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css') }}" />
    <link rel="stylesheet" href="{{ asset('masterassets/vendor/libs/node-waves/node-waves.css') }}" />
    <link rel="stylesheet" href="{{ asset('masterassets/vendor/libs/typeahead-js/typeahead.css') }}" />
    <link rel="stylesheet" href="{{ asset('masterassets/vendor/libs/apex-charts/apex-charts.css') }}" />

    <!-- Page CSS -->

    <!-- Helpers -->
    <script src="{{ asset('masterassets/vendor/js/helpers.js') }}"></script>

    <script src="{{ asset('masterassets/vendor/js/template-customizer.js') }}"></script>

    <script src="{{ asset('masterassets/js/config.js') }}"></script>
    <style>

    </style>

</head>

<body>




    <div id="app">
        @yield('content')
    </div>




    <!-- Core JS -->

    <script src="{{asset('masterassets/vendor/libs/jquery/jquery.js')}}"></script>
    <script src="{{asset('masterassets/vendor/libs/popper/popper.js')}}"></script>
    <script src="{{asset('masterassets/vendor/js/bootstrap.js')}}"></script>

    <script src="{{asset('masterassets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js')}}"></script>
    <script src="{{asset('masterassets/vendor/libs/node-waves/node-waves.js')}}"></script>

    <script src="{{asset('masterassets/vendor/libs/hammer/hammer.js')}}"></script>
    <script src="{{asset('masterassets/vendor/libs/typeahead-js/typeahead.js')}}"></script>

    <script src="{{asset('masterassets/vendor/js/menu.js')}}"></script>
    <script>
        window.app_config={app_name:"{{config('app.name')}}"};
        @auth
           window.user = {!! json_encode(Auth::user()->load('wallet','roles'), true) !!};
        //    window.permissions=[];
        let permissions = {!! json_encode(Auth::user()->getPermissionsViaRoles()->pluck('name'), true) !!};
        @else
        window.user = [];
        window.permissions = [];
       @endauth
    //    localStorage.removeItem('setup');
       localStorage.removeItem('permissions');
       localStorage.setItem('permissions', JSON.stringify(permissions))
    </script>
    <!-- endbuild -->
    <script src="{{mix('js/app.js')}}" ></script>


    <!-- Vendors JS -->
    <script src="{{asset('masterassets/vendor/libs/apex-charts/apexcharts.js')}}"></script>


    <!-- Main JS -->
    <script src="{{asset('masterassets/js/main.js')}}"></script>

    <!-- Page JS -->
    <script src="{{asset('masterassets/js/dashboards-ecommerce.js')}}"></script>

</body>

</html>
