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
        Schema::create('rmib_and_list_jobs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('rmib_id')->constrained('rmibs')->onDelete('cascade');
            $table->foreignId('list_id')->constrained('list_jobs_rmibs')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rmib_and_list_jobs');
    }
};
