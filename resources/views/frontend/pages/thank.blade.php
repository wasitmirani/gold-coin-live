@extends('layouts.frontend.master')

@section('title', 'Thank You')
@section('content')
@extends('layouts.frontend.master')

@section('title', 'About')
@section('content')

@component('frontend.components.breadcrumb',['active'=>'Thank You'])

@endcomponent

<div class="row justify-content-center mt-4">

            <h4 style="text-align: center;">Your payment has been charge successfuly</h4>
</div>
<div class="row justify-content-center ">
        <img class="wow fadeInUpX" src="{{asset('assets/images/thank.png')}}" style="width: 60%; important" alt="" srcset="">
</div>


@endsection
