<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserController extends Controller
{
    public function getMahasiswa()
    {
        $mahasiswa = DB::select('select users.id, users.name, users.email, m.fullname, m.nim, m.major, m.year, m.phone, m.status from users join mahasiswas m on users.id = m.user_id');

        return Inertia::render('Admin/Mahasiswa/Index', ['mahasiswa' => $mahasiswa]);
    }
}
