"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
function readJsonFile() {
    try {
        const data = (0, fs_1.readFileSync)('./src/dados.json', 'utf-8');
        return JSON.parse(data);
    }
    catch (error) {
        console.error('Error reading JSON file:', error);
        return [];
    }
}
function calcularEstatisticasFaturamento() {
    const dados = readJsonFile().filter(dado => dado.valor > 0);
    if (dados.length === 0) {
        console.log('Não há dados de faturamento disponíveis.');
        return;
    }
    const valores = dados.map(dado => dado.valor);
    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);
    const mediaMensal = valores.reduce((acc, valor) => acc + valor, 0) / valores.length;
    const diasAcimaDaMedia = dados.filter(dado => dado.valor > mediaMensal).length;
    console.log(`Menor valor de faturamento: ${menorValor}`);
    console.log(`Maior valor de faturamento: ${maiorValor}`);
    console.log(`Número de dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`);
}
calcularEstatisticasFaturamento();
