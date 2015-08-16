<?php

/**
 * ---------------------------------------------------------------------
 * Reporter Routes 
 * ---------------------------------------------------------------------
 */
Route::group(['prefix' => 'reporter'], function()
{
    // Route::resource('crime', 'Reporter\CrimeController');
    Route::resource('stations', 'Reporter\StationsController');
    Route::resource('report', 'Reporter\CrimeReportsController');
});


Route::group(['prefix' => 'admin'], function()
{
    // Route::resource('crime', 'Reporter\CrimeController');
    // Route::resource('stations', 'Reporter\StationsController');
    Route::resource('report', 'Admin\CrimeReportsController');
    Route::get('reports/{id}', 'Admin\CrimeReportsController@getCrimeReports');
});

Route::get('categories', 'Reporter\CrimeReportsController@getCategories');

Route::group(['prefix' => 'api'], function()
{
    Route::post('authenticate', 'AuthenticateController@authenticate');
    Route::get('authenticate/user', 'AuthenticateController@getAuthenticatedUser');
});

Route::post('auth/google', 'AuthenticateController@google');
Route::post('stations', 'Reporter\StationsController@getNearestStations');