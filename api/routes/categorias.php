<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoriesController;

Route::controller(CategoriesController::class)->group(function () {
    Route::get('/categorias/', 'index');
    Route::post('/categoria/', 'store');
});
