<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mahasiswas', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('user_id')->nullable()->index();
            $table->string('fullname');
            $table->string('nim')->unique();
            $table->string('major');
            $table->enum('gender', ['Laki-Laki', 'Perempuan']);
            $table->string('year');
            $table->string('phone');
            $table->string('address');
            $table->enum('status', ['Aktif', 'Alumni']);
            $table->timestamps();
        });

        Schema::table('mahasiswas', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mahasiswas');
    }
};
