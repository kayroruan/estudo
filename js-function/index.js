//Array de alunos contendo seus respectivos nomes e notas
const alunos = [
    {
        nome: "Pedro",
        nota: 6
    },
    {
        nome: "João",
        nota: 5
    },
    {
        nome: "Maria",
        nota: 9
    },
    {
        nome: "Lucas",
        nota: 3
    }
]

//Função que retorna um array de aprovados com base nos parametros de "media"
function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i];

        if (nota >= media) {
            aprovados.push(nome)
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));