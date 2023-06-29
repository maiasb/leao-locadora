<?php

namespace App\Domain\Services;

use App\Domain\Repositories\AdditionalDriverRepository;

class AdditionalDriverService extends BaseService
{
    protected AdditionalDriverRepository $repository;

    public function __construct(AdditionalDriverRepository $repository)
    {
        $this->repository = $repository;
    }

    public function create(array $filters): \Illuminate\Database\Eloquent\Model
    {
        return $this->repository->create($filters);
    }
}
