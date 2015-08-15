<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CrimeCategoriesModel extends Model
{
    protected $table = 'crimes';

    protected $fillable = ['crime_name']; 
}
