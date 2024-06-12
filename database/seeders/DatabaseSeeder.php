<?php

namespace Database\Seeders;

use App\Models\Mahasiswa;
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

        $users = [
            [
                'id' =>  Uuid::uuid4()->toString(),
                'name' => 'Mahasiswa',
                'email' => 'mahasiswa@gmail.com',
                'password' => Hash::make('password'),
                'role' => 'Mahasiswa',
            ],
            [
                'id' =>  Uuid::uuid4()->toString(),
                'name' => 'Staff',
                'email' => 'staff@gmail.com',
                'password' => Hash::make('password'),
                'role' => 'Staff',
            ],
            [
                'id' =>  Uuid::uuid4()->toString(),
                'name' => 'Admin',
                'email' => 'admin@gmail.com',
                'role' => 'Admin',
                'password' => Hash::make('password'),
            ],
        ];
        $mahasiswa = [
            [
                'fullname' => 'Aku Mahasiswa',
                'user_id' => $users[0]['id'],
                'nim' => '21103044',
                'major' => 'Sistem Informasi',
                'year' => '2020',
                'phone' => '087373847123',
                'address' => 'Purwokerto'
            ]
        ];
        User::insert($users);
        Mahasiswa::insert($mahasiswa);
    }
}
