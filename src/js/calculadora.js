var Calculadora = {
    adicionar: (num1, num2) => {
        if (isNaN(num1) || isNaN(num2)) return 0;
        return parseFloat(num1) + parseFloat(num2);
    },
    subtrair: (num1, num2) => {
        var result = 0;
        if (isNaN(num1) || isNaN(num2)) return 0;
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        result = num1 - num2;
        return result;
    },
    multiplicar: (num1, num2) => {
        let resultado = 0;
        if (isNaN(num1) || isNaN(num2)) return 0;
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        resultado = num1 * num2;
        return resultado;
    },
    dividir: (num1, num2) => {
        let resultado = 0;
        if (isNaN(num1) || isNaN(num2)) return 0;
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        if (num2 === 0) return 'Erro';
        resultado = num1 / num2;
        return resultado;
    }
};

if (typeof module !== "undefined" && typeof module.exports !== 'undefined') {
    module.exports = Calculadora;
}
