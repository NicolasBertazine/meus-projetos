function tabu() { // Função do botão 
    let num = window.document.getElementById('txtn')   
    let tabu = window.document.getElementById('tabuada')
    
    if (num.value.length == 0) { // Caso o usuario não digite nada, aparecera essa mensagem.
        alert('[ERRO] Digite um número!')
    } else { // Caso o usuario digite um número, este comando vai fazer o calculo da tabuada.
        let n = Number(num.value)
        tabu.innerHTML = ''
        for (let c = 1; c <= 10; c ++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tabu.appendChild(item)
        }
    }


}