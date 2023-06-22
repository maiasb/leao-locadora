<?php

namespace App\Http\Requests;

class CategoryRequest extends BaseRequests
{
    public function onStore()
    {
        return [
            'name' => 'required',
        ];
    }
}
