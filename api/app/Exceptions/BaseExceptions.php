<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Support\Arr;
use Symfony\Component\HttpFoundation\Response;

class BaseExceptions extends Exception
{
    protected string $codigo;
    protected $message;
    protected int $httpCode;

    public function __construct(array $exception)
    {
        $this->codigo   = Arr::get($exception, 'codigo', 'internalError');
        $this->message  = Arr::get($exception, 'message', trans('exceptions.internal_error'));
        $this->httpCode = Arr::get($exception, 'httpCode', Response::HTTP_INTERNAL_SERVER_ERROR);

        parent::__construct();
    }

    public function getCodigo(): ?string
    {
        return $this->codigo;
    }

    public function getError(): array
    {
        return [
            'codigo'   => $this->codigo,
            'message' => $this->message,
        ];
    }

    public function render()
    {
        return response($this->getError(), $this->httpCode);
    }
}
