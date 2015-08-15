<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCrimeReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('crime_reports', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('crime_id');
            $table->integer('reporter_id');
            $table->decimal('longitude', 11, 6);
            $table->decimal('latitude', 11, 6);
            $table->string('image', 255);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
