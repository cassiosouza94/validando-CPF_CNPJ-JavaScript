var cnpj = "74.701.804/0001-54";

function validarCNPJ(cnpj) {
    let numeros = cnpj.split("-")[0].replace(/[.|\/]/g, "");
    let digitos = cnpj.split("-")[1];
    if (getDigitoVerificador1(numeros) != digitos[0])
        return "CNPJ(" + cnpj + ") 1º Digíto verificador do CNPJ informado inválido. ❌";
    if (getDigitoVerificador2(numeros + "" + digitos[0]) != digitos[1])
        return "CNPJ(" + cnpj + ") 2º Digíto verificador do CNPJ informado inválido. ❌";
    return "CNPJ(" + cnpj + ") Válido ✅";
};

function getDigitoVerificador1(numeros) {
    let peso = 2;
    let resultado = 0;
    for (let i = numeros.length - 1; i >= 0; i--) {
        resultado += numeros[i] * peso;
        peso = (peso == 9 ? 2 : peso + 1);
    };

    modulo = resultado % 11;
    resultado = (modulo < 2 ? 0 : 11 - modulo);
    return resultado;
};

function getDigitoVerificador2(numeros) {
    let peso = 2;
    let resultado = 0;
    for (let i = numeros.length - 1; i >= 0; i--) {
        resultado += numeros[i] * peso;
        peso = (peso == 9 ? 2 : peso + 1);
    };

    modulo = resultado % 11;
    resultado = (modulo < 2 ? 0 : 11 - modulo);
    return resultado;
};

console.log(validarCNPJ(cnpj));