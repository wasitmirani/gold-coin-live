<?php

namespace App\Http\Controllers\backend\api\hospital;

use App\Models\Hospital;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HospitalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     public function getHospitalsList(Request   $request){
        $hospitals = Hospital::latest()->get();

        return response()->json(['hospitals' => $hospitals]);
     }
    public function index()
    {
        //
        $q = !empty(request('query')) ? request('query') : '';
        $hospitals=Hospital::latest()->where('name', 'LIKE', '%' . $q . '%')
        ->paginate(env('PAR_PAGE'));

        return response()->json(['hospitals' => $hospitals], 200);
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
        'name'=>'required',
        'email'=>'required',
        'phone'=>'required',
        'address'=>'required|min:10',
        'city'=>'required',
        'country'=>'required',
        'terms_conditions'=>'required',
        ]);

        $hospital = Hospital::create([
            'name' =>$request->name,
            'slug'=>Str::slug($request->name),
            'uid'=>Str::uuid(),
            'email' =>$request->email,
            'phone' =>$request->phone,
            'address' =>$request->address,
            'city' =>$request->city,
            'country' =>$request->country,
            'terms_conditions' =>$request->terms_conditions,
            'description'=>$request->description,
            'thumbnail'=>$request->thumbnail,
        ]);
        return response()->json(['hospital' => $hospital,'message' =>'hospital has been registered successfully'], 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $hospital=Hospital::where('uid',$id)->first();
        return response()->json(['hospital'=>$hospital]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $hospital=Hospital::where('uid',$id)->first();
        return response()->json(['hospital'=>$hospital]);
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
        $request->validate([
            'name'=>'required',
            'email'=>'required',
            'phone'=>'required',
            'address'=>'required|min:10',
            'city'=>'required',
            'country'=>'required',
            'terms_conditions'=>'required',
            ]);
        $hospital= Hospital::where('id',$id)->first();
        $hospital=Hospital::where('id',$id)->update([
            'name' =>$request->name,
            'slug'=>Str::slug($request->name),
            'email' =>$request->email,
            'phone' =>$request->phone,
            'address' =>$request->address,
            'city' =>$request->city,
            'country' =>$request->country,
            'terms_conditions' =>$request->terms_conditions,
            'description'=>$request->description,
            'thumbnail'=>$request->thumbnail,
        ]);


        return response()->json(['user' => $hospital,'message' =>'hospital has been updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $hospital=Hospital::destroy($id);
        if($hospital)
          return response()->json(['message' => 'hospital has been destroyed successfully'], 200);
        else
            return response()->json(['message' => 'hospital has not been not found'], 400);
    }
}
