@extends('layouts.frontend.master')

@section('title', 'Contact')
<style>
    .fugu-accordion-item {
        margin-bottom: 0px !important;
        padding-bottom: 0px !important;
        border-bottom: 1px solid var(--gray-800);
    }
</style>
@section('content')

    @component('frontend.components.breadcrumb', ['active' => 'Bank Info'])
    @endcomponent
    <div class="section bg-warning-600 fugu-section-padding">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-6 col-md-10">
                    <div class="col-12">
                        <div class="fugu-default-content contact-page">
                            <h4>Our system's bank service</h2>
                                <small>If you want to do the transaction, this bank can be used directly to transfer
                                    amount</small>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="fugu-contact-wrap  wow fadeInUpX" style="visibility: visible; animation-name: fadeInUpX;">
                            <div class="fugu-accordion-wrap">
                                <div class="fugu-accordion-item d-flex">
                                    <h5>Bank Name:&nbsp; </h5>
                                    <p> HSBC</p>
                                </div>
                                <div class="fugu-accordion-item d-flex">
                                    <h5>Bank Address:&nbsp; </h5>
                                    <p> London UK</p>
                                </div>
                                <div class="fugu-accordion-item d-flex">
                                    <h5>Account Name:&nbsp; </h5>
                                    <p> AMDBC LTD</p>
                                </div>
                                <div class="fugu-accordion-item d-flex">
                                    <h5>Account Number:&nbsp; </h5>
                                    <p> 76514266</p>
                                </div>
                                <div class="fugu-accordion-item d-flex">
                                    <h5>Swift Code:&nbsp; </h5>
                                    <p> MIDLGB22</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="col-lg-6 offset-lg-1 order-lg-2">

                    <livewire:upload-file></livewire:upload-file>
                </div>
            </div>
        </div>
    </div>

@endsection
