<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int id
 * @property string tipo_locacao
 * @property Carbon data_retirada
 * @property Carbon data_devolucao
 * @property boolean seguro
 * @property double quantidade_combustivel
 * @property string tipo_combustivel
 * @property Customer customer
 * @property Car car
 * @property int cliente_id
 * @property int carro_id
 */

class Location extends Model
{
    protected $table = 'locacoes';

    protected $fillable = [
        'nome',
        'nascimento',
        'telefone',
        'celular',
        'celular_whatsapp',
    ];
}
