var cpf = '85593907072';

function isCPF(cpf = 0) {
    cpf = cpf.replace(/\.|-/g, '');

    if (!validarDigitoVerificador1(cpf))
        return false;
    if (!validarDigitoVerificador2(cpf))
        return false;
    return true;
};

function validarDigitoVerificador1(cpf) {
    let soma = 0;
    for (var i = 0; i < cpf.length - 2; i++) {
        soma += cpf[i] * ((cpf.length - 1) - i);
    };

    soma = (soma * 10) % 11;
    if (soma == 10 || soma == 11)
        soma = 0;
    if (soma != cpf[9])
        return false;
    return true;
};

function validarDigitoVerificador2(cpf) {
    let soma = 0;
    for (var i = 0; i < cpf.length - 1; i++) {
        soma += cpf[i] * ((cpf.length) - i);
    };

    soma = (soma * 10) % 11;
    if (soma == 10 || soma == 11)
        soma = 0;
    if (soma != cpf[10])
        return false;
    return true;
};

console.log(validarDigitoVerificador1(cpf));
console.log(validarDigitoVerificador2(cpf));