// Inicia o sistema de troca de tema (Light / Dark)
export function initThemeSwitcher() {
  const themeSwitcher = document.getElementById("theme-switcher");
  const body = document.body;
  const logoImage = document.getElementById("logo-image");

  if (!themeSwitcher || !logoImage) {
    console.error("Erro: Elementos do tema (botão ou logo) não encontrados.");
    return;
  }

  const LIGHT_ICON = "fa-moon";
  const DARK_ICON = "fa-sun";

  const LOGO_LIGHT_SRC = "assets/img/logo.png";
  const LOGO_DARK_SRC = "assets/img/logodark.png";

  // Aplica o tema conforme o parâmetro isDark (true = dark, false = light)
  function applyTheme(isDark) {
    if (isDark) {
      body.classList.add("dark-theme");
      themeSwitcher.innerHTML = `<i class="fas ${DARK_ICON}"></i>`;
      logoImage.src = LOGO_DARK_SRC;
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-theme");
      themeSwitcher.innerHTML = `<i class="fas ${LIGHT_ICON}"></i>`;
      logoImage.src = LOGO_LIGHT_SRC;
      localStorage.setItem("theme", "light");
    }
  }

  // Carrega o tema salvo no localStorage, se houver
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    applyTheme(true);
  } else {
    applyTheme(false);
  }

  // Altera o tema ao clicar no botão
  themeSwitcher.addEventListener("click", () => {
    const isDark = body.classList.contains("dark-theme");
    applyTheme(!isDark);
  });
}
