<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\api\WalletController;
use App\Http\Controllers\backend\api\role\RoleController;
use App\Http\Controllers\backend\api\user\UserController;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;
use App\Http\Controllers\backend\api\client\ClientController;
use App\Http\Controllers\backend\api\layout\LayoutController;
use App\Http\Controllers\backend\api\invoice\InvoiceController;
use App\Http\Controllers\backend\api\role\PermissionController;
use App\Http\Controllers\backend\api\hospital\HospitalController;
use App\Http\Controllers\backend\api\settings\SettingsController;
use App\Http\Controllers\backend\api\dashboard\DashboarController;
use App\Http\Controllers\backend\api\payment\PaymentCardController;
use App\Http\Controllers\backend\api\transition\TransitionController;
use App\Http\Controllers\backend\api\payment\PaymentIntegrationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('backend')->middleware('auth:api')->group(function () {
    Route::prefix('config')->group(function () {
        Route::get('/sidebar-menu', [LayoutController::class, 'getSideBarMenu']);
        Route::post('update-app-settings', [SettingsController::class, 'updateSettings']);
        Route::get('settings', [SettingsController::class, 'getSettings']);
    }
    );
    Route::resource('user', UserController::class);
    Route::post('/update-auth-user', [UserController::class, 'updateAuthUser']);
    Route::resource('client', ClientController::class);
    Route::resource('role', RoleController::class);
    Route::resource('permission', PermissionController::class);
    Route::get('roles', [RoleController::class, 'getRoles']);

    Route::prefix('dashboard')->group(function () {
        Route::get('/get-analytics', [DashboarController::class, 'getAnalytics']);
        Route::get('/app-settings', [SettingsController::class, 'getAppSettings']);
        Route::post('/app-settings', [SettingsController::class, 'UpdateAppSettings']);
    }
    );
    Route::prefix('upload')->group(function () {
        Route::post('user-thumbanail', [UserController::class, 'imageUploadProfile']);
    }
    );
    Route::resource('user', UserController::class);
    Route::get('payment-integration/{type}', [PaymentIntegrationController::class, 'index']);
    Route::post('payment-integration/{type}', [PaymentIntegrationController::class, 'store']);
    Route::get('customers-list', [UserController::class,'getCustomerList']);
    Route::get('transactions', [TransitionController::class, 'getTransitions']);
    Route::get('my-transactions', [TransitionController::class, 'getMyTransitions']);
    Route::get('my-wallet', [WalletController::class, 'getMyWallet']);
    Route::resource('invoice', InvoiceController::class);
    Route::get('my-invoices', [InvoiceController::class, 'getMyInvoice']);
    Route::post('approved-invoice', [InvoiceController::class, 'approveInvoice']);
    Route::resource('payment-card', PaymentCardController::class);
    Route::resource('hospital', HospitalController::class);
    Route::get('hospitals', [HospitalController::class, 'getHospitalsList']);

});
