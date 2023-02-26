<?php

namespace App\Http\Controllers\backend\api\transition;

use App\Models\Transition;
use Illuminate\Http\Request;
use App\Models\PaymentCharge;
use App\Http\Controllers\Controller;

class TransitionController extends Controller
{
    //

    public function getTransitions(Request $request){
        $transitions=PaymentCharge::latest()
        ->with('user','package')->paginate(env('PAR_PAGE'));


        return response()->json(['transitions'=>$transitions]);

    }

    public function getMyTransitions(Request $request){
        $transitions=PaymentCharge::latest()
        ->where('slug', 'LIKE', '%' . $request->get('query') . '%')
        ->where('user_id',$request->user()->id)
        ->with('user','package')->paginate(env('PAR_PAGE'));


        return response()->json(['transitions'=>$transitions]);
    }
}
