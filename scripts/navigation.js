const menu = document.getElementById("menu");
const nav = document.getElementById("animateme");
menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});