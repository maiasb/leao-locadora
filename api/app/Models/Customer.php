<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int id
 * @property string nome
 * @property string cpf
 * @property string nascimento
 * @property string telefone
 * @property boolean whatsapp
 */

class Customer extends Model
{
    protected $table = 'clientes';

    protected $fillable = [
        'nome',
        'cpf',
        'nascimento',
        'telefone',
        'whatsapp'
    ];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    public function cnh()
    {
        return $this->hasOne(CNH::class, 'id_cliente', 'id');
    }

    public function address()
    {
        return $this->hasOne(CNH::class, 'id_cliente', 'id');
    }
}
