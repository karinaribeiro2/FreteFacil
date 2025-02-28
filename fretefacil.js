document.getElementById('freteForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const distancia = parseFloat(document.getElementById('distancia').value);
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const regiao = parseInt(document.getElementById('regiao').value);
    const rastreio = document.querySelector('input[name="rastreio"]:checked');

    if (!rastreio) {
        alert("Por favor, selecione uma opção de rastreamento.");
        return;
    }

    const rastreioSim = rastreio.value === 'sim';

    const regioes = {
        1: { nome: 'Sul', precoNormal: 1.00, desconto: 0.10 },
        2: { nome: 'Sudeste', precoNormal: 1.20, desconto: 0.12 },
        3: { nome: 'Centro-Oeste', precoNormal: 1.30, desconto: 0.13 },
    };

    let taxaRastreio = 0;
    if (rastreioSim) {
        taxaRastreio = 200.00;
    }

    let valorFrete = 0;
    if (quantidade <= 1000) {
        valorFrete = quantidade * regioes[regiao].precoNormal;
    } else {
        const precoNormal = 1000 * regioes[regiao].precoNormal;
        const precoDesconto = (quantidade - 1000) * (regioes[regiao].precoNormal * (1 - regioes[regiao].desconto));
        valorFrete = precoNormal + precoDesconto;
    }

    const freteKm = distancia;

    const totalFrete = valorFrete + taxaRastreio + freteKm;

    document.getElementById('taxaRastreio').textContent = `R$ ${taxaRastreio.toFixed(2)}`;
    document.getElementById('fretePecas').textContent = `R$ ${valorFrete.toFixed(2)}`;
    document.getElementById('freteKm').textContent = `R$ ${freteKm.toFixed(2)}`;
    document.getElementById('totalFrete').textContent = `R$ ${totalFrete.toFixed(2)}`;
});
