<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LocationController;

Route::controller(LocationController::class)->group(function () {
    Route::get('/locacoes/', 'index');
    Route::post('/locacoes/', 'store');
    Route::put('/locacoes/{id}', 'update');
});
