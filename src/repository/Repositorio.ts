import { Produto } from "../model/Produto";

export class Repositorio {
  private produtos: Produto[] = [];

  adicionar(produto: Produto): void {
    if (this.produtos.some(p => p.codigo === produto.codigo)) {
      throw new Error("Produto com esse código já existe!");
    }
    this.produtos.push(produto);
  }

  listar(): Produto[] {
    return this.produtos;
  }
}