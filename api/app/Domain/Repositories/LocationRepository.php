<?php

namespace App\Domain\Repositories;

use App\Models\Location;

class LocationRepository extends BaseRepository
{
    public function model(): string
    {
        return Location::class;
    }
}
