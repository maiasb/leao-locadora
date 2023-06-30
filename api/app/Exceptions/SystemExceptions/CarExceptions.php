<?php

namespace App\Exceptions\SystemExceptions;

use App\Exceptions\BaseExceptions;
use Symfony\Component\HttpFoundation\Response;

class CarExceptions
{
    public static function NOT_FOUND(): BaseExceptions
    {
        return new BaseExceptions([
            'shortMessage' => 'CarNotFound',
            'message'      => trans('core::exception.car.not_found'),
            'httpCode'     => Response::HTTP_NOT_FOUND,
        ]);
    }
}
