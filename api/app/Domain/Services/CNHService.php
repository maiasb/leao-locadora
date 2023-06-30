<?php

namespace App\Domain\Services;

use App\Domain\Repositories\CNHRepository;

class CNHService extends BaseService
{
    protected CNHRepository $repository;

    public function __construct(CNHRepository $repository)
    {
        $this->repository = $repository;
    }

    public function create(array $filters): \Illuminate\Database\Eloquent\Model
    {
        return $this->repository->create($filters);
    }
}
