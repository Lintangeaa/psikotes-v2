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
        return Inertia::render('Admin/Mahasiswa/Create', [
            'session' => session()->all(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|unique:users',
            'email' => 'required|email|unique:users',
            'fullname' => 'required|string',
            'nim' => 'required|string|unique:mahasiswas',
            'major' => 'required|string',
            'year' => 'required',
            'phone' => 'nullable|string',
            'address' => 'required|string',
            'gender' => 'required|string'
        ]);

        try {
            // Create a new User
            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($request->input('nim') . '!');
            $user->role = 'mahasiswa';
            $user->save();

            // Create the associated Mahasiswa entry
            $mahasiswa = new Mahasiswa();
            $mahasiswa->user_id = $user->id;
            $mahasiswa->fullname = $request->fullname;
            $mahasiswa->nim = $request->nim;
            $mahasiswa->gender = $request->gender;
            $mahasiswa->major = $request->major;
            $mahasiswa->year = $request->year;
            $mahasiswa->phone = $request->phone;
            $mahasiswa->address = $request->address;
            $mahasiswa->save();

            return redirect()->route('mahasiswa.create')->with('success', 'Mahasiswa berhasil ditambahkan');
        } catch (\Exception $e) {
            return redirect()->route('mahasiswa.create')->with('error', 'Terjadi kesalahan saat menambahkan mahasiswa');
        }
    }

    public function edit($id)
    {
        $user = User::with('mahasiswa')->findOrFail($id);

        return Inertia::render('Admin/Mahasiswa/Edit', [
            'session' => session()->all(),
            'user' => $user
        ]);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $request->validate([
            'name' => 'required|string|unique:users,name,' . $user->id,
            'email' => 'required|email|unique:users,email,' . $user->id,
            'fullname' => 'required|string',
            'nim' => 'required|string|unique:mahasiswas,nim,' . $user->mahasiswa->id,
            'major' => 'required|string',
            'year' => 'required',
            'phone' => 'nullable|string',
            'address' => 'required|string',
            'gender' => 'required|string'
        ]);

        try {
            // Update the User
            $user->name = $request->name;
            $user->email = $request->email;
            $user->save();

            // Update the associated Mahasiswa entry
            $mahasiswa = Mahasiswa::where('user_id', $user->id)->firstOrFail();
            $mahasiswa->fullname = $request->fullname;
            $mahasiswa->nim = $request->nim;
            $mahasiswa->gender = $request->gender;
            $mahasiswa->major = $request->major;
            $mahasiswa->year = $request->year;
            $mahasiswa->phone = $request->phone;
            $mahasiswa->address = $request->address;
            $mahasiswa->save();

            return redirect()->route('mahasiswa.edit', $id)->with('success', 'Mahasiswa berhasil diupdate');
        } catch (\Exception $e) {
            return redirect()->route('mahasiswa.edit', $id)->with('error', 'Terjadi kesalahan saat update mahasiswa');
        }
    }

    public function delete($id)
    {
        try {
            $user = User::findOrFail($id);

            $mahasiswa = Mahasiswa::where('user_id', $user->id)->firstOrFail();
            $mahasiswa->delete();

            $user->delete();

            return redirect()->route('admin.mahasiswa')->with('success', 'Mahasiswa berhasil dihapus');
        } catch (\Exception $e) {
            return redirect()->route('admin.mahasiswa')->with('error', 'Terjadi kesalahan saat menghapus mahasiswa');
        }
    }
}
