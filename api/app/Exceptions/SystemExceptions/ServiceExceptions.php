<?php

namespace App\Exceptions\SystemExceptions;

use Symfony\Component\HttpFoundation\Response;

final class ServiceExceptions
{
    public static function INVALID_SERVICE(): SystemExceptions
    {
        return new SystemExceptions([
            'codigo' => 'InvalidService',
            'message'      => trans('exception.system.service_invalid'),
            'httpCode'     => Response::HTTP_UNPROCESSABLE_ENTITY,
        ]);
    }
}
