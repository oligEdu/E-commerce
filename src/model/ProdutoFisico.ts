import { Produto } from "./Produto";

export class ProdutoFisico extends Produto {
  private _peso: number;

  constructor(codigo: number, descricao: string, preco: number, quantidade: number, peso: number) {
    super(codigo, descricao, preco, quantidade);
    this._peso = peso;
  }

  exibirDetalhes(): void {
  console.log(`\nProduto Fisico - ${this.descricao} | Preço: R$${this.preco} | Quantidade: ${this.quantidade} | Peso: ${this._peso}kg`);
}

    get peso(): number {
        return this._peso;
    }
    
    set peso(value: number) {
        this._peso = value;
    }

}
