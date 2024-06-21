<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RmibAndListJobs extends Model
{
    use HasFactory;

    protected $fillable = [
        'rmib_id',
        'list_id'
    ];

    public function rmib()
    {
        return $this->belongsTo(Rmib::class);
    }

    public function listJob()
    {
        return $this->belongsTo(ListJobsRmib::class, 'list_id', 'id');
    }
}
