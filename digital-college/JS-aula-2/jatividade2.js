/* let n1 = parseFloat(prompt("digite um valor"))
let n2 = parseFloat(prompt("digite outro valor"))

if (n1>n2) {
    prompt("o primeiro numero digitado é maior")
}
else  {
    prompt("o segundo numero digitado é maior")
} */

   /* let n1 = parseFloat(prompt("digite o valor um "))
    let n2 = parseFloat(prompt("digite o valor dois "))
    let n3 = parseFloat(prompt("digite o valor tres"))

    if (n1+n2 > n3) {
        prompt('as somas dos dois primeiros numeros e maior que o terceiro valor')
    }
    else {
        prompt("o terceiro valor é maior que a soma dos outros dois primeiros numeros")
    } */

        let peso = parseFloat(prompt("digite o seu peso "))
        let altura = parseFloat(prompt("digite a sua altura. OBS: digite em Metros"))

        let imc = peso / altura ** 2

        if (imc > 30) {
            prompt("voce esta obeso")
        }   
        else if (imc > 25) {
            prompt("voce esta acima do peso")
        }
        else if (imc > 18.5) {
            prompt("voce esta com peso normal")
        }
        else {
            prompt("voce esta abaixo do peso")
        }

        prompt("seu imc é "+imc.toFixed(2))