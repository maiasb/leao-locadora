<?php

namespace App\Domain\Repositories;

use App\Models\AdditionalDriver;

class AdditionalDriverRepository extends BaseRepository
{
    public function model(): string
    {
        return AdditionalDriver::class;
    }
}
