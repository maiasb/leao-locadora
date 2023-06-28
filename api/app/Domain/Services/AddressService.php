<?php

namespace App\Domain\Services;

use App\Domain\Repositories\AddressRepository;

class AddressService extends BaseService
{
    protected AddressRepository $repository;

    public function __construct(AddressRepository $repository)
    {
        $this->repository = $repository;
    }

    public function create(array $filters): \Illuminate\Database\Eloquent\Model
    {
        return $this->repository->create($filters);
    }
}
