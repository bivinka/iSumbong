<?php

namespace App\Http\Controllers\Reporter;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Models\StationsModel;

class StationsController extends Controller
{
    protected $stations;

    public function __construct(StationsModel $stations)
    {
        $this->stations = $stations;
    }

    function getNearestStations(Request $request)
    {
        $params = $request->all();

        $data = [
            'longitude' => $params['longitude'],
            'latitude' => $params['latitude']
        ];

        $stations = $this->stations->getStations($data);
        return response()->json(['stations' => $stations]);
    }

    public function index()
    {
        echo 1;
    }

    public function store(Request $request)
    {

    }

    public function show($id)
    {}

    public function edit($id)
    {}

    public function update(Request $request, $id)
    {}

    public function destroy($id)
    {}
}
