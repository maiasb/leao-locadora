<?php

namespace App\Http\Controllers;

use App\Domain\Services\CarService;
use App\Http\Requests\CarRequest;
use Symfony\Component\HttpFoundation\Response;

class CarController extends Controller
{
    private CarService $carsService;

    public function __construct(CarService $carsService) {
        $this->carsService = $carsService;
    }

    public function index(): \Illuminate\Http\JsonResponse
    {
        $this->response = $this->carsService->index();

        return response()->json($this->response, Response::HTTP_OK);
    }

    public function store(CarRequest $request): \Illuminate\Http\JsonResponse
    {
        $this->response = $this->carsService->create($request->all());

        return response()->json($this->response, Response::HTTP_OK);
    }
}
