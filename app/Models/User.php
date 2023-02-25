<?php

namespace App\Models;


use App\Models\Wallet;
use App\Models\UserInfo;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable,HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = [];
    protected $guard_name = 'api';

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];



    public function getThumbnailAttribute($value)
    {
        if(!empty($value))
        return asset('/img/users/'.$value);
        else
        return asset('/img/users/default.png');
    }

    public function getUsers($request,$is_paginate=true){
        $q=request('query');
        $users=User::latest()
        ->where('name', 'like', '%' . $q . '%')
        ->Orwhere('username', 'like', '%' . $q. '%')
        ->Orwhere('email', 'like', '%' . $q. '%')
        ->with('roles');
        if($is_paginate){
            $users=$users->paginate((int)env('PER_PAGE'));
        }else {
            $users=$users->get();
        }

      return $users;
    }
    public function package()
    {
        return $this->belongsTo(Package::class, 'package_id', 'id');
    }

    /**
     * Get the user that owns the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function wallet()
    {
        return $this->belongsTo(Wallet::class, 'user_id', 'id');
    }
}
