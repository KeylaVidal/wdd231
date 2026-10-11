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

// ===== LISTA DE LUGARES =====
const gradeLugares = document.getElementById('grade-lugares');

if (gradeLugares) {
  fetch('lugares.json')
    .then(resposta => resposta.json())
    .then(lugares => {
      lugares.forEach(lugar => {
        const cartao = document.createElement('div');
        cartao.className = 'cartao-lugar';
        cartao.innerHTML = `
          <img src="${lugar.imagem}" alt="${lugar.nome}" loading="lazy">
          <div class="cartao-conteudo">
            <h3>${lugar.nome}</h3>
            <p>${lugar.descricao}</p>
            <span class="cidade">${lugar.cidade}</span>
            <button class="favoritar">Favoritar</button>
          </div>
        `;
        gradeLugares.appendChild(cartao);
      });
    })
    .catch(erro => console.log('Erro ao carregar lugares:', erro));
}