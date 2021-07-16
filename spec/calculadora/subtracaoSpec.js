describe("Operação de subtração: ", function () {
    var Calculadora = require('../../src/js/calculadora');

    it("Deve retornar 5 para os valores 2 e 3: ",
        function () {
            expect(Calculadora.calcular(2, 3,'-')).toEqual(-1);
        });

    it("Deve retornar 6 para os valores 9 e -3 em formato texto",
        function () {
            expect(Calculadora.calcular('9', '-3','-')).toEqual(12);
        });

    it("Deve retornar 6.5 para os valores 1.5 e 5", function () {
        expect(Calculadora.calcular(1.5, 5,'-')).toEqual(-3.5);
    });

    it("Deve retornar 0 quando o primeiro valor for inválido", function () {
        expect(Calculadora.calcular(undefined, 10,'-')).toEqual(0);
    });

    it("Deve retornar 0 quando o segundo valor for inválido", function () {
        expect(Calculadora.calcular(10, undefined,'-')).toEqual(0);
    });


});