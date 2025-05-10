let nome = window.prompt('Antes de começar, qual é o seu nome: ')

function seuNome() {
    document.getElementById('mensagemSaudacao').textContent = "Olá, " + nome
}