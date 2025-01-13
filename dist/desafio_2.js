"use strict";
function verificaFibonacci(numero) {
    let anterior = 0;
    let atual = 1;
    let proximo = anterior + atual;
    if (numero === 0 || numero === 1) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    }
    while (proximo <= numero) {
        if (proximo === numero) {
            return `O número ${numero} pertence à sequência de Fibonacci.`;
        }
        anterior = atual;
        atual = proximo;
        proximo = anterior + atual;
    }
    return `O número ${numero} não pertence à sequência de Fibonacci.`;
}
// Exemplo de uso
const numeroTeste = 22;
console.log(verificaFibonacci(numeroTeste));
