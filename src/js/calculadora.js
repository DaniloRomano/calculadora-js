var Calculadora = {
        ADICAO: '+',
        SUBTRACAO: '-',
        DIVISAO: '/',
        MULTIPLICACAO: '*',
        calcular: (num1, num2, operacao) => {
            if (isNaN(num1) || isNaN(num2)) return 0;
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            switch (operacao) {
                case Calculadora.ADICAO:
                    return Calculadora.adicionar(num1, num2);
                case Calculadora.SUBTRACAO:
                    return Calculadora.subtrair(num1, num2);
                case Calculadora.DIVISAO:
                    return Calculadora.dividir(num1, num2);
                case Calculadora.MULTIPLICACAO:
                    return Calculadora.multiplicar(num1, num2);
            }
        },
        adicionar: (num1, num2) => {
            return num1 + num2;
        },
        subtrair: (num1, num2) => {
            return num1 - num2;
        },
        multiplicar: (num1, num2) => {
            return num1 * num2;
        },
        dividir: (num1, num2) => {
            if (num2 === 0) return 'Erro';
            return num1 / num2;
        }
    }
;

if (typeof module !== "undefined" && typeof module.exports !== 'undefined') {
    module.exports = Calculadora;
}
