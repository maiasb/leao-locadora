<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int id
 * @property string nome
 * @property Carbon nascimento
 * @property string telefone
 * @property string celular
 * @property boolean celular_whatsapp
 */

class Customer extends Model
{
    protected $table = 'clientes';

    protected $fillable = [
        'nome',
        'nascimento',
        'telefone',
        'celular',
        'celular_whatsapp',
    ];
}
