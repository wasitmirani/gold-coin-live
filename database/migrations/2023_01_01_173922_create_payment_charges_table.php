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
        Schema::create('payment_charges', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained('users');
            $table->foreignId('package_id')->nullable()->constrained('gold_rates');
            $table->string('uuid')->nullable();
            $table->decimal('quantity', 8, 2)->nullable();
            $table->decimal('amount', 8, 2)->nullable();
            $table->decimal('buying_rate', 8, 2)->nullable();
            $table->json('payment_details')->nullable();
            $table->string('payment_status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payment_charges');
    }
};
