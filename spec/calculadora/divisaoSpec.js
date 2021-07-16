describe("Operação de divisão: ", function () {
    var Calculadora = require('../../src/js/calculadora');

    it("Deve retornar erro ao dividir por zero", function () {
        expect(Calculadora.calcular(10, 0,Calculadora.DIVISAO)).toEqual('Erro');
        expect(Calculadora.calcular(10, '0',Calculadora.DIVISAO)).toEqual('Erro');
    })

    it("Deve retornar 5 para os valores 2 e 3: ",
        function () {
            expect(Calculadora.calcular(4, 2,Calculadora.DIVISAO)).toEqual(2);
        });

    it("Deve retornar 6 para os valores 9 e -3 em formato texto",
        function () {
            expect(Calculadora.calcular('9', '-3',Calculadora.DIVISAO)).toEqual(-3);
        });

    it("Deve retornar 6.5 para os valores 1.5 e 5", function () {
        expect(Calculadora.calcular(2.4, 2,Calculadora.DIVISAO)).toEqual(1.2);
    });

    it("Deve retornar 0 quando o primeiro valor for inválido", function () {
        expect(Calculadora.calcular(undefined, 10,'/')).toEqual(0);
    });

    it("Deve retornar 0 quando o segundo valor for inválido", function () {
        expect(Calculadora.calcular(10, undefined,'/')).toEqual(0);
    });


});