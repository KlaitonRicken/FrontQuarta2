export class Categoria{

  id: number;
  nome: string;

}

export class Produto {

  id: number;
  nome: string;
  prco: number;
  categorias: Categoria[] = [];

}
