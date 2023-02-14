<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\User;
use App\Models\GoldRate;
use App\Models\Transition;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class CartController extends Controller
{
    //

    public function addCart(Request $request){

        $package=GoldRate::where('id',$request->package_id)->first();

        $user=User::where('email',$request->email)->first();
        if(empty($user)){
            $user=User::create([
                'email'=>$request->email,
                'name'=>$request->name,
                'password' => Hash::make($request->email),
            ]);
        }
        $cart=Cart::create([
            'user_id'=>$user->id,
            'package_id'=>$package->id,
            'uuid'=>Str::uuid(),
            'amount'=>$package->rate,
            'buying_rate'=>$package->rate,
            'payment_type'=>$request->payment_type,
            'details'=>$request->all(),
        ]);

        $transition=Transition::create([
            'user_id'=>Auth::user()->id,
            'package_id'=>$package->id,
            'uuid'=>Str::uuid(),
            'quantity'=>1,
            'amount'=>$package->rate,
            'buying_rate'=>$package->rate,
        ]);
        if($request->payment_type="bank"){
            return redirect()->route('bank.payment', ['uuid'=>$cart->uuid])->with('message', 'Purchase successful');
        }



    }
}
