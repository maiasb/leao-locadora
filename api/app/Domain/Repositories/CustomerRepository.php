<?php

namespace App\Domain\Repositories;

use App\Models\Customer;

class CustomerRepository extends BaseRepository
{
    public function model(): string
    {
        return Customer::class;
    }
}
