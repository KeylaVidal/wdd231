async function loadSpotlights(){
  try {
    const res = await fetch('dados/membros.json');
    const data = await res.json();
    const container = document.getElementById('spotlight-container');
    
    // pega 3 aleatórios
    const sorteados = data.sort(()=>0.5-Math.random()).slice(0,3);
    
    container.innerHTML = sorteados.map(m=>{
      let img = m.imagem || m.image || m.logo || 'imagens/logo.webp';
      let nome = m.nome || m.name || 'Empresa';
      return `
      <div class="card">
        <img src="${img}" alt="${nome}" style="width:100%; max-width:150px; height:100px; object-fit:contain;" onerror="this.src='imagens/logo.webp'">
        <h3>${nome}</h3>
        <p>${m.telefone || m.phone || ''}</p>
        <a href="${m.site || m.website || '#'}" target="_blank">Site</a>
      </div>
    `}).join('');
  } catch(e){
    console.error(e);
    document.getElementById('spotlight-container').innerHTML = "<p>Erro ao carregar destaques</p>";
  }
}
loadSpotlights();

document.getElementById('dataHora').value = new Date().toLocaleString();

document.querySelectorAll('.abre-modal').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById(link.dataset.alvo).showModal();
  });
});
document.querySelectorAll('.fecha-modal').forEach(botao => {
  botao.addEventListener('click', () => {
    botao.closest('dialog').close();
  });
});