<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int id
 * @property string placa
 * @property string renavam
 * @property string chassi
 * @property Carbon ano_fabricacao
 * @property Carbon ano_modelo
 * @property string marca
 * @property string modelo
 * @property string cor
 * @property int numero_motor
 * @property string tipo_combustível
 */

class Customer extends Model
{
    protected $table = 'clientes';

    protected $fillable = [
        'nome'
    ];
}
