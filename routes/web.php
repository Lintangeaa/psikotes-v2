<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MahasiswaController;
use App\Http\Controllers\ProdiController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Test\RmibController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('login');
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});


// Route::get('/admin/dashboard', function () {
//     return Inertia::render('Admin/Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard.admin');


Route::middleware(AdminMiddleware::class)->group(function () {
    Route::prefix('/admin')->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'adminDashboard'])->name('dashboard.admin');
        Route::get('/admin/mahasiswa', [MahasiswaController::class, 'index'])->name('admin.mahasiswa');
        Route::get('/mahasiswa/create', [MahasiswaController::class, 'create'])->name('mahasiswa.create');
        Route::post('/mahasiswa/create', [MahasiswaController::class, 'store'])->name('mahasiswa.store');
        Route::get('/mahasiswa/{id}/edit', [MahasiswaController::class, 'edit'])->name('mahasiswa.edit');
        Route::put('/mahasiswa/{id}/edit', [MahasiswaController::class, 'update'])->name('mahasiswa.update');
        Route::delete('/mahasiswa/{id}', [MahasiswaController::class, 'delete'])->name('mahasiswa.delete');
    });

    Route::get('/prodi/search', [ProdiController::class, 'searchProdi'])->name('prodi.search');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/dashboard', [DashboardController::class, 'mahasiswaDashboard'])->name('dashboard.mahasiswa');

    Route::prefix('/test')->group(function () {
        Route::get('/rmib', [RmibController::class, 'index'])->name('mahasiswa.rmib.index');
    });
});

require __DIR__ . '/auth.php';
