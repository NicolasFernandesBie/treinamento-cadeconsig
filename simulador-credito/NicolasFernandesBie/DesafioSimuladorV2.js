
const prompt = require("prompt-sync")();
console.log(`

=========================================== SIMULADOR CREDITIVA ===========================================

O empréstimo consignado é uma forma simples e segura de obter crédito,
onde as parcelas são descontadas automaticamente do seu salário ou benefício todos os meses. Por isso,
os juros são mais baixos e o processo de aprovação costuma ser mais rápido.
É uma boa opção para quem precisa de dinheiro com condições mais acessíveis e
quer manter o controle do orçamento sem se preocupar com boletos ou atrasos.
`)



function validaBeneficio(beneficio) {
    if (beneficio === 1) {
        return { valido: true }
    } else {
        return {
            valido: false,
            motivo: 'É necessário desbloquear o benefício para prosseguir. Você pode entrar em contato com o nosso suporte via (xx)x xxxx-xxxx.'
        }
    }
}
function validaIdade(idade) {
    const idadeMinima = 18
    const idadeMaxima = 75
    if (idade >= idadeMinima && idade <= idadeMaxima) {
        return { valido: true }
    } else {
        return {
            valido: false,
            motivo: 'A idade não atende os requisitos de ser superior a 18 anos e inferior a 75 anos.'
        }
    }
}

function validarValorEmprestimo(valor, salario) {
    if (valor <= salario * 30) {
        return { valido: true }
    } else {
        return {
            valido: false,
            motivo: 'O valor do empréstimo excede 30 vezes o seu salário líquido.'
        }
    }
}

function validarParcela(parcelaMensal, salario) {
    const limite = salario * 0.35
    if (parcelaMensal <= limite) {
        return { valido: true }
    } else {
        return {
            valido: false,
            motivo: 'O valor da parcela mensal ultrapassa 35% do salário líquido.'
        }
    }
}

function definirTaxa(parcelas) {
    if (parcelas <= 18) return 0.012
    if (parcelas <= 36) return 0.015
    if (parcelas <= 48) return 0.018
    return 0.02
}

function simulaEmprestimo() {
    const nomeCliente = prompt('Digite o seu nome completo: ')
    const beneficio = Number(prompt('Benefício desbloqueado? Digite 1 para sim e 2 para não: '))
    const numeroBeneficio = Number(prompt('Digite o numero do seu beneficio: '))
    const idade = Number(prompt('Digite a sua idade: '))
    const salario = Number(prompt('Digite o seu salário líquido atual: '))
    const valorEmprestimo = Number(prompt('Digite o valor do empréstimo que deseja adquirir: '))
    const parcelas = Number(prompt('Digite o número de parcelas que deseja: '))

    const taxa = definirTaxa(parcelas)
    const valorTotal = valorEmprestimo * (1 + taxa) ** parcelas
    const parcelaMensal = valorTotal / parcelas

    let motivosReprovacao = []

    if (!validaBeneficio(beneficio).valido) motivosReprovacao.push(validaBeneficio(beneficio).motivo)
    if (!validaIdade(idade).valido) motivosReprovacao.push(validaIdade(idade).motivo)
    if (!validarValorEmprestimo(valorEmprestimo, salario).valido) motivosReprovacao.push(validarValorEmprestimo(valorEmprestimo, salario).motivo)
    if (!validarParcela(parcelaMensal, salario).valido) motivosReprovacao.push(validarParcela(parcelaMensal, salario).motivo)
    if (parcelas > 80) motivosReprovacao.push('O número de parcelas ultrapassa o limite permitido (80).')

    if (motivosReprovacao.length > 0) {
        console.log(`
O empréstimo para o cliente ${nomeCliente} foi reprovado após a análise dos dados informados.
O pedido não atende aos critérios mínimos exigidos para aprovação.
Confira abaixo os detalhes que levaram à reprovação da proposta:
`)
        motivosReprovacao.forEach(m => console.log('- ' + m))
    } else {
        console.log(`
O empréstimo para o cliente ${nomeCliente} foi aprovado após a análise das informações fornecidas. Com base no salário informado e nas condições de parcelamento, o valor solicitado está dentro dos limites permitidos pelas políticas de crédito. A seguir, apresentamos o resumo completo da simulação, incluindo o valor total a ser pago e o valor de cada parcela mensal.
`)

        console.log(`
=========================================== RESULTADO DA SIMULAÇÃO ===========================================
Cliente: ${nomeCliente}
Beneficio: ${numeroBeneficio}
Idade: ${idade} anos
Salário líquido: R$${salario.toFixed(2)}
Valor solicitado: R$${valorEmprestimo.toFixed(2)}
Parcelas: ${parcelas}x
Taxa de juros: ${(taxa * 100).toFixed(1)}% ao mês
-------------------------------------------
Empréstimo APROVADO ✅
-------------------------------------------
Valor total a pagar: R$${valorTotal.toFixed(2)}
Valor da parcela: R$${parcelaMensal.toFixed(2)}
Situação: Empréstimo aprovado conforme política de crédito.
Obrigado por simular com a Creditiva!
==============================================================================================================
`)
    }
}

while (true) {
    simulaEmprestimo()
    const repetir = prompt('Deseja realizar outra simulação? (s/n): ').toLowerCase()
    if (repetir !== 's') {
        console.log('Obrigado por usar o simulador da Creditiva!')
        break
    }
}

















