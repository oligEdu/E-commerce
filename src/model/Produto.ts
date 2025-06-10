

export abstract class Produto {
    private _codigo: number;
    private _descricao: string;
    private _preco: number;
    private _quantidade: number;

  constructor(codigo: number, descricao: string, preco: number, quantidade: number) {
    this._codigo = codigo;
    this._descricao = descricao;
    this._preco = preco;
    this._quantidade = quantidade;
  }

  get codigo(): number {
    return this._codigo;
  }

  get descricao(): string {
    return this._descricao;
  }
  set descricao(value: string) {
    this._descricao = value;
  }

  get preco(): number {
    return this._preco;
  }
  set preco(value: number) {
    this._preco = value;
  }

  get quantidade(): number {
    return this._quantidade;
  }
  set quantidade(value: number) {
    this._quantidade = value;
  }

  abstract exibirDetalhes(): void;
}
