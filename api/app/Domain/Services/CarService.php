<?php

namespace App\Domain\Services;

use App\Domain\Repositories\CarRepository;

class CarService extends BaseService
{
    protected CarRepository $repository;

    public function __construct(CarRepository $repository)
    {
        $this->repository = $repository;
    }

    public function create(array $filters): \Illuminate\Database\Eloquent\Model
    {
        return $this->repository->create($filters);
    }
}
