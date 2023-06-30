<?php

namespace App\Exceptions\SystemExceptions;

use App\Exceptions\BaseExceptions;
use Symfony\Component\HttpFoundation\Response;

class LocationExceptions
{
    public static function NOT_FOUND(): BaseExceptions
    {
        return new BaseExceptions([
            'shortMessage' => 'LocationNotFound',
            'message'      => trans('core::exception.location.not_found'),
            'httpCode'     => Response::HTTP_NOT_FOUND,
        ]);
    }
}
