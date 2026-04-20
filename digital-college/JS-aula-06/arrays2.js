let alunos = [
    {
        nome: 'João',
        idade: 20,
        sexo: 'M',
        media : 10
    },
    {
        nome: 'Maria',
        idade: 20,
        sexo: 'F',
        media : 9
    },
    {
        nome: 'Pedro',
        idade: 20,
        sexo: 'M',
        media : 10
    },
    {
        nome: 'Ana',
        idade: 20,
        sexo: 'F',
        media : 10
    },
    {
        nome: 'Joana',
        idade: 20,
        sexo: 'F',
        media : 9
    }
]


for (let i in alunos) {
    if (i == 1 || i == 3) {
        console.log(alunos[i]);
    }
}