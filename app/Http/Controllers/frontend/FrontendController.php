<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use App\Models\GoldRate;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    //

    public function index(){
        return view('frontend.pages.index');
    }


    public function about(){

        return view('frontend.pages.about');
    }

    public function contact(){
        return view('frontend.pages.contact');
    }
    public function pricing(){
        return view('frontend.pages.pricing');
    }

    public function service(Request $request){
        return view('frontend.pages.services');
    }
    public function bank(Request $request){
        return view('frontend.pages.bank_info');
    }

    public function vaultTerms(Request $request){

        return view('frontend.pages.vaultterms');
    }

    public function goldBacked(Request $request){

        return view('frontend.pages.goldbacked');
    }

    public function clientAccountAgreement(Request $request)
    {
        return view('frontend.pages.clientaccount_agreement');
    }
    public function checkout(Request $request){

        $package=GoldRate::where('id',$request->rate_id)->first();

        return view('frontend.pages.checkout',['package'=>$package]);
    }

    public function contactStore(Request $request){

        $request->validate([
            'name' => ['required', 'string', 'min:3','max:50'],
            'email' => ['required', 'string', 'email', 'max:255'],
            'phone' => ['required',  'regex:/^([0-9\s\-\+\(\)]*)$/', 'max:255'],
            'message' => ['required', 'string', 'min:20'],
        ]);

        $contact = Contact::where([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'message' => $request->message,
        ]);

        return back()->with('message', 'query has been sent successfully');
    }

     public function pharmaDigitalCoin(Request $request){

        return view('frontend.pages.pharmadigitalcoin');
    }

    public function thank(Request $request)
    {
        return view('frontend.pages.thank');
    }

    public function pharmaDigitalCoinWork(){
        return view('frontend.pages.pharmadigitalcoinwork');
    }

}
