import { locais } from "../dados/locais.mjs";

const msgDiv = document.querySelector("#mensagem-visita");
const galeria = document.querySelector(".galeria-sobre");

// 1. Mensagem de último acesso
const ultimoAcesso = localStorage.getItem("ultimoAcessoSobre");
const agora = Date.now();

if (!ultimoAcesso) {
    msgDiv.textContent = "Boas-vindas! Entre em contato conosco caso tenha alguma dúvida.";
} else {
    const dias = Math.floor((agora - Number(ultimoAcesso)) / (1000 * 60 * 60 * 24));
    
    if (dias < 1) {
        msgDiv.textContent = "Já voltou? Que legal!";
    } else {
        const textoDia = dias === 1 ? "dia" : "dias";
        msgDiv.textContent = `Seu último acesso foi há ${dias} ${textoDia}.`;
    }
}

localStorage.setItem("ultimoAcessoSobre", agora);

// 2. Gerar os 8 cartões
locais.forEach(local => {
    const card = document.createElement("section");
    card.className = "cartao-local";
    
    card.innerHTML = `
        <h2>${local.nome}</h2>
        <figure>
            <img src="${local.imagem}" alt="${local.nome}" loading="lazy" width="300" height="200">
        </figure>
        <address>${local.endereco}</address>
        <p>${local.descricao}</p>
        <button>Saiba mais</button>
    `;
    
    galeria.appendChild(card);
});