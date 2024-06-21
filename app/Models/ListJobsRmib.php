<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListJobsRmib extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'category'
    ];

    public function rmibAndListJobs()
    {
        return $this->hasMany(RmibAndListJobs::class, 'list_id');
    }
}
