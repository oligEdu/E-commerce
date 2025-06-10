import { ProdutoDigital } from "../model/ProdutoDigital";
import { ProdutoFisico } from "../model/ProdutoFisico";
import { Repositorio } from "../repository/Repositorio";

export class Controller {
  private repo: Repositorio;
  private codigoAtual: number = 1;

  constructor() {
    this.repo = new Repositorio();
  }

  adicionarFisico(descricao: string, preco: number, quantidade: number, peso: number): void {
    const produto = new ProdutoFisico(this.codigoAtual++, descricao, preco, quantidade, peso);
    this.repo.adicionar(produto);
  }

  adicionarDigital(descricao: string, preco: number, quantidade: number, tamanho: number): void {
    const produto = new ProdutoDigital(this.codigoAtual++, descricao, preco, quantidade, tamanho);
    this.repo.adicionar(produto);
  }

  listarProdutos(): void {
    const produtos = this.repo.listar();
    for (const produto of produtos) {
      produto.exibirDetalhes();
    }
  }
}