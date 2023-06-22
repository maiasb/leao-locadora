<?php

namespace App\Domain\Services;

use App\Exceptions\SystemExceptions\ServiceExceptions;

/**
 * @property ExampleService $exampleService
 */
class BaseService
{
    public const SERVICES = [
        'exampleService'            => ExampleService::class,
    ];

    public function __get($service)
    {
        $calledClassName = static::class;

        if (!array_key_exists($service, $calledClassName::SERVICES)) {
            throw ServiceExceptions::INVALID_SERVICE();
        }

        $classname = $calledClassName::SERVICES[$service];

        return resolve($classname);
    }
}
