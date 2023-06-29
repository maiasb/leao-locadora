<?php

namespace App\Domain\Services;

use App\Domain\Repositories\CarRepository;
use App\Exceptions\BaseExceptions;
use App\Exceptions\SystemExceptions\CarExceptions;
use App\Exceptions\SystemExceptions\CustomerExceptions;
use App\Models\Car;
use App\Models\Customer;
use Illuminate\Database\Eloquent\Collection;

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

    /**
     * @throws BaseExceptions
     */
    public function update($id, array $filters) {
        $car = $this->findOneBy('id', $id);

        return $this->repository->update($car->id, $filters);
    }

    /**
     * @throws BaseExceptions
     */
    public function findOneBy($key, $value): Car
    {
        /** @var Car $car */
        $car = $this->findBy($key, $value)->first();

        if (!$car instanceof Car) {
            throw CarExceptions::NOT_FOUND();
        }

        return $car;
    }

    public function findBy($key, $value): Collection
    {
        return $this->repository->query()->where('carros.' . $key, $value)->get();
    }
}
