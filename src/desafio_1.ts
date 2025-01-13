function calcularSoma(): number {
  const INDICE = 13;
  let SOMA = 0;

  for (let K = 1; K <= INDICE; K++) {
    SOMA += K;
  }

  return SOMA;
}

// Executa a função e exibe o resultado
// O valor da variável SOMA é: 91

console.log(`O valor da variável SOMA é: ${calcularSoma()}`);
