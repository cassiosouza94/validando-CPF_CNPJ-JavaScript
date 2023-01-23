var cpf = '913.843.570-50';

function isCPF(cpf = 0) {
    cpf = cpf.replace(/\.|-/g, '');
    if (!validarNumeroDigitoVerificador1(cpf))
        return false;
    if (!validarNumeroDigitoVerificador2(cpf))
        return false;
    return true;
};

var soma = 0;

function validarNumeroDigitoVerificador1(cpf = null) {
    let digitoVerificador1 = (somavalidarNumeroDigitoVerificador1(cpf) * 10) % 11;
    digitoVerificador1 = (digitoVerificador1 == 10 || digitoVerificador1 == 11) ? 0 : digitoVerificador1;
    if (digitoVerificador1 != cpf[9])
        return false;
    return true;
};

somavalidarNumeroDigitoVerificador1 = function (cpf, posicao = 0, soma = 0) {
    if (posicao > 9)
        return 0;
    return soma + somavalidarNumeroDigitoVerificador1(cpf, posicao + 1, cpf[posicao] * ((cpf.length - 1) - posicao));
};

function validarNumeroDigitoVerificador2(cpf = null) {
    let digitoVerificador2 = (somavalidarNumeroDigitoVerificador2(cpf) * 10) % 11;
    digitoVerificador2 = (digitoVerificador2 == 10 || digitoVerificador2 == 11) ? 0 : digitoVerificador2;
    if (digitoVerificador2 != cpf[10])
        return false;
    return true;
};

somavalidarNumeroDigitoVerificador2 = function (cpf, posicao = 0, soma = 0) {
    if (posicao > 10)
        return 0;
    return soma + somavalidarNumeroDigitoVerificador2(cpf, posicao + 1, cpf[posicao] * ((cpf.length) - posicao));
};

console.log(isCPF(cpf));