<?php

namespace App\Http\Controllers\backend\api;

use App\Models\Wallet;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class WalletController extends Controller
{
    //
    
    public function getMyWallet(Request $request){
    
        $wallet=Wallet::where('user_id',$request->user()->id)->first();
        
        return response()->json(['wallet'=>$wallet]);

    }
}
