<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
/**
 * @property int id
 * @property string nome
 * @property int preco
 * @property string descricao
 * @property int categoria_id
 * @property string created_at
 * @property string updated_at
 */
class Products extends Model
{
    protected $table = 'produtos';
    protected $fillable = [
        'nome',
        'preco',
        'descricao',
        'categoria_id',
    ];

    public function rules(): array
    {
        return [
            'nome'    => 'required',
            'preco' => 'required',
            'categoria_id' => 'required',
        ];
    }
}
