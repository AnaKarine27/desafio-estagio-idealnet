//Inicia o carrossel de "projetos"
export function initSlider() {
  const wrapper = document.querySelector(".slider-wrapper");
  const slides = document.querySelectorAll(".slide");
  const prev = document.querySelector(".slider-control.prev");
  const next = document.querySelector(".slider-control.next");
  const dotsContainer = document.querySelector(".slider-dots");

  let current = 0;

  // Cria os pontos de navegação de acordo com a quantidade de imagens
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "dot";
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  // Atualiza a posição do slide e a classe ativa dos pontos
  function update() {
    wrapper.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
  }

  //Vai para um slide específio clicando nos pontos
  function goTo(i) {
    current = i;
    update();
  }

  // Botão anterior: retrocede ou volta para o último slide
  prev.addEventListener("click", () => {
    current = current > 0 ? current - 1 : slides.length - 1;
    update();
  });

  // Botão próximo: avança ou volta para o primeiro slide
  next.addEventListener("click", () => {
    current = current < slides.length - 1 ? current + 1 : 0;
    update();
  });

  update();
}
