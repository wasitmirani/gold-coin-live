<?php

namespace App\Http\Controllers\backend\api\invoice;

use App\Models\User;
use App\Models\Invoice;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
     public function approveInvoice(Request $request){
        $invoice=Invoice::where('id', $request->invoice_id)->first();
        $invoice->approved = 1;
        $invoice->save();

        return response()->json(['message' => 'Invoice approved']);

     }
    public function getMyInvoice(Request $request)
    {
        $q=!empty(request('query')) ? request('query') : '';
        $invoices = Invoice::latest()->with('user')->where('user_id',$request->user()->id)->where('invoice_number', 'LIKE', '%' . $q . '%')
        ->paginate(env('PAR_PAGE'));

        return response()->json(['invoices' => $invoices]);

    }
    public function index()
    {
        //
        $q=!empty(request('query')) ? request('query') : '';
        $invoices = Invoice::latest()->where('invoice_number', 'LIKE', '%' . $q . '%')
        ->paginate(env('PAR_PAGE'));

        return response()->json(['invoices' => $invoices]);

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

     public function generateinvoiceNumber(){
        $invoice=Invoice::orderBy('id','desc')->first();
        if(!empty($invoice)){
           $invoice_number= (int)$invoice['id']+1;
        }
        else{
            $invoice_number= 1;
        }

        $invoice_number=str_pad($invoice_number, 4, "0", STR_PAD_LEFT);
        // '-'.date('Ymd');
        $invoice_number = "INV" . '-' . $invoice_number;
        return $invoice_number;
    }
    public function store(Request $request)
    {
        //
        $request->validate([
            'invoice_to'=>'required|email',
            'recipient_email'=>'required|email',
            'wallet_id'=>'required',
            'currency'=>'required',
        ]);
        $user=User::where('uid',$request->wallet_id)->first();
        if(empty($user)){

            return response()->json(['message' => 'Invalid wallet id'], 422);
        }
        Invoice::create([
        'invoice_to'=>$request->invoice_to,
        'recipient_email'=>$request->recipient_email,
        'invoice_number'=>$this->generateinvoiceNumber(),
        'slug'=>$this->generateinvoiceNumber(),
        'uid'=>Str::uuid(),
        'user_id'=>$user->id,
        'address'=>$request->address,
        'description'=>$request->description,
        'currency'=>$request->currency,
        'items'=>$request->items,
        'amount'=>collect($request->items)->sum('amount'),
        ]);

        return response()->json(['message' => 'invoice has been created successfully']);
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
        $request->validate([
            'invoice_to'=>'required|email',
            'recipient_email'=>'required|email',
            'currency'=>'required',
            'wallet_id'=>'required'
        ]);
        $user=User::where('uid',$request->wallet_id)->first();
        if(empty($user)){

            return response()->json(['message' => 'Invalid wallet id'], 422);
        }
        Invoice::where('id',$id)->update([
        'invoice_to'=>$request->invoice_to,
        'recipient_email'=>$request->recipient_email,
        'invoice_number'=>$this->generateinvoiceNumber(),
        'slug'=>$this->generateinvoiceNumber(),
        'uid'=>Str::uuid(),
        'address'=>$request->address,
        'description'=>$request->description,
        'currency'=>$request->currency,
        'items'=>$request->items,
        'user_id'=>$user->id,
        'amount'=>collect($request->items)->sum('amount'),
        ]);

        return response()->json(['message' => 'invoice has been created successfully']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $invoice=Invoice::destroy($id);
        if($invoice){
            return response()->json(['message' => 'invoice has been deleted successfully']);
        }
        return response()->json(['message' => 'invoice not found'],404);

    }
}
