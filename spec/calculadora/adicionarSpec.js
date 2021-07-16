describe("Operação de adição: ", function () {
    var Calculadora = require('../../src/js/calculadora');

    it("Deve retornar 5 para os valores 2 e 3: ",
        function () {
            expect(Calculadora.adicionar(2, 3)).toEqual(5);
        });

    it("Deve retornar 6 para os valores 9 e -3 em formato texto",
        function () {
            expect(Calculadora.adicionar('9', '-3')).toEqual(6);
        });

    it("Deve retornar 6.5 para os valores 1.5 e 5", function () {
        expect(Calculadora.adicionar(1.5, 5)).toEqual(6.5);
    });

    it("Deve retornar 0 quando o primeiro valor for inválido", function () {
        expect(Calculadora.adicionar(undefined, 10)).toEqual(0);
    });

    it("Deve retornar 0 quando o segundo valor for inválido", function () {
        expect(Calculadora.adicionar(10, undefined)).toEqual(0);
    });


});