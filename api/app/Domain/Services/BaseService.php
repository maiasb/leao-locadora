<?php

namespace App\Domain\Services;

use App\Exceptions\SystemExceptions\ServiceExceptions;

/**
 * @property CustomerService $customerService
 * @property CarService $carService
 * @property CNHService $CNHService
 * @property AddressService $addressService
 * @property LocationService $locationService
 * @property AdditionalDriverService $additionalDriverService
 */
class BaseService
{
    public const SERVICES = [
        'customerService' => CustomerService::class,
        'carService' => CarService::class,
        'CNHService' => CNHService::class,
        'addressService' => AddressService::class,
        'locationService' => LocationService::class,
        'additionalDriverService' => AdditionalDriverService::class
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
