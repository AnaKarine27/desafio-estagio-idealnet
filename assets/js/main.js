import { initMenuToggle } from "./modules/menuToggle.js";
import { initSlider } from "./modules/slider.js";
import { initThemeSwitcher } from "./modules/themeSwitcher.js";

document.addEventListener("DOMContentLoaded", () => {
  initMenuToggle();
  initSlider();
  initThemeSwitcher();

  const contactForm = document.querySelector(".contact-form");
  //Evita recarregar a página após envio do formulário
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Exibe alert personalizado (Biblioteca SweetAlert)
      Swal.fire({
        title: "Formulário enviado com sucesso!",
        icon: "success",
        draggable: true,
      });

      contactForm.reset(); //Limpa os campos do formulário após envio
    });
  }
});
