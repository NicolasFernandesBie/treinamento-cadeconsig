
const prompt = require("prompt-sync")();
console.log(`
O empréstimo consignado é uma forma simples e segura de obter crédito,
onde as parcelas são descontadas automaticamente do seu salário ou benefício todos os meses. Por isso,
os juros são mais baixos e o processo de aprovação costuma ser mais rápido.
É uma boa opção para quem precisa de dinheiro com condições mais acessíveis e
quer manter o controle do orçamento sem se preocupar com boletos ou atrasos.
`)

nomeCliente = prompt("Olá, digite o seu nome completo por gentileza: ");

function validaBenefício() {
    let valida = 0
    while (valida != 1) {
        valida = prompt("Voce possui beneficio desbloqueado? Digite 1 para sim e 2 para não ")
        if (valida === 1) {
            console.log("É necessário desbloquear o benefício para prosseguir,Você pode entrar em contato com o nosso suporte via (xx)x xxxx-xxxx para que possamos auxiliar no desbloqueio.")
        }
    }
    return true
}
function simulaEmprestimo() {
    validaBenefício()
    let numeroBeneficio = Number(
        prompt(
            "Caso já tenha o benefício desbloqueado, digite apenas os números por gentileza: "
        )
    );
    let idade = Number(prompt("Digite a sua idade: "));
    let salario = Number(prompt("Digite o seu salário líquido atual: "));
    let valorEmprestimo = Number(
        prompt("Digite o valor do empréstimo que deseja adquirir: ")
    );
    let parcelas = Number(prompt("Digite o número de parcelas que deseja: "));

    let valorTotal = 0;
    let parcelaMensal = 0;
    let taxa = "";
    let motivosReprovação = [];
    let taxaSimulada = 0.015;
    let valorSimulado = valorEmprestimo * (1 + taxaSimulada) ** parcelas;
    let parcelaMensalEstimativa = valorSimulado / parcelas;

    const textoAprovacao = ` 
        
O empréstimo para o cliente ${nomeCliente} foi aprovado após a análise das informações fornecidas. Com base no salário informado e nas condições de parcelamento, o valor solicitado está dentro dos limites permitidos pelas políticas de crédito. A seguir, apresentamos o resumo completo da simulação, incluindo o valor total a ser pago e o valor de cada parcela mensal.

`
    const textoReprovacao = `

O empréstimo para o cliente ${nomeCliente} foi reprovado após a análise dos dados informados.
O pedido não atende aos critérios mínimos exigidos para aprovação,
considerando fatores como renda, idade ou valor solicitado.
Confira abaixo o resumo da simulação e os detalhes que levaram à reprovação da proposta:

`

    if (
        idade >= 18 &&
        idade <= 75 &&
        valorEmprestimo < salario * 30 &&
        parcelaMensalEstimativa < salario * 0.35 &&
        parcelas <= 18
    ) {
        taxa = "1,2% ao mês";
        valorTotal = valorEmprestimo * (1 + 0.012) ** parcelas;
        parcelaMensal = valorTotal / parcelas;

        console.log(textoAprovacao);
    } else if (
        idade >= 18 &&
        idade <= 75 &&
        valorEmprestimo < salario * 30 &&
        parcelaMensalEstimativa < salario * 0.35 &&
        parcelas <= 36
    ) {
        taxa = "1,5% ao mês";
        valorTotal = valorEmprestimo * (1 + 0.015) ** parcelas;
        parcelaMensal = valorTotal / parcelas;

        console.log(textoAprovacao);
    } else if (
        idade >= 18 &&
        idade <= 75 &&
        valorEmprestimo < salario * 30 &&
        parcelaMensalEstimativa < salario * 0.35 &&
        parcelas <= 48
    ) {
        taxa = "1,8% ao mês";
        valorTotal = valorEmprestimo * (1 + 0.018) ** parcelas;
        parcelaMensal = valorTotal / parcelas;

        console.log(textoAprovacao);
    } else if (
        idade >= 18 &&
        idade <= 75 &&
        valorEmprestimo < salario * 30 &&
        parcelaMensalEstimativa < salario * 0.35 &&
        parcelas <= 80
    ) {
        taxa = "2,0% ao mês";
        valorTotal = valorEmprestimo * (1 + 0.02) ** parcelas;
        parcelaMensal = valorTotal / parcelas;

        console.log(textoAprovacao);
    } else {
        console.log(textoReprovacao);

        if (idade < 18 || idade > 75) {
            motivosReprovação.push("Idade inapropriada para operação.");
        }
        if (valorEmprestimo > salario * 30) {
            motivosReprovação.push(
                "Valor do empréstimo ultrapassa 30x o valor do salário."
            );
        }
        if (parcelaMensalEstimativa > salario * 0.35) {
            motivosReprovação.push("Valor da parcela ultrapassa 35% do salário.");
        }
        if (parcelas > 80) {
            motivosReprovação.push(
                "Número de parcelas ultrapassa o limite permitido (80)."
            );
        }

        console.log("Motivos da reprovação:");
        console.log(motivosReprovação.join("\n"));
    }

    if (valorTotal > 0) {
        valorTotal = valorTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
        parcelaMensal = parcelaMensal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
        salario = salario.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
        valorEmprestimo = valorEmprestimo.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });

        const resumoEmprestimo = `
=========================================== RESULTADO DA SIMULAÇÃO ===========================================
Cliente: ${nomeCliente}
Idade: ${idade} anos
Salário líquido: ${salario}
Valor solicitado: ${valorEmprestimo}
Parcelas: ${parcelas}x
Taxa de juros: ${taxa}
-------------------------------------------S
Empréstimo APROVADO ✅
-------------------------------------------
Valor total a pagar: ${valorTotal}
Valor da parcela: ${parcelaMensal}
Situação: Empréstimo aprovado conforme política de crédito.
Obrigado por simular com a Creditiva!
==============================================================================================================
`

        console.log(resumoEmprestimo);
    }
}
while (true) {
    validaBenefício()
    simulaEmprestimo()

    const repetir = prompt("Deseja realizar outra simulação? (s/n): ").toLowerCase()
    if (repetir !== "s") {
        console.log("Obrigado por usar o simulador da Creditiva!")
        break
    }
}


















