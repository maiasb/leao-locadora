<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

abstract class BaseRequests extends FormRequest
{
    public function all($keys = null)
    {
        $data = parent::all($keys);

        $query = $this->query();

        foreach ($query as $key => $value) {
            $data[$key] = $value;
        }

        $route = $this->route()->parameters();

        foreach ($route as $key => $value) {
            $data[$key] = $value;
        }

        return $data;
    }

    public function rules()
    {
        $methodName = request()->route()->getActionMethod();
        $ruleName   = 'on' . Str::ucfirst($methodName);

        if (method_exists($this, $ruleName)) {
            return $this->$ruleName();
        }

        return [];
    }

    protected function failedValidation(Validator $validator)
    {
        $content['errors'] = [];

        foreach ($validator->errors()->all() as $message) {
            $content['errors'][] = ['mensagem' => $message];
        }

        $response = response()->json($content, Response::HTTP_UNPROCESSABLE_ENTITY);

        throw new HttpResponseException($response);
    }

    public function authorize()
    {
        return true;
    }
}
