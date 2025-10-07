window.addEventListener("load", () => {
  const carrossel = document.querySelector(".carrosselDepoiment");
  const btnPrev = document.querySelector(".btnPrev");
  const btnNext = document.querySelector(".btnNext");
  const card = document.querySelectorAll(".cardDepoiment");
  const containerIndicator = document.querySelector(".carrosselIndicator");
  const main = document.querySelector("main")

  let cardWidth;
  const observer = new MutationObserver(() => {
    if (getComputedStyle(main).display !== "none") {
      cardWidth = card[0].offsetWidth;
      updateCtas();
      observer.disconnect(); // para de observar depois de ajustar
    }
  });

  observer.observe(main, { attributes: true, attributeFilter: ["style"] });
  console.log("Chamando card" , cardWidth)

  function updateCtas() {
    const maxScrollLeft = carrossel.scrollWidth - carrossel.clientWidth;

    if (carrossel.scrollLeft <= 20) {
      btnPrev.classList.add("disableButtonCarrossel");
    } else {
      btnPrev.classList.remove("disableButtonCarrossel");
    }

    if (carrossel.scrollLeft >= maxScrollLeft) {
      btnNext.classList.add("disableButtonCarrossel");
    } else {
      btnNext.classList.remove("disableButtonCarrossel");
    }
  }

  carrossel.addEventListener("scroll", updateCtas);

  btnNext.addEventListener("click", () => {
    carrossel.scrollBy({ left: cardWidth, behavior: "smooth" });
    updateCtas();
  });

  btnPrev.addEventListener("click", () => {
    carrossel.scrollBy({ left: -cardWidth, behavior: "smooth" });
    updateCtas();
  });

  updateCtas();
});
