import readlinesync from "readline-sync";
import { Controller } from "./src/controller/Controller";
import { ProdutoFisico } from "./src/model/ProdutoFisico";
import { ProdutoDigital } from "./src/model/ProdutoDigital";


      let controller = new Controller();

      let codigo: number, preco: number, quantidade: number, peso: number, tamanhoArquivo: number;
      let descricao: string;

      console.log("\nCriar Produtos\n");

      let pf1 = new ProdutoFisico(controller["codigoAtual"]++, "Notebook Dell", 4500.00, 10, 2.5);
      controller.adicionar(pf1);

      let pf2 = new ProdutoFisico(controller["codigoAtual"]++, "Cadeira Gamer", 1200.00, 5, 15.0);
      controller.adicionar(pf2);

      let pd1 = new ProdutoDigital(controller["codigoAtual"]++, "E-book - JavaScript Essencial", 49.90, 100, 5.2);
      controller.adicionar(pd1);

      let pd2 = new ProdutoDigital(controller["codigoAtual"]++, "Curso Online - TypeScript", 199.90, 200, 1200);
      controller.adicionar(pd2);

      controller.listarProdutos();

      function menu(): void {
        let sair = false;

      while (!sair) {
        console.log("\n============= MENU =============");
        console.log("1. Adicionar Produto");
        console.log("2. Listar Produtos");
        console.log("3. Atualizar Produto");
        console.log("4. Remover Produto");
        console.log("0. Sair");
        console.log("================================\n");
      
        const opcao = readlinesync.question("Escolha uma opcao: ");

          if (opcao == "0") {
          console.log("\n*****************************************************");
          console.log("\n                 Loja de E-commerce ");
          sobre();
          console.log("");
          process.exit(0);
          }

        switch (opcao) {

        case "1":       
          try {
            console.log("\nEscolha o tipo de produto:");
            console.log("1 - Produto Físico");
            console.log("2 - Produto Digital");
            const tipo = readlinesync.question("\nOpcao: ");

            if (tipo !== "1" && tipo !== "2") {
            console.log("\nTipo de produto inválido.");
             break; // sai do case sem continuar
            }

            descricao = readlinesync.question("\nDescrição: ");
            preco = readlinesync.questionFloat("Preço: ");
            quantidade = readlinesync.questionInt("Quantidade: ");



          switch (tipo) {
            case "1":
              peso = readlinesync.questionFloat("Peso (kg): ");
              controller.adicionarFisico(descricao, preco, quantidade, peso);
              console.log("\nProduto físico adicionado com sucesso!");
              break;

            case "2":
              tamanhoArquivo = readlinesync.questionFloat("Tamanho do Arquivo (MB): ");
              controller.adicionarDigital(descricao, preco, quantidade, tamanhoArquivo);
              console.log("\nProduto digital adicionado com sucesso!");
              break;

            default:
              console.log("\nTipo de produto inválido.");
              break;
          }

          } catch (error) {
            if (error instanceof Error) {
              console.log("Erro: " + error.message);
            } else {
              console.log("Erro desconhecido.");
            }
          }
          break;

        case "2":
          const produtos = controller.listarTodos();
          if (produtos.length === 0) {
          console.log("\nNenhum produto cadastrado no momento.");
          } else {
          controller.listarProdutos();
          }
          break;

            case "3":       
              try {
                codigo = readlinesync.questionInt("\nCódigo do produto para atualizar: ");
                const produto = controller.buscarPorCodigo(codigo);
                if (!produto) {
                  console.log("\nProduto não encontrado.");
                  break;
                }

                descricao = readlinesync.question("Nova descrição: ");
                preco = readlinesync.questionFloat("Novo preço: ");
                quantidade = readlinesync.questionInt("Nova quantidade: ");

                produto.descricao = descricao;
                produto.preco = preco;
                produto.quantidade = quantidade;

                if (produto instanceof ProdutoFisico) {
                  peso = readlinesync.questionFloat("Novo peso (kg): ");
                  produto.peso = peso;
                } else if (produto instanceof ProdutoDigital) {
                  tamanhoArquivo = readlinesync.questionFloat("Novo tamanho do arquivo (MB): ");
                  produto.tamanhoArquivo = tamanhoArquivo;
                } else {
                  console.log("\nTipo de produto inválido.");
                  break;
                }

                  controller.atualizar(produto);
                  console.log("\nProduto atualizado com sucesso!");

                } catch (error) {
                  if (error instanceof Error) {
                    console.log("Erro: " + error.message);
                  } else {
                    console.log("Erro desconhecido.");
                  }
                }
                break;

              case "4":
            try {       
              codigo = readlinesync.questionInt("\nCódigo do produto para remover: ");
              controller.remover(codigo);
              console.log("\nProduto removido com sucesso!");
                    } catch (error) {
                      if (error instanceof Error) {       
                console.log("Erro: " + error.message);
              } else {
                console.log("Erro desconhecido.");
              }
            }
            break;

              case "5":
                try {
                  codigo = readlinesync.questionInt("\nCódigo do produto para buscar: ");
                  const produto = controller.buscarPorCodigo(codigo);
                  if (produto) {
                    produto.exibirDetalhes();
                  } else {
                    console.log("\nProduto não encontrado.");
                  }
                } catch (error) {
                  if (error instanceof Error) {
                    console.log("\nErro: " + error.message);
                  } else {
                    console.log("Erro desconhecido.");
                  }
                }
                break;

              case "0":
                sair = true;
                console.log("\nSaindo...");
                break;

              default:
                console.log("\nOpção inválida!");
                break;
}

    function sobre(): void {
    console.log("\n*****************************************************");
    console.log("  Projeto Desenvolvido por: Eduardo Garcia.");
    console.log("  Generation Brasil - eduardoj@generation.org");
    console.log("  github.com/oligEdu/Conta_Bancaria.ts");
    console.log("*****************************************************");
      }
    }
  }

menu();
