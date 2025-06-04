const personasImg = document.querySelectorAll(".carrosselPersona img");
const personasText = document.querySelectorAll(".usersInfos");
const arrowPrev = document.querySelector(".arrowRigth");
const arrowBack = document.querySelector(".arrowLeft");
const indicators = document.querySelectorAll(".indicator")

let index = 0;


function updateCarrossel(newIndex) {
    indicators.forEach((indicator, i) => {

        if(newIndex < 5 && newIndex > -1){
            indicator.classList.toggle("indicatorActive", i === newIndex);
        }else{
            newIndex = 0;
            indicator.classList.toggle("indicatorActive", i === newIndex);
        }
     
    })
    index = newIndex;
}

arrowPrev.addEventListener("click", () => {
    let prox = (index + 1)
    updateCarrossel(prox)
})

arrowBack.addEventListener("click", () => {
    let back = (index - 1);
    updateCarrossel(back)
})

/*


const imgs = document.querySelectorAll(".carrosselPersona img");
  const textos = document.querySelectorAll(".usersInfos");
  const indicators = document.querySelectorAll(".indicator");
  const setaDireita = document.querySelector(".arrowRigth");
  const setaEsquerda = document.querySelector(".arrowLeft");

  let indexAtual = 0;

  function atualizarCarrossel(novoIndex) {
    // Atualiza as imagens
    imgs.forEach((img, i) => {
      img.classList.toggle("activeCardPersona", i === novoIndex);
    });

    // Atualiza os textos
    textos.forEach((texto, i) => {
      texto.classList.toggle("infoActive", i === novoIndex);
    });

    // Atualiza os indicadores
    indicators.forEach((dot, i) => {
      dot.classList.toggle("indicatorActive", i === novoIndex);
    });

    indexAtual = novoIndex;
  }

  setaDireita.addEventListener("click", () => {
    let proximo = (indexAtual + 1) % imgs.length;
    atualizarCarrossel(proximo);
  });

  setaEsquerda.addEventListener("click", () => {
    let anterior = (indexAtual - 1 + imgs.length) % imgs.length;
    atualizarCarrossel(anterior);
  });

  // (Opcional) Clique nos indicadores
  indicators.forEach((dot, i) => {
    dot.addEventListener("click", () => atualizarCarrossel(i));
  });
*/