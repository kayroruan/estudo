function gerarNumeroDif(min, max, array) {
    const random = parseInt(Math.random() * (max + 1 - min)) + min
    //crio uma constante que é definida gerando um numero inteiro onde a resposta pode ser o número máximo
    return array.includes(random) ? gerarNumeroDif(min, max, array) : random
    // confere, se o numero está no array, caso esteja, não retorna ele
}

function gerarNumero(i){
    const numeros = Array(i).fill(0).reduce((nums) =>{
        const novoNumero = gerarNumeroDif(1, 60, nums)
        return [...nums, novoNumero]
    }, []).sort((n1, n2) => n1 - n2)
    
    return numeros

    //cria um array novo
    //gerando números de acordo com a função gerarNumeroDiff, para não haver repetição
    //ordena de forma crescente
}