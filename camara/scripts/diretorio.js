const url = 'dados/membros.json';
const cards = document.querySelector('#members');

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
}

function displayMembers(members) {
    members.forEach(member => {
        const section = document.createElement('section');
        section.innerHTML = `
            <img src="images/${member.imagem}" alt="Logo ${member.nome}" loading="lazy" width="150" height="150">
            <h2>${member.nome}</h2>
            <p>${member.endereco}</p>
            <p>${member.telefone}</p>
            <a href="${member.website}" target="_blank">Site</a>
        `;
        cards.appendChild(section);
    });
}

// Grid / List
const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');

gridBtn.addEventListener('click', () => {
    cards.classList.add('grid');
    cards.classList.remove('list');
});

listBtn.addEventListener('click', () => {
    cards.classList.add('list');
    cards.classList.remove('grid');
});

// Hamburger
const ham = document.querySelector('#hamburger');
const nav = document.querySelector('#navigation');
ham.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Footer
document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;

getMembers();