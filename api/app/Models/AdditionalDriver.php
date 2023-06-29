<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int id
 * @property int id_cliente
 * @property int id_motorista_adicional
 * @property int id_locacao
 */

class AdditionalDriver extends Model
{
    protected $table = 'cliente_motorista_adicional';

    protected $fillable = [
        'id_cliente',
        'id_motorista_adicional',
        'id_locacao'
    ];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
}
