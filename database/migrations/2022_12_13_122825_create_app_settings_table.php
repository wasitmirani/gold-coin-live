<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('app_settings', function (Blueprint $table) {
            $table->id();
            $table->json('app_data');
            $table->timestamps();
        });

        DB::table('app_settings')->insert([
                'app_data' => json_encode((object)[
                    "company_name"=>"Cooley and Macias Plc",
                    "tax_id"=>"Ut quos accusamus ne",
                    "vat_no"=>"Esse pariatur Temp",
                    "hbr_no"=>"Illo dolorem consequ",
                    "provisional_client"=>"Dolorem unde magnam",
                    "provisional_contractor"=>"Placeat officia ess",
                    "handling_fee"=>"Esse optio sunt r",
                    "country"=>"Corrupti sunt cons",
                    "house_no"=>"Odio velit velit ani",
                    "town"=>"Voluptatibus proiden",
                    "state"=>"Rem voluptates sed m",
                    "billing_email"=>"wyfysawugo@mailinator.com",
                    "support_email"=>"mawyzusex@mailinator.com",
                    "phone"=>"+1 (491) 573-4135",
                    "mobile"=>"Ex deserunt ut qui p",
                    "thumbnail"=>"app_default.png",
                ]),
         ]
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('app_settings');
    }
};
