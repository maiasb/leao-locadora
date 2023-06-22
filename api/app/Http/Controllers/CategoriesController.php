<?php

namespace App\Http\Controllers;

use App\Domain\Services\CategoriesService;
use App\Http\Requests\CategoryRequest;
use Symfony\Component\HttpFoundation\Response;

class CategoriesController extends Controller
{
    private CategoriesService $productsCategoriesService;

    public function __construct(CategoriesService $productsCategoriesService) {
        $this->productsCategoriesService = $productsCategoriesService;
    }

    public function index() {
        return $this->productsCategoriesService->findCategories();
    }

    public function store(CategoryRequest $request) {
        $this->response = $this->productsCategoriesService->create($request->all());

        return response()->json($this->response, Response::HTTP_OK);
    }
}
