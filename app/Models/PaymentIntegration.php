<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentIntegration extends Model
{
    use HasFactory;

    protected $guarded=[];
    protected $casts = [
        'credentials' => 'array',
    ];
}
