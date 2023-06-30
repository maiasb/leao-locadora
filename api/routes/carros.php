<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CarController;

Route::controller(CarController::class)->group(function () {
    Route::get('/carros/', 'index');
    Route::post('/carros/', 'store');
});
