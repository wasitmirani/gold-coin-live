@extends('layouts.frontend.master')

@section('title', 'About')
@section('content')

@component('frontend.components.breadcrumb',['active'=>'Pricing'])

@endcomponent


@component('frontend.components.pricing')

@endcomponent

@endsection
