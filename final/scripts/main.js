// ===== MENU =====
const menuBtn = document.getElementById('menuBtn');
const menuNavegacao = document.querySelector('nav ul');

if (menuBtn && menuNavegacao) {
    menuBtn.addEventListener('click', () => {
        menuNavegacao.classList.toggle('aberto');
    });
}

// ===== FORMULÁRIO =====
const form = document.getElementById('formContato');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        
        alert(`Olá, ${nome}! 🎉\nObrigado por entrar em contato!\nEm breve enviaremos dicas incríveis para ${email}!\n\nSeu formulário foi enviado com sucesso! ✅`);
        
        form.reset();
    });
}

// ===== LISTA DE LUGARES =====
const gradeLugares = document.getElementById('gradeLugares');
const modal = document.getElementById('modal');
const modalCorpo = document.getElementById('modalCorpo');
const modalFechar = document.getElementById('modalFechar');

if (gradeLugares) {
  fetch('lugares.json')
    .then(resposta => {
        if (!resposta.ok) throw new Error('Erro ao carregar dados');
        return resposta.json();
    })
    .then(lugares => {
      lugares.forEach(lugar => {
        const cartao = document.createElement('div');
        cartao.className = 'cartao-lugar';
        cartao.innerHTML = `
          <img src="${lugar.imagem}" alt="${lugar.nome}" loading="lazy" class="cartao-imagem">
          <div class="cartao-conteudo">
            <span class="categoria">${lugar.categoria}</span>
            <h3>${lugar.nome}</h3>
            <p>${lugar.descricao}</p>
            <button class="btn detalhes-btn" data-id="${lugar.id}">Ver Detalhes</button>
          </div>
        `;
        gradeLugares.appendChild(cartao);
      });

      // Abrir modal ao clicar em "Ver Detalhes"
      document.querySelectorAll('.detalhes-btn').forEach(botao => {
        botao.addEventListener('click', (e) => {
          const id = parseInt(e.target.dataset.id);
          const lugar = lugares.find(l => l.id === id);
          
          if (lugar) {
            modalCorpo.innerHTML = `
              <h3>${lugar.nome}</h3>
              <p><strong>Categoria:</strong> ${lugar.categoria}</p>
              <p><strong>Descrição:</strong> ${lugar.descricao}</p>
              <p><strong>Endereço:</strong> ${lugar.endereco}</p>
              <p><strong>Horário:</strong> ${lugar.horario}</p>
              <p><strong>Entrada:</strong> ${lugar.entrada}</p>
              <img src="${lugar.imagem}" alt="${lugar.nome}" style="width:100%; border-radius:4px; margin-top:1rem;">
            `;
            modal.style.display = 'flex';
          }
        });
      });
    })
    .catch(erro => console.log('Erro ao carregar lugares:', erro));
}

// Fechar modal
if (modalFechar && modal) {
    modalFechar.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Clica fora do modal para fechar
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}