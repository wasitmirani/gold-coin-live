@extends('layouts.frontend.master')

@section('title', 'Pricing')
@section('content')

@component('frontend.components.breadcrumb',['active'=>'Pricing'])

@endcomponent


@component('frontend.components.pricing')

@endcomponent

@endsection
