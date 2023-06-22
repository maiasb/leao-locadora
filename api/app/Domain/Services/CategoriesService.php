<?php

namespace App\Domain\Services;

use App\Domain\Repositories\CategoriesRepository;

class CategoriesService extends BaseService
{
    private CategoriesRepository $productsCategoriesRepository;

    public function __construct(CategoriesRepository $productsCategoriesRepository)
    {
        $this->productsCategoriesRepository = $productsCategoriesRepository;
    }

    public function findCategories()
    {
        return $this->productsCategoriesRepository->query()->get();
    }

    public function create(array $filters)
    {
        return $this->productsCategoriesRepository->create(["nome" => $filters['name']]);
    }
}
