<?php

namespace App\Http\Controllers;

use Stripe;
use Session;
use App\Models\Cart;
use App\Models\Wallet;
use App\Models\Package;
use App\Models\GoldRate;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\PaymentCharge;
use Illuminate\Support\Facades\Auth;

class StripePaymentController extends Controller
{
    //
    public function stripe()
    {
        return view('stripe');
    }

    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function stripePost(Request $request)
    {
        $cart = Cart::where('uuid', $request->uuid)->first();
        $package=GoldRate::where('id',   $request->package_id)->first();
        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));

        $customer = Stripe\Customer::create(array(

                "address" => [

                        "line1" => $cart->details['address'],

                        "postal_code" =>  $cart->details['zip'],
                        "city" =>  $cart->details['city'],
                        "state" => $cart->details['state'],
                        "country" => "US",

                    ],

                "email" => "demo@gmail.com",
                "name" => $cart->details['name'],
                "source" => $request->stripeToken
             ));

       $charge= Stripe\Charge::create ([
                "amount" =>  $package->rate * 100,
                "currency" => "usd",
                "customer" => $customer->id,
                "description" => "Test payment from ".config('app.name'),
                "shipping" => [
                  "name" => config('app.name'),
                  "address" => [
                    "line1" => "18 Dalston Gardens Victoria House HA7 1BU",
                    "postal_code" => "HA7 1BU",
                    "city" => "London",
                    "state" => "London",
                    "country" => "UK",
                  ],
                ]
        ]);

        if($charge){
            $payment_charge =PaymentCharge::latest()->first();
            $id=isset($payment_charge->id) ? $payment_charge->id : 1;
            PaymentCharge::create([
                'amount' => $package->rate,
                'buying_rate' => $package->rate,
                'slug'=>'PC-00'.$id+1,
                'quantity'=>1,
                'uuid'=>Str::uuid(),
                'type'=>'deposit',
                'status'=>'success',
                'package_id'=>$package->id,
                'user_id'=>auth()->user()->id,
                'payment_details'=>$request->all(),
            ]);

            $wallet = Wallet::where('user_id', Auth::user()->id)->first();
            if(empty($wallet)){
                $wallet = Wallet::create([
                    'user_id' => Auth::user()->id,
                    'balance'=>$package->rate,
                    'deposit' => $package->rate,
                    'gold_credit'=>$package->unit_cost,
                    'withdraw'=>0,
                    'exchange'=>0,
                ]);
            }
            else {
                $wallet->increment('gold_credit', $package->unit_cost);
                $wallet->increment('balance', $package->rate);
                $wallet->increment('deposit', $package->rate);

            }

        }

        // Session::flash('success', 'Payment successful!');



        return back()->with('message','Payment successful!');
    }
}
