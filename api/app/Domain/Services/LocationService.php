<?php

namespace App\Domain\Services;

use App\Domain\Repositories\LocationRepository;

class LocationService extends BaseService
{
    protected LocationRepository $repository;

    public function __construct(LocationRepository $repository)
    {
        $this->repository = $repository;
    }

    public function create(array $filters): \Illuminate\Database\Eloquent\Model
    {
        return $this->repository->create($filters);
    }
}
