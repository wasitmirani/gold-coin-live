<?php

namespace App\Http\Controllers\backend\api\payment;

use App\Models\PaymentCard;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PaymentCardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $cards=PaymentCard::where('user_id',$request->user()->id)
                                    ->orderBy('primary_card','asc')->get();

        return response()->json(['cards' => $cards]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'credentials.card_number' =>'required',
            'credentials.name'=>'required',
            'credentials.cvv'=>'required',
            'credentials.exp_date'=>'required',
        ]);
        if($request->primary_card){
            PaymentCard::where('user_id', $request->user()->id)->update(['primary_card' => 0]);
        }
        $payment_card = PaymentCard::create([
            'card_type'=>$request->card_type,
            'primary_card'=>$request->primary_card,
            'credentials'=>$request->credentials,
            'user_id'=>$request->user()->id,
        ]);

        return response()->json(['message' => 'new card has been created successfully']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        PaymentCard::where('id', $id)->delete();
        return response()->json(['message' => 'payment card has been deleted']);
    }
}
