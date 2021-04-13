/* Exercícios de interpretação de código */

/* Exercicio 01: Leia o código, indique todas as mensagens impressas no console, SEM EXECUTAR o programa. */

//a false
//b false
//c true
//e boolean

/* Exercicio 02: Indique todas as mensagens no console, SEM EXECUTAR o programa. */

// a.  undefined
// b.  null
// c.  11
// d.  3
// e.  [3, 4, 5, 19, 7, 8, 9, 10, 11, 12, 13]
// f.  8

/* Exercícios de escrita de código */

/* Exercício 1. Faça um programa que:
a. Pergunte a idade do usuário
b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga

Dica: não se esqueça de converter as respostas para o tipo número

c. **Imprima na tela** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`). Para isso, use a variável criada no item (b) para definir qual será a resposta.
d. **Imprima na tela** a diferença de idade (não tem problema se sair um número negativo) */


const idadeUsuario = Number(prompt('Olá, qual a sua idade ?'))
const idadeMelhorAmiga = Number(prompt('Qual a idade do seu melhor amigo?'))
console.log(idadeUsuario > idadeMelhorAmiga)
console.log("A Diferença de idade é", idadeUsuario - idadeMelhorAmiga)

/*Exercício 2. Faça um programa que:
a. Peça ao usuário que insira um número par.
b. Imprima na tela o resto da divisão desse número por 2
c. Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
d. O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código */

let numeroPar = Number (prompt ('Insira um número par'))
let resposta = (numeroPar % 2)
console.log(" ao dividir esse número por 2 o resto é igual a", resposta)

// c. A resposta para divisão de numeros pares é sempre 0
// d. a resposta para divisão com numeros impares é sempre 1


/* Exercicio 03 - Faça um programa, seguindo os passos:
a. Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
c. Imprima o array na tela
d. Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
e. Remova da lista o item de índice que o usuário escolheu.
f. Imprima o array na tela */

let listaDeTarefas= []
listaDeTarefas.push(prompt('Informe 3 tarefas que prcisam ser realizadas hoje.\nPrimeira tarefa:'))
listaDeTarefas.push(prompt('Digite uma tarefa a ser feita'))
listaDeTarefas.push(prompt('Digite uma tarefa a ser feita'))
console.log(listaDeTarefas)
const tarefaRealizada = Number(prompt('Qual tarefa você ja realizou? 0, 1, 2'))
listaDeTarefas.splice(tarefaRealizada, 1)
console.log(listaDeTarefas)



/* Exercicio 04 - Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario! */

let nomeUsuario = prompt("Por favor, digite seu nome: ");
let emailUsuario = prompt("agora dite seu e-mail: ");
console.log("O e-mail " + emailUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeUsuario + "!");
