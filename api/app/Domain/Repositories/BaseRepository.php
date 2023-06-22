<?php

namespace App\Domain\Repositories;

use App\Exceptions\SystemExceptions\RepositoryExceptions;
use App\Exceptions\SystemExceptions\SystemExceptions;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

abstract class BaseRepository
{
    protected Model $model;

    abstract public function model(): string;

    /**
     * @return Model
     * @throws SystemExceptions
     */
    public function makeModel(): Model
    {
        $model = resolve($this->model());

        if (!$model instanceof Model) {
            throw RepositoryExceptions::INVALID_MODEL($this->model());
        }

        return $this->model = $model;
    }

    public function create(array $attributes = [])
    {
        $instance = $this->makeModel();

        $instance->fill($attributes);

        $instance->save();

        return $instance;
    }

    public function update($id, array $attributes = [])
    {
        $instance = $id instanceof Model ? $id : $this->find($id);

        if ($instance) {
            $instance->fill($attributes);

            $instance->save();
        }

        return $instance;
    }

    public function delete($id)
    {
        $instance = $id instanceof Model ? $id : $this->find($id);

        if ($instance) {
            $instance->delete();
        }

        return $instance;
    }

    public function forceDelete($id)
    {
        $instance = $id instanceof Model ? $id : $this->find($id);

        if ($instance) {
            $instance->forceDelete();
        }

        return $instance;
    }

    public function find($id)
    {
        return $this->makeModel()::find($id);
    }

    public function query(): Builder
    {
        return $this->makeModel()::query();
    }

    public function queryWithTrashed(): Builder
    {
        return $this->makeModel()::withTrashed();
    }
}
