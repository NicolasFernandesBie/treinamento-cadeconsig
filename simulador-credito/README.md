# 💼 Desafio de Treinamento – Simulador de Crédito Consignado

## 🎯 Objetivo

Criar um **programa de simulação de empréstimo consignado** que receba informações do cliente, processe cálculos de juros, parcelas e condições de aprovação, e exiba um **relatório final formatado no console**.

O foco deste desafio é avaliar sua capacidade de:

- Trabalhar com entradas, processamento e saídas de dados;
- Aplicar operadores aritméticos e lógicos;
- Estruturar decisões (`if`, `else`) e repetições (`while`, `for`);
- Organizar o raciocínio e exibir resultados de forma clara.

---

## 🧩 Cenário

Você foi contratado pela **Creditiva Soluções em Crédito** para desenvolver um **simulador básico de crédito consignado**.  
O cliente é um **entrante**, realizando seu **primeiro empréstimo consignado**.

O simulador deve ajudar o cliente a descobrir:

1. Se ele **pode** pegar o empréstimo (com base nas regras);
2. Qual será o **valor total a pagar**;
3. O **valor da parcela mensal**;
4. E gerar um **resumo final da simulação**.

---

## 📥 Entradas (dados fornecidos pelo usuário)

O programa deve solicitar ao usuário:

1. Nome do cliente
2. Número do benefício
3. Idade
4. Salário
5. Valor desejado do empréstimo
6. Quantidade de parcelas desejadas

---

## ⚙️ Processamento (lógica do programa)

### 1. Regras de aprovação

O crédito **só pode ser concedido se todas as condições forem verdadeiras**:

- ✅ O benefício está desbloqueado;
- ✅ Idade entre **18 e 75 anos**;
- ✅ O valor solicitado **não ultrapassa 30 vezes o salário**;
- ✅ O valor da parcela **não ultrapassa 35% do salário líquido**.

---

### 2. Cálculo dos juros

Os juros variam conforme o número de parcelas:

|        Parcelas | Taxa de juros mensal |
| --------------: | :------------------- |
| até 18 parcelas | 1.2% ao mês          |
| até 36 parcelas | 1.5% ao mês          |
| até 48 parcelas | 1.8% ao mês          |
|     acima de 80 | 2.0% ao mês          |

> 💡 **Fórmula de juros compostos:**
>
> ```
> ValorTotal = ValorSolicitado × (1 + taxa) ^ parcelas
> ```

---

### 3. Cálculo da parcela

```
ParcelaMensal = ValorTotal / parcelas
```

---

### 4. Fluxo da simulação

O programa deve seguir os seguintes passos:

1. **Exibir uma explicação breve** sobre o que é o empréstimo consignado:

   > “O empréstimo consignado é uma forma simples e segura de obter crédito, onde as parcelas são descontadas automaticamente do seu salário ou benefício todos os meses. Por isso, os juros são mais baixos e o processo de aprovação costuma ser mais rápido. É uma boa opção para quem precisa de dinheiro com condições mais acessíveis e quer manter o controle do orçamento sem se preocupar com boletos ou atrasos.”

2. **Solicitar os dados do cliente pelo console**

3. **Solicitar autorização do cliente:**

   > “Você autoriza a Creditiva a realizar uma simulação utilizando os seus dados?”

   - Se **sim**, o programa continua.
   - Se **não**, o programa encerra com uma mensagem de agradecimento.

4. **Calcular os valores** com base na taxa e quantidade de parcelas.
5. **Aplicar as regras de aprovação**.
6. **Exibir o resultado personalizado**:
   - ✅ Se aprovado → mostrar resumo completo.
   - ❌ Se reprovado → mostrar os motivos da reprovação.

---

## 📤 Saídas esperadas (no console)

O programa deve exibir:

- Nome do cliente
- Idade
- Salário líquido
- Valor solicitado
- Quantidade de parcelas
- Taxa de juros aplicada
- Valor total a pagar
- Valor da parcela mensal
- Mensagem de **aprovação** ou **reprovação**

> Todos os valores devem estar **formatados**:
>
> - Dinheiro: `R$ 1.000,00`
> - Taxa: `1,20% ao mês`

---

## 🔁 Funcionamento contínuo

Após exibir o resultado, o programa deve perguntar:

> “Deseja realizar outra simulação? (s/n)”

- Se o usuário digitar **s**, o programa reinicia.
- Se digitar **n**, o programa encerra exibindo uma mensagem de despedida.

---

## 🧾 Resultado final

O resultado deve conter um **parágrafo introdutório** seguido de um **resumo formatado**.

### ✅ Caso o empréstimo seja aprovado:

> O empréstimo para o cliente **João Silva** foi **aprovado** após a análise das informações fornecidas. Com base no salário informado e nas condições de parcelamento, o valor solicitado está dentro dos limites permitidos pelas políticas de crédito. A seguir, apresentamos o resumo completo da simulação, incluindo o valor total a ser pago e o valor de cada parcela mensal.

---

### ❌ Caso o empréstimo seja reprovado:

> O empréstimo para o cliente **Maria Oliveira** foi **reprovado** após a análise dos dados informados. O pedido não atende aos critérios mínimos exigidos para aprovação, considerando fatores como renda, idade ou valor solicitado. Confira abaixo o resumo da simulação e os detalhes que levaram à reprovação da proposta.

---

### 🧮 Exemplo de resumo exibido:

```plaintext
===========================================
        RESULTADO DA SIMULAÇÃO
===========================================

Cliente:           João Silva
Idade:             42 anos
Salário líquido:   R$ 3.200,00
Valor solicitado:  R$ 15.000,00
Parcelas:          12x
Taxa de juros:     1,5% ao mês

-------------------------------------------
Empréstimo APROVADO ✅
-------------------------------------------

Valor total a pagar:  R$ 17.931,06
Valor da parcela:     R$ 1.494,25

Situação: Empréstimo aprovado conforme política de crédito.
Obrigado por simular com a Creditiva!
===========================================
```

---

## 🧠 Dicas para o desenvolvimento

- Comece pelo **pseudocódigo** antes de programar.
- Teste os cálculos de juros e parcelas separadamente.
- Valide entradas inválidas (idade negativa, valor zero, etc).
- Use mensagens claras e organize as saídas visualmente.
- Escreva o código limpo e com boas práticas de nomenclatura.

---

## 💬 Dúvidas

Em caso de dúvidas, procure o responsável pelo treinamento ou abra uma **issue** no repositório do desafio.
