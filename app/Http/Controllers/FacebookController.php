<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class FacebookController extends Controller
{
    //

    public function redirectToFacebook()
    {
        return Socialite::driver('facebook')->redirect();
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function handleFacebookCallback()
    {
        try {

            $user = Socialite::driver('facebook')->user();

            $finduser = User::where('facebook_id', $user->id)
                            ->orwhere('email', $user->email)
                           ->first();

            if ($finduser) {

                Auth::login($finduser);
                $user=auth()->user();
                $token = auth()->user()->createToken((string)Str::uuid())->plainTextToken;
                $user->token=$token;
                $user->last_login=Date('Y-m-d H:i:s');
                $user->save();
                return redirect()->intended('portal/dashboard');

            } else {

                $newUser = User::updateOrCreate([
                    'name' => $user->name,
                    'email' => $user->email,
                    'google_id'=> $user->id,
                    'password' =>encrypt(rand(100,1000).'dumy')
                ]);

                Auth::login($newUser);
                $user=auth()->user();
                $token = auth()->user()->createToken((string)Str::uuid())->plainTextToken;
                $user->token=$token;
                $user->last_login=Date('Y-m-d H:i:s');
                $user->save();


                return redirect()->intended('portal/dashboard');
            }

        } catch (Exception $e) {
            dd($e->getMessage());
        }
    }
}
