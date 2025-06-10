import { Produto } from "./Produto";

export class ProdutoFisico extends Produto {
  private _peso: number;

  constructor(codigo: number, descricao: string, preco: number, quantidade: number, peso: number) {
    super(codigo, descricao, preco, quantidade);
    this._peso = peso;
  }

  exibirDetalhes(): void {
  console.log(`Produto Digital - ${this.descricao} | Preço: R$${this.preco} | Quantidade: ${this.quantidade}
     | Tamanho: ${this._peso}MB`);
}

    get peso(): number {
        return this._peso;
    }
    
    set peso(value: number) {
        this._peso = value;
    }

}
