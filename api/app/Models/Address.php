<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int id
 * @property string cep
 * @property string rua
 * @property string complemento
 * @property string bairro
 * @property string municipio
 * @property string numero
 * @property int id_cliente
 */

class Address extends Model
{
    protected $table = 'endereco';

    protected $fillable = [
        'cep',
        'rua',
        'complemento',
        'bairro',
        'municipio',
        'numero',
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
        return $this->belongsTo(Customer::class, 'id_cliente', 'id');
    }
}
