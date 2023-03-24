function conferirNumero(numA, numB) {
    const compara = comparaNumeros(numA, numB);
    const somaEconfere = somaNumeros(numA, numB);

    return `${compara} ${somaEconfere}`
}

function comparaNumeros(numA, numB) {
    let compara = '';
    if (numA !== numB) {
        compara = 'não';
    }

    return `Os números ${numA} e ${numB} ${compara} são iguais.`
}

function somaNumeros(numA, numB) {
    const soma = numA + numB;

    let result10 = 'menor';
    let result20 = 'menor';
    const confere10 = soma > 10;
    const confere20 = soma > 20;

    if (confere10) {
        result10 = 'maior';
    }
    if (confere20) {
        result20 = 'maior';
    }


    return `Sua soma é ${soma}, que é ${result10} que 10 e ${result20} que 20.`
}

console.log(conferirNumero(6,6))