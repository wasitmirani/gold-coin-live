@component('mail::message')
# Hi, info@pharmadigitalgoldcoin.com


Customer Name: {{$body['name']}} <br>
Customer Email:{{$body['email']}} <br>

@component('mail::button', ['url' => $body['file_link']])
File Download
@endcomponent



Thanks,<br>
{{ config('app.name') }}
@endcomponent
