<?php

namespace App\Http\Controllers\backend\api\settings;

use App\Models\Country;
use App\Models\Setting;
use App\Models\AppSetting;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SettingsController extends Controller
{
    //
    public function getSettings(Request $request){
        $setting_by_user=Setting::where('user_id',1)->first();
        $default_setting=Setting::where('type','default')->first();
        return response()->json(['setting_by_user'=>$setting_by_user,'default_setting'=>$default_setting]);
    }
    public function updateSettings(Request $request){

        $setting=Setting::where('user_id',1)->first();
        if(empty($setting)){
            $setting=Setting::create([
                'user_id'=>1,
                'active'=>1,
                'type'=>$request->type,
                'settings'=>$request->settings,
            ]);
        }
        else {
            $setting=  $setting->update([
                'user_id'=>1,
                'active'=>1,
                'type'=>$request->type,
                'settings'=>$request->settings,
            ]);
        }

        return   response()->json(['setting'=>$setting]);

    }
    public function getAppSettings(Request $request)
    {
      $app_settings = AppSetting::where('id', 1)->first();
      $countries = Country::all();
      
      return response()->json(['app_settings' => json_decode($app_settings->app_data, true) ,'countries' => $countries], 200);
    }
    public function UpdateAppSettings(Request $request)
    { 
      return AppSetting::where('id', 1)->update([ 'app_data' => json_encode($request->all())]);
   
    }
}
