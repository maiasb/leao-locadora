<?php

namespace App\Domain\Services;

use App\Domain\Repositories\LocationRepository;
use App\Exceptions\BaseExceptions;
use App\Exceptions\SystemExceptions\LocationExceptions;
use App\Models\Location;
use Illuminate\Database\Eloquent\Collection;

class LocationService extends BaseService
{
    protected LocationRepository $repository;

    public function __construct(LocationRepository $repository)
    {
        $this->repository = $repository;
    }

    public function create(array $filters): \Illuminate\Database\Eloquent\Model
    {
        $this->customerService->findOneBy('id', $filters['id_cliente']);

        $this->carService->findOneBy('id', $filters['id_carro']);

        return $this->repository->create($filters);
    }

    /**
     * @throws BaseExceptions
     */
    public function update($id, array $filters) {
        $location = $this->findOneBy('id', $id);

        return $this->repository->update($location->id, $filters);
    }

    /**
     * @throws BaseExceptions
     */
    public function findOneBy($key, $value): Location
    {
        /** @var Location $location */
        $location = $this->findBy($key, $value)->first();

        if (!$location instanceof Location) {
            throw LocationExceptions::NOT_FOUND();
        }

        return $location;
    }

    public function findBy($key, $value): Collection
    {
        return $this->repository->query()->where('locacoes.' . $key, $value)->get();
    }
}
