<?php

namespace App\Http\Controllers;

use App\Domain\Services\ProductsService;
use App\Http\Requests\ProductsRequest;
use Symfony\Component\HttpFoundation\Response;

class ProductsController extends Controller
{
    private ProductsService $productsService;

    public function __construct(ProductsService $productsService) {
        $this->productsService = $productsService;
    }

    public function index() {
        $this->response = $this->productsService->findProducts();

        return response()->json($this->response, Response::HTTP_OK);
    }

    public function store(ProductsRequest $request) {
        $this->response = $this->productsService->create($request->all());

        return response()->json($this->response, Response::HTTP_OK);
    }
}
