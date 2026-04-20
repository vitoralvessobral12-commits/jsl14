/*let lista = ['nome','idade','cargo','email','senha']
console.log(lista)

lista[4] = '123Mudar'

console.log(lista)*/

/*//crie um sistema de emissão de nota fiscal. 
//o sistema deve receber um array com os nomes dos produtos e outro com os valores desses produtos. 
//Ao iniciar o programa, o usuário deve informar quantos produtos ele deseja cadastrar nessa nota fiscal.
//Você deverá ler o nome e o valor de cada produto  e adiconar ao seu respectivo array.
//DICA: para trabalhar com índices ou métodos, as variáveis devem ser declaradas fora do laço e inicializadas com um array vazio.

//Ao final mostre no console a nota fiscal com os produtos e seus respectivos valores.
//Exemplo: PARA 3 PRODUTOS  
//PRODUTO1 - R$ 10,00
//PRODUTO2 - R$ 15,00
//PRODUTO3 - R$ 20,00*/

/*qtdprodutos = Number(prompt('quantos produtos você quer adicionar na NF? '))

nomesprodutos = []

valoresProdutos = []

for(let i = 0; i < qtdprodutos; i++){
    let nome = prompt('digite o nome do produto' $(i+1))
    let preco = Number(prompt('qual o preço do produto' $(i+1)))

    nomesprodutos[1] = nome
    valoresProdutos.push(preco)

    console.log(nomesprodutos,valoresProdutos)

    console.log('produto ${nomesprodutos[i]} - R$ valor' ${valoresProdutos[i]} )
}*/


/*let alunosnotas = [
    ['joao', 10,9,10],
    ['marcia',8,3,9],
    ['gustavo',5,8,7]
]

for(let i = 0; i < 3; i++){
    let aluno = alunosnotas[i]
    let nota1 = aluno[1]
    let nota2 = aluno[2]
    let nota3 = aluno[3]

    let somanotas = (nota1 + nota2 + nota3) / 3



    console.log(`A média de ${aluno[0]} foi ${somanotas}`)
}*/

let sapatos = ['adidas','nike', [5,6,8,9,13,16,23,26,28,29,30]]

if(sapatos[2].includes(6)){
    console.log('tamanho disponivel')
}
else {
    console.log('tamanho não disponivel')
}