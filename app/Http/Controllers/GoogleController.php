<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class GoogleController extends Controller
{
    //
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function handleGoogleCallback(Request $request)
    {
        try {

            $user = Socialite::driver('google')->user();

            $finduser = User::where('google_id', $user->id)->first();

            if($finduser){

                Auth::login($finduser);

                return redirect()->intended('/portal/dashboard');

            }else{
                $newUser = User::create([
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
                session(['login' => true]);

                return redirect()->intended('/portal/dashboard');
            }

        } catch (Exception $e) {
            dd($e->getMessage());
        }
    }
}
