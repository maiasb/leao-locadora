<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int id
 * @property string tipo_locacao
 * @property boolean seguro
 * @property string data_retirada
 * @property string data_devolucao
 * @property string pericia_retirada
 * @property string pericia_devolucao
 * @property int cliente_id
 * @property int carro_id
 * @property Customer customer
 * @property Car car
 */

class Location extends Model
{
    protected $table = 'locacoes';

    protected $fillable = [
        'tipo_locacao',
        'seguro',
        'data_retirada',
        'data_devolucao',
        'pericia_retirada',
        'pericia_devolucao',
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
