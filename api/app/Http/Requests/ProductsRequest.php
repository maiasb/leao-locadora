<?php

namespace App\Http\Requests;

class ProductsRequest extends BaseRequests
{
    public function onStore()
    {
        return [
            'name' => 'required',
            'description' => 'required',
            'price' => 'required',
            'idCategory' => 'required',
        ];
    }
}
