<?php

namespace App\Http\Controllers;

use App\Models\Mahasiswa;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class MahasiswaController extends Controller
{
    public function index()
    {
        $mahasiswa = User::has('mahasiswa')->with('mahasiswa')->get();

        return Inertia::render('Admin/Mahasiswa/Index', ['mahasiswas' => $mahasiswa]);
    }

    public function create()
    {
        return Inertia::render('Admin/Mahasiswa/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'username' => 'required|string|unique:users',
            'email' => 'required|email|unique:users',
            'fullname' => 'required|string',
            'nim' => 'required|string|unique:mahasiswas',
            'major' => 'required|string',
            'year' => 'required|string',
            'phone' => 'nullable|string',
        ]);

        try {
            // Membuat User baru
            $user = new User();
            $user->name = $request->username;
            $user->email = $request->email;
            $user->password = Hash::make($request->input('nim') . '!');
            $user->role = 'mahasiswa';
            $user->save();

            // Membuat entri Mahasiswa terkait
            $mahasiswa = new Mahasiswa();
            $mahasiswa->user_id = $user->id;
            $mahasiswa->fullname = $request->fullname;
            $mahasiswa->nim = $request->nim;
            $mahasiswa->major = $request->major;
            $mahasiswa->year = $request->year;
            $mahasiswa->phone = $request->phone;
            $mahasiswa->save();

            return response()->json(['message' => 'Mahasiswa berhasil ditambahkan'], 201);
        } catch (\Exception $e) {
            // Mengembalikan pesan error jika ada masalah
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
