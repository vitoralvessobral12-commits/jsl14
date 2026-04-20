

/*let n = Number(prompt('digite um numero, OBS; vale apenas numeros positivos'));
divisiveis = n/5
for (let i = n; i >= 0; i--) {
  console.log(i);
}
console.log('quantidade de numeros divisiveis por 5: '+divisiveis)*/

/*c1 =number(prompt('digite a venda do cliente 1: '))
c2 =number(prompt('digite a venda do cliente 2: '))
c3 =number(prompt('digite a venda do cliente 3: '))
c4 =number(prompt('digite a venda do cliente 4: '))
c5 =number(prompt('digite a venda do cliente 5: '))

vendas = c1+c2+c3+c4+c5

if (vendas < 54000) {
    console.log('sua meta não passou a loja B. valor das vendas '+vendas)
}
else (console.log('parabens sua meta passou a da loja B,valor das vendas '+vendas));/



/*Uma loja tem uma política de descontos de acordo com o valor da compra do cliente. Os descontos começam acima dos R$500 A cada 100 reais acima
 dos R$500,00 o cliente ganha 1% de desconto cumulativo até 25%. Por exemplo: R$500 = 1% || R$600,00 = 2% ... etc... 
 Faça um programa que exiba essa tabela de descontos no seguinte formato:
Valordacompra - porcentagem de desconto - valor final*/

/*turma =10
aluno=0
notas = 3

for (let i = turma; i <= 10; i++) {
    console.log(aluno)
    aluno++
    for (let a = notas;a <=3; a++)
       n1= number(prompt('digite a nota 1: ')) 
        n2= number(prompt('digite a nota 2: ')) 
        n3= number(prompt('digite a nota 3: ')) 
        somanotas = n1+n2+n3
        console.log('sua media de notas foi '+somanotas)
}
*/
/*num = number(prompt('digite um numero '))

for(let i = 1; i <= 10; i++){
    console.log(num * i)
}*/
let n = Number(prompt("Digite um número:"));

console.log(`Tabuada do ${n}`);

for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}

