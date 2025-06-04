const divPersonas = document.querySelector(".carrosselPersona");
const personasImg = document.querySelectorAll(".carrosselPersona img");
const personasText = document.querySelectorAll(".usersInfos");
const arrowPrev = document.querySelector(".arrowRigth");
const arrowBack = document.querySelector(".arrowLeft");
const indicators = document.querySelectorAll(".indicator")

let index = 0;
let left = 550;
function updateCarrossel(newIndex, left) {

    personasImg.forEach((persona, i) => {
        persona.classList.toggle("activeCardPersona", i === newIndex);
        divPersonas.style.transform = `translateX(${left}px)` ;
    })
    personasText.forEach((text, i) => {
        text.classList.toggle("infoActive", i === newIndex);
    })
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle("indicatorActive", i === newIndex);
    })

    index = newIndex;
}

arrowPrev.addEventListener("click", () => {
    let prox = (index + 1);
    left -= 200; 
    if(prox < 5){
        updateCarrossel(prox, left);
    }else{
        updateCarrossel(prox = 0, left = 550);
    }
})

arrowBack.addEventListener("click", () => {
    let back = (index - 1);
    left +=200;
    if(back > -1){
        updateCarrossel(back, left);
    }else{
        updateCarrossel(back = 4, left = 550);
    }
})