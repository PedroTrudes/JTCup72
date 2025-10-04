const carrossel = document.querySelector(".carrosselDepoiment");
const btnPrev = document.querySelector(".btnPrev");
const btnNext = document.querySelector(".btnNext");
const card = document.querySelectorAll(".cardDepoiment");

let cardWidth = card[0].offsetWidth;

function updateCtas(){
    const maxScrollLeft = carrossel.scrollWidth - carrossel.clientWidth;

    if(carrossel.scrollLeft <= 20){
        btnPrev.classList.add("disableButtonCarrossel");
    }else{
        btnPrev.classList.remove("disableButtonCarrossel");
    }

    if(carrossel.scrollLeft >= maxScrollLeft){
        btnNext.classList.add("disableButtonCarrossel");
    }else{
        btnNext.classList.remove("disableButtonCarrossel");
    } 
}

carrossel.addEventListener("scroll", updateCtas );


btnNext.addEventListener("click", () => {
    carrossel.scrollBy({left: cardWidth, behavior: "smooth"});
    updateCtas();
})

btnPrev.addEventListener("click", () => {
    carrossel.scrollBy({left: -cardWidth, behavior: "smooth"})
    updateCtas();
})

updateCtas();