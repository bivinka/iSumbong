<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
    
use App\Models\CrimeReportsModel;

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
    {}

    public function edit($id)
    {}

    public function update(Request $request, $id)
    {}

    public function destroy($id)
    {}

    public function getCrimeReports($id)
    {
        $reports = $this->crimeReports->fetchCrimeReports($id);

        return response()->json(['reports' => $reports]);

    }
}
