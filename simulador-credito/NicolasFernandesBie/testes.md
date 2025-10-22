## Testes

- Valida Beneficio desbloqueado

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

- valida idade entre 18 e 75

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

- valida se o valor solicitado nao ultrapasssa 30 vezes o salario liquido

function validarValorEmprestimo(valor, salario) {
if (valor <= salario \* 30) {
return { valido: true }
} else {
return {
valido: false,
motivo: 'O valor do empréstimo excede 30 vezes o seu salário líquido.'
}
}
}

- valida se o valor da parcela nao ultrapassa 35% do salario liquido

function validarParcela(parcelaMensal, salario) {
const limite = salario \* 0.35
if (parcelaMensal <= limite) {
return { valido: true }
} else {
return {
valido: false,
motivo: 'O valor da parcela mensal ultrapassa 35% do salário líquido.'
}
}
}

- Definir taxa das parcelas

function definirTaxa(parcelas) {
if (parcelas <= 18) return 0.012
if (parcelas <= 36) return 0.015
if (parcelas <= 48) return 0.018
return 0.02
}
