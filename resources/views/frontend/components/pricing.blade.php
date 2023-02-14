<div class="section bg-warning-600 fugu-section-padding3">
    <div class="container">
      <div class="fugu-section-title">
        <h2>The Costs You Pay Are The Prices You See
        </h2>
      </div>
      <div class="pricing-btn d-flex align-items-center justify-content-center flex-wrap ">

      </div>
      <div class="row justify-content-center" id="table-price-value" >
        @php
        $rates=goldRates();
    @endphp
    @foreach ($rates as $item)
    @if( $loop->iteration == 1 || $loop->iteration==3)
        <div class="col-lg-5 col-md-6 col-sm-12">
          <div class="fugu-pricing-wrap fugu-pricing-wrap2 active wow fadeInUpX" data-wow-delay="0s" style="visibility: visible; animation-delay: 0s; animation-name: fadeInUpX;">
            <div class="fugu-pricing-header">
              <h5>{{ ucfirst($item->name) }}</h5>
              <p>Suitable for small companies and personal use</p>
            </div>
            <div class="fugu-pricing-price">
              <span class="fugu-pricing-currency">$</span>
              <div class="fugu-price dynamic-value" data-active="{{ $item->rate }}" data-monthly="{{ $item->rate }}" data-yearly="{{ $item->rate }}"></div>
              <p class="bottom_text dynamic-value" data-active="/{{ $item->unit_cost }}{{ $item->unit }}" data-monthly="/{{ $item->unit_cost }}{{ $item->unit }}" data-yearly="/y"></p>
            </div>
            <a class="fugu-pricing-btn active" href="{{ url('checkout/'.$item->id) }}">Choose the plan</a>
            <div class="fugu-pricing-body">
              <!--<ul>-->
              <!--  <li><img src="{{asset('assets/images/svg/check4.svg')}}" alt="">Lorem Ipsum is simply</li>-->
              <!--  <li><img src="{{asset('assets/images/svg/check4.svg')}}" alt="">Lorem Ipsum is simply</li>-->
              <!--  <li><img src="{{asset('assets/images/svg/check4.svg')}}" alt="">Lorem Ipsum is simply</li>-->
              <!--</ul>-->
            </div>
          </div>
        </div>
    @else
    <div class="col-lg-5 col-md-6 col-sm-12">
        <div class="fugu-pricing-wrap fugu-pricing-wrap2 active wow fadeInUpX" data-wow-delay=".10s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUpX;">
          <div class="fugu-pricing-header">
            <h5>{{ ucfirst($item->name) }}</h5>
            <p>Suitable for small companies and personal use</p>
          </div>
          <div class="fugu-pricing-price">
            <span class="fugu-pricing-currency">$</span>
            <div class="fugu-price dynamic-value" data-active="{{ $item->rate }}" data-monthly="{{ $item->rate }}" data-yearly="{{ $item->rate }}"></div>
            <p class="bottom_text dynamic-value" data-active="/{{ $item->unit_cost }}{{ $item->unit }}" data-monthly="/{{ $item->unit_cost }}{{ $item->unit }}" data-yearly="/y"></p>
          </div>
          <a class="fugu-pricing-btn active" href="{{ url('checkout/'.$item->id) }}">Choose the plan</a>
          <div class="fugu-pricing-body">
            <!--<ul>-->
            <!--  <li><img src="{{asset('assets/images/svg/check4.svg')}}" alt="">Lorem Ipsum is simply</li>-->
            <!--  <li><img src="{{asset('assets/images/svg/check4.svg')}}" alt="">Lorem Ipsum is simply</li>-->
            <!--  <li><img src="{{asset('assets/images/svg/check4.svg')}}" alt="">Lorem Ipsum is simply</li>-->
            <!--</ul>-->
          </div>
          <div class="fugu-pricing-label">
            {{ ucfirst($item->name) }}
          </div>
        </div>
      </div>
    @endif
    @endforeach


      </div>
    </div>
  </div>
