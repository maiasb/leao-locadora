<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int id
 * @property string tipo_locacao
 * @property string data_retirada
 * @property string data_devolucao
 * @property boolean seguro
 * @property Customer customer
 * @property Car car
 * @property int cliente_id
 * @property int carro_id
 */

class Location extends Model
{
    protected $table = 'locacoes';

    protected $fillable = [
        'tipo_locacao',
        'data_retirada',
        'data_devolucao',
        'seguro',
        'id_cliente',
        'id_carro'
    ];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
}
