<?php

namespace App\Domain\Repositories;

use App\Models\Category;

class CategoriesRepository extends BaseRepository
{
    public function model(): string
    {
        return Category::class;
    }
}
