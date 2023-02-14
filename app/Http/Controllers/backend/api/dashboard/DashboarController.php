<?php

namespace App\Http\Controllers\backend\api\dashboard;

use App\Models\User;
use App\Models\Hospital;
use App\Models\Transition;
use Illuminate\Http\Request;
use App\Models\PaymentCharge;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class DashboarController extends Controller
{
    //
    public function getAnalytics(Request $request)
    {
      $users = User::all()->count();

      $sales = PaymentCharge::all();

      $hospitals = Hospital::all();

      $transactions = Transition::all();

      $payment_charge = PaymentCharge::groupBy('date')
      ->orderBy('date', 'DESC')
      ->get(array(
          DB::raw('Date(created_at) as date'),
          DB::raw('sum(amount) as "payment_charge"')
      ));


      return response()->json(
        [ 'analytics' => [ "users" => $users, "sales" => $sales->sum('buying_rate'), "hospitals" => $hospitals->count(),
            "transactions" => $transactions->count(),
            ],
            "payment_charge" => $payment_charge,
            
        ], 200);

    }
}
