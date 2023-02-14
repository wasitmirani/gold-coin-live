<?php

namespace App\Http\Controllers\backend\api\client;

use App\Models\Client;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;

class ClientController extends Controller
{
    private $client;
    public function __construct(){
        $this->client =new Client();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $clients=$this->client->getClients($request);
        $roles = Role::all();

        return response()->json(['clients'=>$clients, 'roles' => $roles]);
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
        $request->validate([
            'name' => ['required', 'string', 'max:255','min:2'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:clients'],
            'phone' => ['required', 'string', 'max:255', ],
            'city' => ['required', 'string', 'max:255', ],
            'country' => ['required', 'string', 'max:255'],
        ]);

        
        $new_client =  $this->client->create([
            'name' => $request->name,
            'uid'=>Str::uuid(),
            'email' => $request->email,
            'phone' => $request->phone,
            'city' => $request->city,
            'role_id' => $request->role_id,
            'country' => $request->country,           
        ]);
        return response()->json(['client' => $new_client,'message' =>'Client has been created successfully'], 200);
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
        $client=Client::where('id',$id)->first();
        // $user = array_merge($user->toArray(), $user->info->toArray());
        return response()->json(['client'=>$client]);
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
            'name' => ['required', 'string', 'max:255','min:2'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:clients'],
            'phone' => ['required', 'string', 'max:255', ],
            'city' => ['required', 'string', 'max:255', ],
            'country' => ['required', 'string', 'max:255'],
        ]);
        $update_client=Client::where('id',$id)->update([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'city' => $request->city,
            'country' => $request->country,   
        ]);
        return response()->json(['Client' => $update_client,'message' =>'Client has been updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $client=Client::destroy($id);
        if($client)
          return response()->json(['message' => 'Client has been destroyed successfully'], 200);
        else
            return response()->json(['message' => 'Client has not been not found'], 400);
    }
}
