//Inicia o menu responsivo (hambúrguer ou X)
export function initMenuToggle() {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {
    // Altera o menu aberto/fechado ao clicar no botãoF
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");

      const icon = menuToggle.querySelector("i");
      if (nav.classList.contains("open")) {
        // Se o menu estiver aberto: muda ícone para X
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        menuToggle.setAttribute("aria-label", "Fechar Menu");
      } else {
        // Se o menu estiver fechado: muda ícone para hambúrguer
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        menuToggle.setAttribute("aria-label", "Abrir Menu");
      }
    });

    // Fecha o menu automaticamente ao clicar em qualquer link de navegação
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (nav.classList.contains("open")) {
          nav.classList.remove("open");
          menuToggle.querySelector("i").classList.remove("fa-times");
          menuToggle.querySelector("i").classList.add("fa-bars");
          menuToggle.setAttribute("aria-label", "Abrir Menu");
        }
      });
    });
  }
}
