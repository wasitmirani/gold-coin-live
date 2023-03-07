@component('mail::message')
Hi, skkladha

<p><strong>Customer Name: </strong> {{$body['name']}}</p>
<p><strong>Customer Email: </strong> {{$body['email']}}</p>
<p><strong>Customer Phone: </strong> {{$body['phone']}}</p>
<p><strong>Transaction ID: </strong> {{$body['transaction_id']}}</p>
<p><strong>Status: </strong> {{$body['status']}}</p>
<p><strong>Type: </strong> {{$body['type']}}</p>
<p><strong>Package: </strong> {{$body['package']}}</p>
<p><strong>Amount: </strong>${{$body['amount']}}</p>




Thanks,<br>
{{ config('app.name') }}
@endcomponent
