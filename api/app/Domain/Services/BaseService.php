<?php

namespace App\Domain\Services;

use App\Exceptions\SystemExceptions\ServiceExceptions;

/**
 * @property CustomerService $customerService
 * @property CNHService $CNHService
 * @property AddressService $addressService
 */
class BaseService
{
    public const SERVICES = [
        'customerService' => CustomerService::class,
        'CNHService' => CNHService::class,
        'addressService' => AddressService::class
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
