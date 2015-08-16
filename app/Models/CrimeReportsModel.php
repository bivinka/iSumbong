<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class CrimeReportsModel extends Model
{
    protected $table = 'crime_reports';
    protected $fillable = ['crime_id','reporter_id','longitude','latitude','image', 'status', 'delete_flag'];

    public function getReport($id)
    {
        return DB::table($this->table)
            ->join("crimes", 'crimes.id', '=', 'crime_reports.crime_id')
            ->where('crime_reports.id', $id)
            ->get();
    }

    public function fetchCrimeReports($id)
    {
        $reports = DB::table($this->table)
            ->join("crimes", 'crimes.id', '=', 'crime_reports.crime_id')
            ->where('station_id', $id)
            ->where('status', '=', 'o')
            ->get();

        return $reports;
    }
}
