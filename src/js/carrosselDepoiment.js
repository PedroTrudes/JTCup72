const users = [
    {
        userName: "Pedro",
        userImage: "src/assets/persona/persona01.png",
        userAge: 25,
        userDepoiment: "Participo da JTCup a mais de 2 Anos e amo a energia do grupo e dos porfissionais que estão por tras desse espetaculo."
    },
    {
        userName: "Andre",
        userImage: "src/assets/persona/persona02.png",
        userAge: 29,
        userDepoiment: "Participo da JTCup a mais de 2 Anos e amo a energia do grupo e dos porfissionais que estão por tras desse espetaculo."
    },
    {
        userName: "Julio",
        userImage: "src/assets/persona/persona03.png",
        userAge: 18,
        userDepoiment: "Participo da JTCup a mais de 2 Anos e amo a energia do grupo e dos porfissionais que estão por tras desse espetaculo."
    },
    {
        userName: "Carlos",
        userImage: "src/assets/persona/persona04.png",
        userAge: 12,
        userDepoiment: "Participo da JTCup a mais de 2 Anos e amo a energia do grupo e dos porfissionais que estão por tras desse espetaculo."
    },
]

/*

const renderInDiv = document.querySelector(".containerUserDepoiment");

const btnPrev = document.querySelector(".arrowLeft");
const btnNext = document.querySelector(".arrowRigth");
const indicatorsCarrossel = document.querySelector(".indicatorCarrossel");

let currentIndex = 0;

function createItensCarrossel() {
    users.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.innerHTML = `
        <div class="depoimentCard">
        <div class="cardImage">
        <img src="${item.userImage}" alt="Persona">
        </div>
        <div class="cardText">
        <div class="textApresentation">
        <span class="textApresentationName">${item.userName}</span>
        <span>${item.userAge} Anos</span>
        </div>
        <div class="textDepoiment">
        <p>${item.userDepoiment}</p>
        </div>
        </div>
        </div>
        `;
        renderInDiv.appendChild(slide);
        
        const indicator = document.createElement('button');
        indicator.className = "indicator";
        indicator.dataset.index = index;
        indicator.addEventListener('click', () => goSlide(index));
        indicatorsCarrossel.appendChild(indicator); 
    });
    
    updateIndicators();
}


function updateSlide() {
    const widthItem = renderInDiv.clientWidth;
    renderInDiv.style.transform = `translateX(-${currentIndex * widthItem}px)`;
    updateIndicators();
}

function updateIndicators(){
    const indicators = document.querySelectorAll(".indicator");
    indicators.forEach((indi, index) => {
        indi.classList.toggle('indicatorActive', index === currentIndex);
    });
}

function goToSlide(index){
    currentIndex = index;
    updateIndicators();
}

btnPrev.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : users.length - 1;
    updateIndicators();
})

btnNext.addEventListener('click', () => {
    currentIndex = (currentIndex < users.length - 1) ? currentIndex + 1 : 0;
    updateIndicators();
})


createItensCarrossel();

let interval = setInterval(() => {
    currentIndex = (currentIndex < users.length - 1 )? currentIndex + 1 : 0;
    updateSlide();
    updateIndicators();
}, 5000)

renderInDiv.addEventListener('mouseenter', () => clearInterval(interval));
renderInDiv.addEventListener('mouseleave', () => {
    interval.setInterval(() => {
        currentIndex = (currentIndex < users.length - 1 )? currentIndex + 1 : 0;
        updateSlide();
        updateIndicators();
    }, 5000);
});


*/
/* 

renderInDiv.innerHTML = users.map(user => `
<div class="depoimentCard">
    <div class="cardImage">
    <img src="${user.userImage}" alt="Persona">
    </div>
    <div class="cardText">
    <div class="textApresentation">
    <span class="textApresentationName">${user.userName}</span>
    <span>${user.userAge} Anos</span>
    </div>
    <div class="textDepoiment">
    <p>${user.userDepoiment}</p>
    </div>
    </div>
    </div>
    
    `).join('');


    Comentario de um futuro user data
    {
        userName: "Renato",
        userImage: "src/assets/persona/persona05.png",
        userAge: 45,
        userDepoiment: "Participo da JTCup a mais de 2 Anos e amo a energia do grupo e dos porfissionais que estão por tras desse espetaculo."
    },
    */

   /* 
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
*/