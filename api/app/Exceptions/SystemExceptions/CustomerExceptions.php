<?php

namespace App\Exceptions\SystemExceptions;

use App\Exceptions\BaseExceptions;
use Symfony\Component\HttpFoundation\Response;

class CustomerExceptions
{
    public static function NOT_FOUND(): BaseExceptions
    {
        return new BaseExceptions([
            'shortMessage' => 'CustomerNotFound',
            'message'      => trans('core::exception.customer.not_found'),
            'httpCode'     => Response::HTTP_NOT_FOUND,
        ]);
    }
}
