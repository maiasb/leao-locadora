<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;

Route::controller(CustomerController::class)->group(function () {
    Route::post('/clientes/', 'store');
});
