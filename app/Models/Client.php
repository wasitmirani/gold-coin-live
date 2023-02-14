<?php

namespace App\Models;

use Spatie\Permission\Contracts\Role;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Client extends Model
{
    use HasFactory, HasRoles;

    protected $guarded = [];

    public function getClients($request,$is_paginate=true){
        $q=request('query');
     
        $clients=Client::with('roles')->latest()
        ->where('name', 'like', '%' . $q . '%')
        ->Orwhere('email', 'like', '%' . $q. '%');
        if($is_paginate){
            $users=$clients->paginate((int)env('PER_PAGE'));
        }else {
            $users=$clients->get();
        }

      return $users;
    }
}
