const menuIcon = document.getElementById('menu-icon'); //<- Esse é o ícone de menu que será clicado para abrir ou fechar o menu de navegação.
const navLinks = document.getElementById('nav-links'); //< -  Esse é o elemento que contém os links de navegação que serão mostrados ou ocultados quando o ícone do menu for clicado.

menuIcon.addEventListener('click', () => { //<- Isso significa que a classe active será adicionada se não estiver presente e removida se já estiver presente.
  navLinks.classList.toggle('active');
});
