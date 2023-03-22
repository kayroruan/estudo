function calcularIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 20
}

const pessoa2 = {
    nome: "Pedro",
    idade: 26
}

const gato = {
    nome: "Nana",
    idade: 7
}

//Utilizando metodo call com this
console.log(calcularIdade.call(pessoa2, 20));
console.log(calcularIdade.call(pessoa1, 15));
console.log(calcularIdade.call(gato, 5));

console.log("Confere")

//Utilizando metodo apply com this
console.log(calcularIdade.apply(pessoa2, [20]));
console.log(calcularIdade.apply(pessoa1, [15]));
console.log(calcularIdade.apply(gato, [5]));