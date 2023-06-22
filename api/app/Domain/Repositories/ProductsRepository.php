<?php

namespace App\Domain\Repositories;

use App\Models\Products;

class ProductsRepository extends BaseRepository
{
    public function model(): string
    {
        return Products::class;
    }
}
