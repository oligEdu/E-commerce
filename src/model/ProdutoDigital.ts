import { Produto } from "./Produto";

export class ProdutoDigital extends Produto {
  private _tamanhoArquivo: number; // em MB

  constructor(codigo: number, descricao: string, preco: number, quantidade: number, tamanhoArquivo: number) {
    super(codigo, descricao, preco, quantidade);
    this._tamanhoArquivo = tamanhoArquivo;
  }

  exibirDetalhes(): void {
  console.log(`Produto Digital - ${this.descricao} | Preço: R$${this.preco} | Quantidade: ${this.quantidade} | Tamanho: ${this._tamanhoArquivo}MB`);
}

    get tamanhoArquivo(): number {
        return this._tamanhoArquivo;
    }
    
    set tamanhoArquivo(value: number) {
        this._tamanhoArquivo = value;
    }
}