<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;
use App\Http\Controllers\GoogleController;
use App\Http\Controllers\FacebookController;
use App\Http\Controllers\TransitionController;
use App\Http\Controllers\StripePaymentController;
use App\Http\Controllers\backend\BackendController;
use App\Http\Controllers\frontend\FrontendController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

require __DIR__.'/auth.php';


Route::get('/{language?}',[FrontendController::class, 'index'])->name('home');

Route::get('about',[FrontendController::class, 'about'])->name('about');
Route::get('contact',[FrontendController::class, 'contact'])->name('contact');
Route::post('contact',[FrontendController::class, 'contactStore'])->name('contact.store');
Route::get('bank-details',[FrontendController::class, 'bank'])
->middleware('auth')
->name('bank');
Route::get('thank',[FrontendController::class, 'thank'])->name('thank');
Route::get('plans-pricing',[FrontendController::class, 'pricing'])->name('pricing');
Route::get('/services',[FrontendController::class, 'service'])->name('services');
Route::get('vault-terms',[FrontendController::class, 'vaultTerms'])->name('vault-terms');
Route::get('gold-backed', [FrontendController::class, 'goldBacked'])->name('gold-backed');

Route::get('pharma-digital-gold-coin',[FrontendController::class, 'pharmaDigitalCoin'])->name('digitalCoin');

Route::get('how-it-works',[FrontendController::class, 'pharmaDigitalCoinWork'])->name('digitalCoinWork');

Route::get('client-account-agreement',[FrontendController::class, 'clientAccountAgreement'])->name('client-account-agreement');
Route::get('auth/google', [GoogleController::class, 'redirectToGoogle'])->name('auth.google');
Route::get('auth/google/callback', [GoogleController::class, 'handleGoogleCallback']);
Route::controller(FacebookController::class)->group(function(){
    Route::get('auth/facebook', 'redirectToFacebook')->name('auth.facebook');
    Route::get('auth/facebook/callback', 'handleFacebookCallback');
});
Route::middleware(['auth'])->group(function () {


Route::get('/checkout/{rate_id}',[FrontendController::class, 'checkout'])->name('checkout');
Route::post('/processed/payment',[CartController::class,'addCart'])->name('processed.payment');
Route::get('payment-charge-transfer/{uuid}',[TransitionController::class,'chargePayment'])->name('bank.payment');


});

Route::controller(StripePaymentController::class)->group(function(){
    Route::get('stripe', 'stripe');
    Route::post('stripe', 'stripePost')->name('stripe.post');
});
Route::get('/portal/{any?}',[BackendController::class,'index'])->middleware('auth')->name('dashboard')->where('any', '[\/\w\.-]*');

Route::get('unauthorized/user',function(){
return abort(401,'Unauthorized User');
});

Route::get('/logout',[AuthenticatedSessionController::class,'destroy']);
