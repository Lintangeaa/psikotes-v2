<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function adminDashboard()
    {
        $totalMahasiswa = User::whereHas('mahasiswa', function ($query) {
            $query->where('status', 'Aktif');
        })
            ->with(['mahasiswa' => function ($query) {
                $query->where('status', 'Aktif');
            }])
            ->count();

        // Query untuk mengambil total alumni
        $totalAlumni = User::whereHas('mahasiswa', function ($query) {
            $query->where('status', 'Alumni');
        })
            ->with(['mahasiswa' => function ($query) {
                $query->where('status', 'Alumni');
            }])
            ->count();

        return Inertia::render('Admin/Dashboard/Index', ['totalMahasiswa' => $totalMahasiswa, 'totalAlumni' => $totalAlumni]);
    }

    public function mahasiswaDashboard()
    {
        return Inertia::render('Dashboard');
    }

    public function index()
    {
        $user = Auth::user();

        if ($user->role === 'admin') {
            return redirect()->route('dashboard.admin');
        } elseif ($user->role === 'mahasiswa') {
            return Inertia::render('Dashboard');
        }
    }
}
