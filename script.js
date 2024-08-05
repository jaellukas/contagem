function contar() {
    let ini = document.getElementById('txtI').value;
    let fim = document.getElementById('txtF').value;
    let passo = document.getElementById('txtP').value;
    let res = document.getElementById('res');

    if (ini.length === 0 || fim.length === 0 || passo.length === 0) {
        window.alert('ERRO, faltam dados!');
    } else {
        res.innerHTML = 'Contando: <br>'; // Adiciona uma quebra de linha para facilitar a leitura

        let i = Number(ini);
        let f = Number(fim);
        let p = Number(passo);

        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1.');
            p = 1;
        }

        if (i < f) { // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `; // Adiciona um símbolo de seta
            }
        } else { // Contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F448} `; // Adiciona um símbolo de seta
            }
        }
        res.innerHTML += '\u{1F3C1}'; // Adiciona uma bandeira para indicar fim
    }
}