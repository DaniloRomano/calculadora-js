var Calculadora = {
    adicionar: (num1, num2) => {
        if (isNaN(num1) || isNaN(num2)) return 0;
        return parseFloat(num1) + parseFloat(num2);
    },
    subtrair: (num1, num2) => {
        return 0;
    },
    multiplicar: (num1, num2) => {
        return 0;
    },
    dividir: (num1, num2) => {
        return 0;
    }
};

if (typeof module !== "undefined" && typeof module.exports !== 'undefined') {
    module.exports = Calculadora;
}