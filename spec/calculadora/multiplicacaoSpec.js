describe("Operação de subtração: ", function () {
    var Calculadora = require('../../src/js/calculadora');

    it("Deve retornar 5 para os valores 2 e 3: ",
        function () {
            expect(Calculadora.multiplicar(2, 3)).toEqual(6);
        });

    it("Deve retornar 6 para os valores 9 e -3 em formato texto",
        function () {
            expect(Calculadora.multiplicar('9', '-3')).toEqual(-27);
        });

    it("Deve retornar 6.5 para os valores 1.5 e 5", function () {
        expect(Calculadora.multiplicar(1.5, 2)).toEqual(3);
    });

    it("Deve retornar 0 quando o primeiro valor for inválido", function () {
        expect(Calculadora.multiplicar(undefined, 10)).toEqual(0);
    });

    it("Deve retornar 0 quando o segundo valor for inválido", function () {
        expect(Calculadora.multiplicar(10, undefined)).toEqual(0);
    });


});