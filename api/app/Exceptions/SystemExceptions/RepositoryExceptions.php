<?php

namespace App\Exceptions\SystemExceptions;

use Symfony\Component\HttpFoundation\Response;

final class RepositoryExceptions
{
    public static function INVALID_MODEL(string $model): SystemExceptions
    {
        return new SystemExceptions([
            'codigo' => 'InvalidModel',
            'message'      => "Class $model must be an instance of Illuminate\\Database\\Eloquent\\Model",
            'httpCode'     => Response::HTTP_UNPROCESSABLE_ENTITY,
        ]);
    }
}
