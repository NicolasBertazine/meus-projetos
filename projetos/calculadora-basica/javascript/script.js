    var num1 = window.document.getElementById('txtn1') // Primeiro número
    var num2 = window.document.getElementById('txtn2') // Segundo número
    var res = window.document.getElementById('res') // Resposta

function somar() { // Função de somar
    if( num1.value.length == 0 || num2.value.length == 0){
       window.alert('[ERRO] Faltam dados!') 
    } else {
        let n1 = Number(num1.value)
        let n2 = Number(num2.value)
        s = n1 + n2
        res.innerHTML = `${n1} + ${n2} = ${s}`
    }
}

function tirar() { // Função de subtração
    if( num1.value.length == 0 || num2.value.length == 0){
        window.alert('[ERRO] Faltam dados!') 
     } else {
        let n1 = Number(num1.value)
        let n2 = Number(num2.value)
        s = n1 - n2
        res.innerHTML = `${n1} - ${n2} = ${s}`
     }
}

function multiplicar() { // Função de multiplicar
    if( num1.value.length == 0 || num2.value.length == 0){
        window.alert('[ERRO] Faltam dados!') 
     } else {
        let n1 = Number(num1.value)
        let n2 = Number(num2.value)
        s = n1 * n2
        res.innerHTML = `${n1} x ${n2} = ${s}`
     }
}

function divisao() { // Função de divição
    if( num1.value.length == 0 || num2.value.length == 0){
        window.alert('[ERRO] Faltam dados!') 
     } else {
        let n1 = Number(num1.value)
        let n2 = Number(num2.value)
        s = n1 / n2
        res.innerHTML = `${n1} ÷ ${n2} = ${s}`
     }
}