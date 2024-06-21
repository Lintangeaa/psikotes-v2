<?php

namespace App\Http\Controllers\Test;

use App\Http\Controllers\Controller;
use App\Models\Rmib;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RmibController extends Controller
{
    public function index()
    {
        // Ambil data Rmib beserta rmib_data dan listJobs
        $rmibs = Rmib::with('rmibAndListJobs.listJob')->get();

        // Ubah struktur data sesuai kebutuhan
        $datas = [];


        foreach ($rmibs as $rmib) {
            $sessionData = [];

            foreach ($rmib->rmibAndListJobs as $rmibData) {
                // Pastikan listJob tidak null sebelum mengakses propertinya
                if ($rmibData->listJob) {
                    $sessionData[] = [
                        'question' => $rmibData->listJob->name,
                        'name' => $rmibData->listJob->category,
                    ];
                }
            }

            $datas[] = $sessionData;
        }

        // Tampilkan data ke view dengan Inertia
        return Inertia::render('Mahasiswa/Test/Rmib/Index', ['datas' => $datas]);
    }
}
