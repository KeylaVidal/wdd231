// ===== MENU =====
const menuBtn = document.getElementById('menuBtn');
const menuNavegacao = document.querySelector('nav ul');
menuBtn.addEventListener('click', () => {
    menuNavegacao.classList.toggle('aberto');
});

// ===== FORMULÁRIO =====
const form = document.getElementById('formContato');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    
    alert(`Olá, ${nome}! 🎉\nObrigado por entrar em contato!\nEm breve enviaremos dicas incríveis para ${email}!\n\nSeu formulário foi enviado com sucesso! ✅`);
    
    form.reset();
});