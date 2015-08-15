<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
    
use App\Models\CrimeReportsModel;
use App\Models\CrimeCategoriesModel;


class CrimeReportsController extends Controller
{
    
    public function __consruct(CrimeReportsModel $crimeReports, CrimeCategoriesModel $crimeCategories)
    {
        $this->crimeReports    = $crimeReports;
        $this->crimeCategories = $crimeCategories;
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
}
