<?php

namespace App\Http\Controllers;

use App\Domain\Services\LocationService;
use App\Exceptions\BaseExceptions;
use App\Http\Requests\LocationRequest;
use Symfony\Component\HttpFoundation\Response;

class LocationController extends Controller
{
    private LocationService $locationService;

    public function __construct(LocationService $locationService) {
        $this->locationService = $locationService;
    }

    public function store(LocationRequest $request): \Illuminate\Http\JsonResponse
    {
        $this->response = $this->locationService->create($request->all());

        return response()->json($this->response, Response::HTTP_OK);
    }

    /**
     * @throws BaseExceptions
     */
    public function update($id, LocationRequest $request): \Illuminate\Http\JsonResponse
    {
        $this->response = $this->locationService->update($id, $request->all());

        return response()->json($this->response, Response::HTTP_OK);
    }

    public function customerLocationHistory($idCustomer): \Illuminate\Http\JsonResponse
    {
        $this->response = $this->locationService->findBy('id_cliente', $idCustomer);

        return response()->json($this->response, Response::HTTP_OK);
    }
}
