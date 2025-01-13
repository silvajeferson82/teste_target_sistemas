"use strict";
function inverterString(texto) {
    let resultado = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        resultado += texto[i];
    }
    return resultado;
}
// Exemplos de uso
const texto1 = "Hello World";
const texto2 = "Teste de inversão";
console.log(`String original: ${texto1}`);
console.log(`String invertida: ${inverterString(texto1)}`);
console.log(`\nString original: ${texto2}`);
console.log(`String invertida: ${inverterString(texto2)}`);
