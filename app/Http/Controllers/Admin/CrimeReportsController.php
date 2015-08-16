<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\ModelNotFoundException;
    
use App\Models\CrimeReportsModel;
use App\Models\CrimeCategoriesModel;

class CrimeReportsController extends Controller
{
    protected $crimeReports;
    protected $crimeCategories;

    public function __construct(CrimeReportsModel $crimeReports)
    {
        $this->crimeReports = $crimeReports;
    }

    public function index()
    {}

    public function create()
    {}

    public function store(Request $request)
    {}

    public function show($id)
    {
        $reports = $this->crimeReports->getReport($id);
        return response()->json(['report' => $report]);
    }

    public function edit($id)
    {}

    public function update(Request $request, $id)
    {

        try {
            $params = $request->all();
            $reportId = $id;

            $report = CrimeReportsModel::find($id);

            if (isset($params['delete_flag'])){

                $report->delete_flag = 'y';
                $report->save();

                return response()->json(['message' => 'deleted'], 200);


            } else {

                $newStatus = '';

                switch($params['status']) {
                    case 'o' : $newStatus = 'p'; break;
                    case 'p' : $newStatus = 'r'; break;
                    case 'r' : $newStatus = 'r'; break;
                    default  : $newStatus = 'd'; break;
                }


                $report->status = $newStatus;
                $report->save();

                return response()->json(['message' => 'success'], 200);
            }

        } catch(ModelNotFoundException $e) {

            return Response::make('Not Found', 404);

        }

    }

    public function destroy($id)
    {}

    public function getCrimeReports($id)
    {
        $reports = $this->crimeReports->fetchCrimeReports($id);

        return response()->json(['reports' => $reports]);

    }
}
