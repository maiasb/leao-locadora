<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;

Route::controller(ProductsController::class)->group(function () {
    Route::get('/produtos', 'index');
    Route::post('/produto', 'store');
});
