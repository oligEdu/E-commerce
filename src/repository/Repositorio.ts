import { Produto } from "../model/Produto";

export interface Repositorio {

  //CRUD - Create, Read, Update, Delete
  adicionar(produto: Produto): void;
  listarTodos(): Produto[];
  atualizar(produto: Produto): void;
  remover(codigo: number): void;
}