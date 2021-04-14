/* Exercícios de interpretação de código */

/* Exercicio 1 */
//a = 10
//b = 10 e 5

/* Exercicio 2 */
//a = 10
//b = 20
//c = a
//b = c
//a = b


/* Exercícios de escrita de código */

/* Exercicio 1 */
let nomeUsuario
let idadeUsuario
console.log(typeof nomeUsuario)
console.log(typeof idadeUsuario)

nomeUsuario = prompt ("Olá, qual seu nome?")
idadeUsuario = prompt ("por favor, informe sua Idade")

console.log(typeof nomeUsuario) 
console.log(typeof idadeUsuario) 
console.log("Olá", nomeUsuario, ",  você tem", idadeUsuario," anos")


/* Exercicio 2 */

let banda = prompt("1. Qual é a sua Banda favorita?");
let festival = prompt("2. Qual é o seu festival favorito?");
let filme = prompt("2. Qual é o seu filme favorito?");
let serie = prompt("4. Qual é a sua série favorita?");
let comida = prompt("4. Qual é a sua comida favorita?");

console.log( banda, festival, filme, serie, comida)

/* Exercicio 3 */

let comidasFavoritas = ["Pizza", "Churrasco", "Pasta", "Hamburger", "Coxinha"];
console.log(comidasFavoritas);
console.log("Estas são as minhas comidas favoritas: \n", comidas[0], "\n", comidas[1], "\n", comidas[2], "\n", comidas[3], "\n", comidas[4], "\n");
comidasFavoritas[1] = prompt("Me diga uma comida favoríta:")
console.log(comidasFavoritas)
console.log("Estas são as nossas comidas favoritas: \n", comidas[0], "\n", comidas[1], "\n", comidas[2], "\n", comidas[3], "\n", comidas[4], "\n");

/* Exercicio 4 */

let perguntas = ["Você está entregando atividades em atraso?","Você trabalhou hoje?", "Você levou seu cachorro para passear?"]
let respostas = [true,true,false]
console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])