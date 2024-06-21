<?php

namespace Database\Seeders;

use App\Models\ListJobsRmib;
use App\Models\Mahasiswa;
use App\Models\Prodi;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Ramsey\Uuid\Uuid;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // $users = [
        //     [
        //         'id' => Uuid::uuid4()->toString(),
        //         'name' => 'Mahasiswa',
        //         'email' => 'mahasiswa@gmail.com',
        //         'password' => Hash::make('password'),
        //         'role' => 'mahasiswa',
        //     ],
        //     [
        //         'id' => Uuid::uuid4()->toString(),
        //         'name' => 'Staff',
        //         'email' => 'staff@gmail.com',
        //         'password' => Hash::make('password'),
        //         'role' => 'staff',
        //     ],
        //     [
        //         'id' => Uuid::uuid4()->toString(),
        //         'name' => 'Admin',
        //         'email' => 'admin@gmail.com',
        //         'role' => 'admin',
        //         'password' => Hash::make('password'),
        //     ],
        // ];
        // $mahasiswa = [
        //     [
        //         'fullname' => 'Aku Mahasiswa',
        //         'user_id' => $users[0]['id'],
        //         'nim' => '21103044',
        //         'major' => 'Sistem Informasi',
        //         'year' => '2020',
        //         'phone' => '087373847123',
        //         'address' => 'Purwokerto',
        //         'gender' => 'Laki-Laki'
        //     ]
        // ];
        // User::insert($users);
        // Mahasiswa::insert($mahasiswa);

        // $prodi = [
        //     [
        //         "name" => 'S1 Sistem Informasi'
        //     ],
        //     [
        //         "name" => "S1 Teknik Informatika"
        //     ]
        // ];

        // Prodi::insert($prodi);

        $categories = [
            ['name' => 'Petani', 'category' => 'outdoor'],
            ['name' => 'Insinyur Sipil', 'category' => 'mecanical'],
            ['name' => 'Akuntan', 'category' => 'computational'],
            ['name' => 'Ilmuwan', 'category' => 'science'],
            ['name' => 'Penyiar Radio', 'category' => 'personalContact'],
            ['name' => 'Seniman', 'category' => 'aesthetic'],
            ['name' => 'Wartawan', 'category' => 'literary'],
            ['name' => 'Pianis Konser', 'category' => 'music'],
            ['name' => 'Guru SD', 'category' => 'socialService'],
            ['name' => 'Manajer Bank', 'category' => 'clarical'],
            ['name' => 'Tukang Kayu', 'category' => 'practical'],
            ['name' => 'Dokter', 'category' => 'medical'],
            ['name' => 'Montir', 'category' => 'mecanical'],
            ['name' => 'Kasir', 'category' => 'computational'],
            ['name' => 'Insinyut Kimia Industri', 'category' => 'science'],
            ['name' => 'Pedagang Keliling', 'category' => 'personalContact'],
            ['name' => 'Arsitek', 'category' => 'aesthetic'],
            ['name' => 'Pengarang', 'category' => 'literary'],
            ['name' => 'Komponis', 'category' => 'music'],
            ['name' => 'Kepala Sekolah', 'category' => 'socialService'],
            ['name' => 'Petugas Pengiriman Barang', 'category' => 'clarical'],
            ['name' => 'Ahli Meubel', 'category' => 'practical'],
            ['name' => 'Dokter Hewan', 'category' => 'medical'],
            ['name' => 'Nelayan', 'category' => 'outdoor'],
        ];

        ListJobsRmib::insert($categories);
    }
}
