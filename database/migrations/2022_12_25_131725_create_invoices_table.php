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
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_number');
            $table->string('slug');
            $table->string('uid');
            $table->string('invoice_to');
            $table->string('recipient_email');
            $table->string('email')->nullable();
            $table->longText('address')->nullable();
            $table->longText('description')->nullable();
            $table->string('currency')->default('usd');
            $table->json('items')->nullable();
            $table->string('pay_status')->default('unpaid');
            $table->string('status')->default('created');
            $table->integer('amount')->default(0);
            $table->string('attachments')->nullable();
            $table->foreignId('user_id')->nullable()->constrained('users');
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
        Schema::dropIfExists('invoices');
    }
};
