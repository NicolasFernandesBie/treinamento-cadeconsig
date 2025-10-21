# README – Usando `prompt-sync` para receber inputs no Node.js

## O que é `prompt-sync`?

`prompt-sync` é um pacote para **Node.js** que permite ler entradas do usuário diretamente no terminal, de forma **síncrona**. Ele é útil para exercícios, quizzes ou programas que precisam de interação com o usuário sem precisar de navegador.

Ao contrário de `window.prompt` ou `alert`, que só funcionam no **navegador**, `prompt-sync` funciona no **terminal**, como o do **VS Code**.

---

## Pré-requisitos

Para usar `prompt-sync`, você precisa ter:

1. **Node.js instalado**  
   Verifique a instalação no terminal:
   ```bash
   node -v
   npm -v
   npm init -y
   npm install prompt-sync
   ```

## Exemplo de uso

const prompt = require('prompt-sync')(); // importa o prompt-sync

// Perguntas ao usuário
const nome = prompt('Digite seu nome: ');
const sobrenome = prompt('Digite seu sobrenome: ');
const idade = prompt('Digite sua idade: ');

// Resultado
console.log(`Olá, ${nome} ${sobrenome}, você tem ${idade} anos.`);
