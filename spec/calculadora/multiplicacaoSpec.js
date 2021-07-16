describe("Operação de multiplicação: ", function () {
    var Calculadora = require('../../src/js/calculadora');

    it("Deve retornar 5 para os valores 2 e 3: ",
        function () {
            expect(Calculadora.calcular(2, 3,Calculadora.MULTIPLICACAO)).toEqual(6);
        });

    it("Deve retornar 6 para os valores 9 e -3 em formato texto",
        function () {
            expect(Calculadora.calcular('9', '-3',Calculadora.MULTIPLICACAO)).toEqual(-27);
        });

    it("Deve retornar 6.5 para os valores 1.5 e 5", function () {
        expect(Calculadora.calcular(1.5, 2,Calculadora.MULTIPLICACAO)).toEqual(3);
    });

    it("Deve retornar 0 quando o primeiro valor for inválido", function () {
        expect(Calculadora.calcular(undefined, 10,Calculadora.MULTIPLICACAO)).toEqual(0);
    });

    it("Deve retornar 0 quando o segundo valor for inválido", function () {
        expect(Calculadora.calcular(10, undefined,Calculadora.MULTIPLICACAO)).toEqual(0);
    });


});