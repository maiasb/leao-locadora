<?php

namespace App\Domain\Services;

use App\Domain\Repositories\ProductsRepository;

class ProductsService extends BaseService
{
    private ProductsRepository $productsRepository;

    public function __construct(ProductsRepository $productsRepository) {
        $this->productsRepository = $productsRepository;
    }

    public function findProducts()
    {
        return $this->productsRepository->query()->selectRaw('*, produtos_categorias.nome as nome_categoria')
            ->join('produtos_categorias', 'produtos.categoria_id', '=', 'produtos_categorias.id')
            ->get();
    }

    public function create(array $filters)
    {
        return $this->productsRepository->create([
            'nome' => $filters['name'],
            'descricao' => $filters['description'],
            'preco' => $filters['price'],
            'categoria_id' => $filters['idCategory'],
        ]);
    }
}
