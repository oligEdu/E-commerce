import { ProdutoDigital } from "../model/ProdutoDigital";
import { ProdutoFisico } from "../model/ProdutoFisico";
import { Produto } from "../model/Produto";
import { Repositorio } from "../repository/Repositorio";

export class Controller implements Repositorio {
  private produtos: Array<Produto> = new Array<Produto>;
  private codigoAtual: number = 1;

        adicionar(produto: Produto): void {
          if (this.produtos.some(p => p.codigo === produto.codigo)) {
            throw new Error("Produto com esse código já existe!");
          } else {
          this.produtos.push(produto);
          }
        }

        listarTodos(): Produto[] {
          return this.produtos;
        }

        atualizar(produto: Produto): void {
          const index = this.produtos.findIndex(p => p.codigo === produto.codigo);
            if (index === -1) {
              throw new Error("Produto não encontrado.");
          } else {
            this.produtos[index] = produto;
          }
        }

        remover(codigo: number): void {
          const index = this.produtos.findIndex(p => p.codigo === codigo);
            if (index === -1) {
              throw new Error("Produto não encontrado.");
            } else {
              this.produtos.splice(index, 1);
            }
          }

        adicionarFisico(descricao: string, preco: number, quantidade: number, peso: number): void {
          const produto = new ProdutoFisico(this.codigoAtual++, descricao, preco, quantidade, peso);
            this.adicionar(produto);
        }

        adicionarDigital(descricao: string, preco: number, quantidade: number, tamanho: number): void {
          const produto = new ProdutoDigital(this.codigoAtual++, descricao, preco, quantidade, tamanho);
            this.adicionar(produto);
        }

        listarProdutos(): void {
          for (const produto of this.listarTodos()) {
            produto.exibirDetalhes();
          }
        }

        buscarPorCodigo(codigo: number): Produto | undefined {
          return this.produtos.find(p => p.codigo === codigo);
        }
}
