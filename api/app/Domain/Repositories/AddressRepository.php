<?php

namespace App\Domain\Repositories;

use App\Models\Address;

class AddressRepository extends BaseRepository
{
    public function model(): string
    {
        return Address::class;
    }
}
