<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rmib extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function rmibAndListJobs()
    {
        return $this->hasMany(RmibAndListJobs::class, 'rmib_id');
    }
}
