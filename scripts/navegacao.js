const botao = document.getElementById('botao-menu');
const menu = document.getElementById('navegacao');

botao.addEventListener('click', () => {
    menu.classList.toggle('aberto');
});