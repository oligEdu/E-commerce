import readlineSync from "readline-sync";
import { Controller } from "./src/controller/Controller";
import { ProdutoFisico } from "./src/model/ProdutoFisico";
import { ProdutoDigital } from "./src/model/ProdutoDigital";


const controller = new Controller();

function menu(): void {
  let sair = false;

  while (!sair) {
    console.log("\n============= MENU =============");
    console.log("1. Adicionar Produto Físico");
    console.log("2. Adicionar Produto Digital");
    console.log("3. Listar Produtos");
    console.log("0. Sair");
    console.log("==================================\n");

    const opcao = readlineSync.question("Escolha uma opcao: ");

            if (opcao == "0") {
            console.log("                 \nLoja de E-commerce ");
            sobre();
            console.log("");
            process.exit(0);
            }

    switch (opcao) {

      case "1":
        try {
          const desc = readlineSync.question("\nDescricao: ");
          const preco = parseFloat(readlineSync.question("Preco: "));
          const quant = parseInt(readlineSync.question("Quantidade: "));
          const peso = parseFloat(readlineSync.question("Peso (kg): "));
          controller.adicionarFisico(desc, preco, quant, peso);
          console.log("\nProduto físico adicionado com sucesso!");

        } catch (error) {
          if (error instanceof Error) {
            if (error instanceof Error) {
            console.log("Erro: " + error.message);
            } else {
            console.log("Erro desconhecido.");
            }
          }
        }

        break;

      case "2":
        try {
          const desc = readlineSync.question("\nDescricao: ");
          const preco = parseFloat(readlineSync.question("Preco: "));
          const quant = parseInt(readlineSync.question("Quantidade: "));
          const tamanho = parseFloat(readlineSync.question("Tamanho do Arquivo (MB): "));
          controller.adicionarDigital(desc, preco, quant, tamanho);
          console.log("\nProduto digital adicionado com sucesso!");

        } catch (error) {
          if (error instanceof Error) {
            console.log("Erro: " + error.message);
        } else {
            console.log("Erro desconhecido.");
        }
     }

        break;

    case "3":
        controller.listarProdutos();
        break;
         
    case "0":
        sair = true;
        console.log("Saindo...");
        break;
  }

    function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Eduardo Garcia.");
    console.log("Generation Brasil - eduardoj@generation.org");
    console.log("github.com/oligEdu/Conta_Bancaria.ts");
    console.log("*****************************************************");
        }
    }
  }

menu();
