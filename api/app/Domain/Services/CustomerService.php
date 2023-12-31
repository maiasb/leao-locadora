<?php

namespace App\Domain\Services;

use App\Domain\Repositories\CustomerRepository;
use App\Exceptions\BaseExceptions;
use App\Exceptions\SystemExceptions\CustomerExceptions;
use App\Models\Customer;
use Illuminate\Database\Eloquent\Collection;

class CustomerService extends BaseService
{
    protected CustomerRepository $repository;

    public function __construct(CustomerRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index(): Collection|array
    {
        return $this->repository->query()->get();
    }

    public function create(array $filters): \Illuminate\Database\Eloquent\Model
    {
        $customer = $this->repository->create($filters);

        if (isset($filters["cnh"])) {
            $filters["cnh"]["id_cliente"] = $customer->id;

            $this->CNHService->create($filters["cnh"]);
        }

        if (isset($filters["endereco"])) {
            $filters["endereco"]["id_cliente"] = $customer->id;

            $this->addressService->create($filters["endereco"]);
        }

        return $customer;
    }

    /**
     * @throws BaseExceptions
     */
    public function update($id, array $filters)
    {
        $customer = $this->findOneBy('id', $id);

        return $this->repository->update($customer->id, $filters);
    }

    /**
     * @throws BaseExceptions
     */
    public function findOneBy($key, $value): Customer
    {
        /** @var Customer $customer */
        $customer = $this->findBy($key, $value)->first();

        if (!$customer instanceof Customer) {
            throw CustomerExceptions::NOT_FOUND();
        }

        return $customer;
    }

    public function findBy($key, $value): Collection
    {
        return $this->repository->query()->where('clientes.' . $key, $value)->get();
    }
}
