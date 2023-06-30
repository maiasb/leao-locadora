<?php

namespace App\Domain\Repositories;

use App\Models\CNH;

class CNHRepository extends BaseRepository
{
    public function model(): string
    {
        return CNH::class;
    }
}
