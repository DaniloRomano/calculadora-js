describe("Operação de subtração: ", function () {
    var Calculadora = require('../../src/js/calculadora');

    it("Deve retornar erro ao dividir por zero", function () {
        expect(Calculadora.dividir(10, 0)).toEqual('Erro');
        expect(Calculadora.dividir(10, '0')).toEqual('Erro');
    })

    it("Deve retornar 5 para os valores 2 e 3: ",
        function () {
            expect(Calculadora.dividir(4, 2)).toEqual(2);
        });

    it("Deve retornar 6 para os valores 9 e -3 em formato texto",
        function () {
            expect(Calculadora.dividir('9', '-3')).toEqual(-3);
        });

    it("Deve retornar 6.5 para os valores 1.5 e 5", function () {
        expect(Calculadora.dividir(2.4, 2)).toEqual(1.2);
    });

    it("Deve retornar 0 quando o primeiro valor for inválido", function () {
        expect(Calculadora.dividir(undefined, 10)).toEqual(0);
    });

    it("Deve retornar 0 quando o segundo valor for inválido", function () {
        expect(Calculadora.dividir(10, undefined)).toEqual(0);
    });


});