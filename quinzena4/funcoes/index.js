/*Exercícios de Interpretação */

//EXERCÍCIO 1
//a) Imprime 10 na primeira linha e 50 na segunda linha.
//b)daria erro pois está sem o  console.log 

//EXERCÍCIO 2
// a) Vai impimir Darvas e  Caio
// b) Vai imprimir Amanda e  Caio

//EXERCÍCIO 3
// percorre o aray verifica se é par e multiplica eles ao quadrado.

//EXERCÍCIO 4
// a)
function sobreUsuario() {
    let nome = 'Japhia'
    let idade = '33'
    let cidade = 'São Paulo'
    let estudante = 'Estudante'

    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante}.`)
}
sobreUsuario()

// b)
function sobreUsuarioComParametros(nome, idade, cidade, estudante) {
    if (estudante) {
        estudante = 'sou estudante'
    }else {
        estudante = 'não sou estudante'
    }

    return String(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante}.`)
}
sobreUsuarioComParametros("Japhia", 33, "São Paulo", true)

//EXERCÍCIO 5
//  a)
function resultado(valor1, valor2) {
    const soma = valor1 + valor2
    console.log("O total da some é:", soma)

    return soma
}

resultado(33, 27)

// b)
function resultado(valor1, valor2) {
    return valor1 >= valor2
}

resultado()

const trueOrFalse = resultado(3, 5)

console.log(trueOrFalse)

// c)
function receberMensagem(mensagemPrintadaDezVezes) {
    let mensagem = ("Printando isso 10x")
    for (let i = 0; i < 10; i++) {
        console.log(mensagem)
    }
}

receberMensagem()

//EXERCÍCIO 6

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//  a)
function arrayLength() {
    console.log(array.length)
}

arrayLength()

//  b)
function numeroPar(numero){
    if (Number(numero) % 2 === 0){
        return true;
    }else {
        return false;
    }
}
console.log(`b. O número é par? ${numeroPar(23)}`);

//  c)
function arrayNumerosPares(arrayNumeros){
    let contadorDePares = 0;
    for (number of array) {
        if (number % 2 === 0) {
            contadorDePares++;
        }
    }

    return contadorDePares;
}

console.log(`c. Quantidades de pares: ${arrayNumerosPares(arrayNumeros)}`);

//  d)
function contarNumerosPares(arrayNumeros){
    let contadorDePares = 0;
    for (number of array) {
        if (ehPar(number) === true) {
            contadorDePares++;
        }
    }

    return contadorDePares;
}
console.log(`d. Quantidades de pares: ${contarNumerosPares(arrayNumeros)}`);