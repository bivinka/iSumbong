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

Route::get('categories', 'Reporter\CrimeReportsController@getCategories');
