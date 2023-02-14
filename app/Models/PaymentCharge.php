<?php

namespace App\Models;

use App\Models\User;
use App\Models\GoldRate;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PaymentCharge extends Model
{
    use HasFactory;
    protected $guarded=[];
    protected $casts = [
        'payment_details' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
    public function package()
    {
        return $this->belongsTo(GoldRate::class, 'package_id', 'id');
    }
}
