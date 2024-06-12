<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mahasiswa extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'fullname',
        'nim',
        'major',
        'year',
        'phone',
        'address',
        'status'
    ];

    public function user()
    {
        return $this->hasMany(User::class);
    }
}
