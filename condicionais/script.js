/* Exercicios de interpretação */

/* Exercício 01 - Leia o código abaixo e explique o que ele faz: */

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//o Codigo obtem o valor respostaDoUsuario no prompt, converte o valor em variavel númerica e salva, 
//então verifica após uma divisão por 2 e adicionado ao resto, se é par ou impar.
//se for for para imprime "passou no teste" e se for impar "não passou no teste"


/* Exercício 02 - Leia o código abaixo e responda: */

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/* a. Para que serve o código acima?
b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
c.Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?*/

//a. O código armazena o preço da fruta e informa ao usúario após escolha
//b. imprime o preço da frura, no caso da maçã o preço impresso é 2.25
//c. é impressa a msg "O preço da fruta  pêra  é  R$  5"


/* Exercício 03 - Leia o código abaixo e responda: */
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

/* a. O que a primeira linha está fazendo?
b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. */

//a.Está pedindo ao usuário para inserir o primeiro número, então guarda esse valor em uma constante chamada "número"
//b.Digintando 10 o retorno é "esse número passou no teste" com erro de variável não declarada/ se for -10 o retorno é apenas do erro "erro de referência não capturado: a mensagem não está definida"
//c.Haverá erro de variável não declarada, porque a variável é declarada no bloco if e chamada fora do escopo do bloco. 

/* Exercício 04 -  Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade). */

let idadeUsuario = Number(prompt("Digite a sua idade: "));

if (idadeUsuario >= 18) {
    console.log("Você pode dirigir");
} 
else {
    console.log("Você não pode dirigir");
}

/* Exercício 05 - faça um programa que verifica que turno do dia um aluno estuda */

let turnoUsuario = prompt("Em qual turno você estuda? Digite M para matutino V para vespertino e N para noturno")
if (turnoUsuario === "M"){
    console.log("Bom dia!")
} else if (turnoUsuario === "V"){
    console.log("Boa tarde!")
} else if (turnoUsuario === "N"){
    console.log("Boa noite!")
} else{
    console.log("Resposta invalida, tente novamente")
}


/* Exercício 06 - faça um programa que verifica que turno do dia um aluno estuda */

let turnoEstudo = prompt(" Qual turno do dia você estuda? \nDigitar M (matutino) ou V (Vespertino) ou N (Noturno)")
switch (turnoEstudo) {
    case "M":
        console.log("Bom Dia!") 
    break
    case "V":
        console.log("Boa Tarde!")
    break
    case "N":
        console.log("Boa Noite!") 
    break
    default:
        console.log("Resposta invalida, tente novamente") 
    break
}

/* Resposta 7 Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir */ 

let generoFilme = prompt("Qual o gênero do filme que vão assistir?")
let ingressoValor = Number (prompt("Qual o preço do ingresso? R$"))

if(generoFilme === "fantasia" && ingressoValor <= 15 ) { 
      console.log("Bom filme!") 
    }
    else { 
    console.log("Escolha outro filme") 
    }



