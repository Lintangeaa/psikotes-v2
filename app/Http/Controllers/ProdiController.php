<?php

namespace App\Http\Controllers;

use App\Models\Prodi;
use Illuminate\Http\Request;

class ProdiController extends Controller
{
    public function searchProdi(Request $request)
    {
        try {
            $query = $request->input('q');

            if ($query) {
                $prodi = Prodi::where('name', 'LIKE', '%' . $query . '%')->get();
            } else {
                $prodi = Prodi::all();
            }

            $options = $prodi->map(function ($item) {
                return [
                    'value' => $item->name,
                    'label' => $item->name,
                ];
            });

            return response()->json($options);
        } catch (\Exception $e) {
            // Tangani exception di sini
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }


}
