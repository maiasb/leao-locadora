<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;

Route::controller(CustomerController::class)->group(function () {
    Route::get('/clientes/', 'index');
    Route::post('/clientes/', 'store');
});
