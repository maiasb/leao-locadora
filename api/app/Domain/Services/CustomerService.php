<?php

namespace App\Domain\Services;

use App\Domain\Repositories\CustomerRepository;

class CustomerService extends BaseService
{
    protected CustomerRepository $repository;

    public function __construct(CustomerRepository $repository)
    {
        $this->repository = $repository;
    }

    public function create(array $filters): \Illuminate\Database\Eloquent\Model
    {
        $customer = $this->repository->create($filters);

        $filters["cnh"]["id_cliente"] = $customer->id;

        $this->CNHService->create($filters["cnh"]);

        return $customer;
    }
}
