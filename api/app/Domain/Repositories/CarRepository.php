<?php

namespace App\Domain\Repositories;

use App\Models\Car;

class CarRepository extends BaseRepository
{
    public function model(): string
    {
        return Car::class;
    }
}
