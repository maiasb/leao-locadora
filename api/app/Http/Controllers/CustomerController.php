<?php

namespace App\Http\Controllers;

use App\Domain\Services\CustomerService;
use App\Http\Requests\CustomerRequest;
use Symfony\Component\HttpFoundation\Response;

class CustomerController extends Controller
{
    private CustomerService $customerService;

    public function __construct(CustomerService $customerService) {
        $this->customerService = $customerService;
    }

    public function index(): \Illuminate\Http\JsonResponse
    {
        $this->response = $this->customerService->index();

        return response()->json($this->response, Response::HTTP_OK);
    }

    public function store(CustomerRequest $request): \Illuminate\Http\JsonResponse
    {
        $this->response = $this->customerService->create($request->all());

        return response()->json($this->response, Response::HTTP_OK);
    }
}
