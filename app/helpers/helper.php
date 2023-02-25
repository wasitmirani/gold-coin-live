
<?php


use App\Models\Setting;

use App\Models\GoldRate;
use Illuminate\Support\Str;
use App\helpers\HelperComponent;
use Illuminate\Support\Facades\DB;




//  $one_gm = 0.08573535211509113;


function sideBarMenu(){
    return HelperComponent::sideBar();
}

function getGoldApi(){

    $response = Http::get('https://api.metalpriceapi.com/v1/latest?api_key=79fb1cdff580076cff110658bd153dcb&base=USD&currencies=EUR,XAU,XAG');
    $data=json_decode($response->body(),true);
    $data=collect($data['rates']);
    return isset($data['XAU'])  ? $data['XAU'] : null;
}



  function setSingleLink($title,$icon,$v_can=null,$v_route=null, $prefix="/portal"){
    return [
        "title"=>$title,
        'type'=> 'single_link',
        "icon"=>$icon,
        "can"=>$v_can,
        "route"=>$prefix.$v_route,
    ];
}
function singleImgUpload($request, $path)
{
    if ($request->hasfile('image')) {
        $name=Str::random(20);
        // dd($name);
        $name = $name . "-" . time() . '.' . $request->image->extension();
        $request->image->move(public_path($path), $name);
    } else
        $name = "";
    return $name;
}

function goldRates(){
   $XAU_gold= getGoldApi();
//    1 troy ounce  gold rate
   $today_gold_rate=1/$XAU_gold;
   $one_gram_usd=$today_gold_rate/31.1035;
   $rates=GoldRate::orderBy('unit_cost','asc')->get();
    foreach ($rates as $key => $rate) {
        $gram_rate= round($one_gram_usd * $rate->unit_cost,2);
        $rate->update(['rate'=>$gram_rate,'base_rate'=>$gram_rate]);
    }
    return $rates;
}

function getCountry(){
try {
    $ip = request()->ip();


    $geo = unserialize(file_get_contents("http://ip-api.com/php/" . $ip));
    //code...
} catch (\Throwable $th) {
    //throw $th;
}


    return $geo['country'] ?? "N/A";
}

function getCountries(){
 $countries=   DB::table('countries')->get();

 return $countries;

}
function getLayoutColors(){
   $setting= Setting::where('user_id',auth()->user()->id)->first();
   if(!empty($setting)){

    return $setting;
   }
   else {
    $setting= Setting::where('type','default')->first();
    return $setting;
   }
}

function setSubMenu($title,$icon,$v_can=null,$v_route=null,$prefix="/portal"){
    return [
        "title"=>$title,
        "icon"=>$icon,
        "can"=>$v_can,
        "route"=>$prefix.$v_route,
    ];
 }





