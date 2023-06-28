<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int id
 * @property string nome
 * @property string cpf
 * @property string nascimento
 * @property string telefone
 */

class Customer extends Model
{
    protected $table = 'clientes';

    protected $fillable = [
        'nome',
        'cpf',
        'nascimento',
        'telefone'
    ];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    public function cnh()
    {
        return $this->hasOne(CNH::class, 'customer_id', 'id');
    }
}
