<?php

namespace App\Http\Controllers\backend\api\payment;

use Illuminate\Http\Request;
use App\Models\PaymentIntegration;
use App\Http\Controllers\Controller;

class PaymentIntegrationController extends Controller
{
    //

    public function index(Request $request){
        $payment = PaymentIntegration::where('type', $request->type)->first();
        return response()->json(['payment' => $payment]);
    }
    public function store(Request $request){
        $request->validate([
            'credentials'=>'array',
        ]);
        $payment = PaymentIntegration::where('type', $request->type)->first();
        if(empty($payment)){
            PaymentIntegration::create([
                'type' =>$request->type,
                'credentials'=>$request->all(),
            ]);
        }
        else {
            $up_date = PaymentIntegration::where('type', $request->type)->update([
                'type' =>$request->type,
                'credentials'=>$request->all(),
            ]);
        }

        return response()->json(['message' => 'credentials has been save successfully']);
    }
}
