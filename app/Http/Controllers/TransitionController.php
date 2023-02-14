<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;

class TransitionController extends Controller
{
    //

    public function chargePayment(Request $request){

        $cart=Cart::where('uuid',$request->uuid)->first();
        if(empty($cart)){
        return response()->json(['message'=>'Token has been expired']);
        }

        return view('frontend.pages.stripe',['cart'=>$cart]);

    }
}
