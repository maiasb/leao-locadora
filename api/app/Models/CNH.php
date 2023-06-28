<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int id
 * @property string numero
 * @property string categoria
 * @property string data_provisoria
 * @property int id_cliente
 */

class CNH extends Model
{
    protected $table = 'cnh';

    protected $fillable = [
        'numero',
        'categoria',
        'data_provisoria',
        'id_cliente'
    ];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id', 'id');
    }
}
