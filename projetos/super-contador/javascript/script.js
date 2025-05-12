function contar() {
    let inicio = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // Caso o usuario deixa um dos espaços em branco, aparecera está mensagem.
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else { // Caso o usuario digite os números, aparecera a contagem.
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) { // Caso o número de "Passo" seja igual 0, aparecera essa mensagem.
            window.alert('Passo inválido!. PASSO passara a valer 1')
            p = 1
        } 
        if (i < f){ // Contagem crescente.
            for(let c = i; c <= f; c += p ) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else { // Contagem regressiva.
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}