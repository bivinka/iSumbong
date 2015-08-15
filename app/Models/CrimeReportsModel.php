<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CrimeReportsModel extends Model
{
    protected $table = 'crime_reports';
    protected $fillable = ['crime_id','reporter_id','longitude','latitude','image'];
}
