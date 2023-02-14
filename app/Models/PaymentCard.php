<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentCard extends Model
{
    use HasFactory;
    protected $guarded=[];
    protected $casts = [
        'credentials' => 'array',
    ];
}
