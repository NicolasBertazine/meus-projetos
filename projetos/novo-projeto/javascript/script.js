function seuNome() { // Função do botão.
    let nome = window.prompt('Antes de começar, qual é o seu nome: ')
    document.getElementById('mensagemSaudacao').textContent = "Olá, " + nome
}