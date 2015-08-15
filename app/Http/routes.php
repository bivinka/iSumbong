<?php

/**
 * ---------------------------------------------------------------------
 * Reporter Routes 
 * ---------------------------------------------------------------------
 */
Route::group(['prefix' => 'reporter'], function()
{
    Route::resource('crime', 'Reporter\CrimeController');
    Route::resource('stations', 'StationsController');
});
