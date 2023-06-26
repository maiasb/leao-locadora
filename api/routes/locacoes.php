<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LocationController;

Route::controller(LocationController::class)->group(function () {
    Route::post('/locacoes/', 'store');
});
