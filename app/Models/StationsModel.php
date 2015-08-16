<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class StationsModel extends Model
{
    protected $table = 'stations';
    protected $alias = 'AS s';

    public function getStations($coordinates)
    {
        $longitude = $coordinates['longitude'];
        $latitude  = $coordinates['latitude'];

        $stations = DB::table($this->table)
            ->select(DB::raw("id, station_name, (3959 * 
                ACOS( COS( RADIANS(14.575937) ) * 
                COS( RADIANS($latitude) ) * 
                COS( RADIANS($longitude) - 
                RADIANS(121.050040) ) + 
                SIN( RADIANS(14.575937) ) *
                SIN( RADIANS($latitude) ) ) )  AS distance"))
            ->where('active', '=', 1)
            ->having('distance', '>', 0.62)
            ->orderBy('distance')
            ->take(5)
            ->get();

        return $stations;
    }

}