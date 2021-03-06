<?php

namespace App\Http\Controllers\Reporter;

use Illuminate\Http\Request;
use Event;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Models\CrimeReportsModel;
use App\Models\CrimeCategoriesModel;

class CrimeReportsController extends Controller
{
    protected $crimeReports;
    protected $crimeCategories;

    public function __construct(CrimeReportsModel $crimeReports, CrimeCategoriesModel $crimeCategories)
    {
        $this->crimeReports    = $crimeReports;
        $this->crimeCategories = $crimeCategories;
    }

    public function index()
    {

    }

    public function store(Request $request)
    {
        $params = $request->all();
        $file   = $request->file('file');

        if (in_array($file->getMimeType(), ['image/jpeg', 'image/png', 'image/jpg'])) {

            $userId      = $params['user_id'];
            $typeId      = $params['crime_id'];
            $description = $params['description'];
            $longitude   = $params['longitude'];
            $latitude    = $params['latitude'];

            $reportData = array (
                'crime_id'    => $userId, // crime type
                'reporter_id' => $userId, // user_id
                'longitude'   => $longitude,
                'latitude'    => $latitude,
                'image'       => date('Ymdhis') . '.jpeg',
                'status'      => 'o',
                'station_id'  => 1
            );

            $this->crimeReports->fill($reportData);
            $this->crimeReports->save();

            $request->file('file')->move('public/reports/images/', $reportData['image']);

            $stationId = 1;

            event(new \App\Events\CreateCrimeReportEvent($stationId));

            return response()->json([
                'success' => 'Ang iyong sumbong ay naipada na.',
                "image"   => 'public/reports/images/' . $reportData['image']
            ], 200);

        } else {
            return response()->json(['error' => 'Invalid file type. Image only.'], 412);
        }
    }

    public function show($id)
    {
        
    }

    public function edit($id)
    {}

    public function update(Request $request, $id)
    {}

    public function destroy($id)
    {}

    public function image()
    {
        
    }

    public function getCategories()
    {
        $categories =  CrimeCategoriesModel::all();

        return response()->json(['categories' => $categories]);
    }
}
