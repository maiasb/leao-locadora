<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int id
 * @property string placa
 * @property string renavam
 * @property string chassi
 * @property string ano_fabricacao
 * @property string ano_modelo
 * @property string marca
 * @property string modelo
 * @property string cor
 * @property string tipo_combustivel
 * @property int litros_combustivel
 * @property boolean limpo
 */

class Car extends Model
{
    protected $table = 'carros';

    protected $fillable = [
        'placa',
        'renavam',
        'chassi',
        'ano_fabricacao',
        'ano_modelo',
        'marca',
        'modelo',
        'cor',
        'tipo_combustivel',
        'litros_combustivel',
        'limpo'
    ];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
}
