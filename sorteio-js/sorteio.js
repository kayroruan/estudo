function gerarNumeroDif(min, max, array) {
    const random = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(random) ? gerarNumeroDif(min, max, array) : random
}

function gerarNumero(i){
    const numeros = Array(i).fill(0).reduce((nums) =>{
        const novoNumero = gerarNumeroDif(1, 60, nums)
        return [...nums, novoNumero]
    }, []).sort((n1, n2) => n1 - n2)

    return numeros
}

console.log(gerarNumero(7))