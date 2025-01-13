"use strict";
const faturamentoPorEstado = [
    { estado: 'SP', valor: 67836.43 },
    { estado: 'RJ', valor: 36678.66 },
    { estado: 'MG', valor: 29229.88 },
    { estado: 'ES', valor: 27165.48 },
    { estado: 'Outros', valor: 19849.53 }
];
function calcularPercentual() {
    const valorTotal = faturamentoPorEstado.reduce((acc, { valor }) => acc + valor, 0);
    console.log('Percentual de representação por estado:');
    faturamentoPorEstado.forEach(estado => {
        const percentual = (estado.valor / valorTotal) * 100;
        console.log(`${estado.estado}: ${percentual.toFixed(2)}%`);
    });
}
calcularPercentual();
