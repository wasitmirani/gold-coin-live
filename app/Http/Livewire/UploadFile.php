<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Livewire\WithFileUploads;
use App\Models\PaymentInvoice;
use App\Mail\InvoiceReceiptMail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class UploadFile extends Component
{

    use WithFileUploads;
    public $fileTitle, $fileName;

    public function submit()
    {
        $dataValid = $this->validate([
            'fileName' => 'required|file|max:5000|mimes:pdf,docx,doc',
        ]);

        $dataValid['fileName'] = $this->fileName->store('payment', 'public');

        PaymentInvoice::create([
            'file' => $dataValid['fileName'],
            'user_id'=>Auth::user()->id,
        ]);

        $email ='info@pharmadigitalgoldcoin.com';

        $body = [
            'name'=>Auth::user()->name,
            'email'=>Auth::user()->email,
            'file_link'=>asset('storage/'.$dataValid['fileName']),

        ];

        Mail::to($email)->send(new InvoiceReceiptMail($body));
        session()->flash('message', 'File has been uploaded.');
    }


    public function render()
    {
        return view('livewire.upload-file');
    }
}
