<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title',45)->nullable();
            $table->string('slug',255)->nullable();
            $table->string('image',255)->nullable();
            $table->string('image_mime',255)->nullable();
            $table->integer('image_size')->nullable();
            $table->string('description',255)->nullable();
            $table->decimal('price',10 , 2);
            $table->foreignIdFor(User::class , 'created_by');
            $table->foreignIdFor(User::class , 'updated_by');
            $table->softDeletes();
            $table->foreignIdFor(User::class , 'deleted_by')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
