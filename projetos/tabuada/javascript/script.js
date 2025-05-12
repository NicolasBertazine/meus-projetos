function tabu() {
    let num = window.document.getElementById('txtn')   
    let tabu = window.document.getElementById('tabuada')
    
    if (num.value.length == 0) {
        alert('[ERRO] Digite um número!')
    } else {
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