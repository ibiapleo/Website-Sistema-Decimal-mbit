document.getElementById('botaoConversao').addEventListener('click', function() {
    const tipoConversao = document.getElementById('selecaoConversao').value;
    const valorEntrada = document.getElementById('valorEntrada').value;
    let valorSaida = '';

    switch (tipoConversao) {
        case 'decimalBinario':
            valorSaida = decimalParaBinario(valorEntrada);
            break;
        case 'decimalHexadecimal':
            valorSaida = decimalParaHexadecimal(valorEntrada);
            break;
        case 'binarioDecimal':
            valorSaida = binarioParaDecimal(valorEntrada);
            break;
        case 'binarioHexadecimal':
            valorSaida = binarioParaHexadecimal(valorEntrada);
            break;
        case 'hexadecimalDecimal':
            valorSaida = hexadecimalParaDecimal(valorEntrada);
            break;
        case 'hexadecimalBinario':
            valorSaida = hexadecimalParaBinario(valorEntrada);
            break;
    }

    document.getElementById('valorSaida').value = valorSaida;   
});

function decimalParaBinario(decimal) {
    return parseInt(decimal, 10).toString(2);
}

function decimalParaHexadecimal(decimal) {
    return parseInt(decimal, 10).toString(16).toUpperCase();
}

function binarioParaDecimal(binario) {
    return parseInt(binario, 2).toString(10);
}

function binarioParaHexadecimal(binario) {
    return parseInt(binario, 2).toString(16).toUpperCase();
}

function hexadecimalParaDecimal(hexadecimal) {
    return parseInt(hexadecimal, 16).toString(10);
}

function hexadecimalParaBinario(hexadecimal) {
    return parseInt(hexadecimal, 16).toString(2);
}
