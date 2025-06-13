<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ContactController;

Route::get('/', function () {
    return Inertia::render('index', [
        'flash' => [
            'success' => session('success'),
        ],
    ]);
})->name('index');
Route::post('/', [ContactController::class, 'sendMail'])->name('contact');
