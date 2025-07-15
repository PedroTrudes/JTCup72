//:CHECK: Task 01: Fazer os indicators mudar junto com o Slide; 

//:CHECK: Task 02: Vamos alinhar os depoimentos ao centro da tela;

// Taks Plus: vamos tentar renderizar os indicator de acordo com a quantidade de objetos com OBJECT.Keys
const arrayDepoiment = {
    0: [
            {
        userName: "slide 0",
        userImage: "src/assets/persona/persona01.png",
        userAge: 25,
        userDepoiment: "Participo da JTCup a mais de 2 Anos e amo a energia do grupo e dos porfissionais que estão por tras desse espetaculo."
    },
    {
        userName: "slide 0",
        userImage: "src/assets/persona/persona02.png",
        userAge: 29,
        userDepoiment: "Participo da JTCup a mais de 2 Anos e amo a energia do grupo e dos porfissionais que estão por tras desse espetaculo."
    },
    {
        userName: "slide 0",
        userImage: "src/assets/persona/persona03.png",
        userAge: 18,
        userDepoiment: "Participo da JTCup a mais de 2 Anos e amo a energia do grupo e dos porfissionais que estão por tras desse espetaculo."
    },
    ],
    1: [
            {
        userName: "slide 1",
        userImage: "src/assets/persona/persona03.png",
        userAge: 25,
        userDepoiment: "Participo da JTCup a mais de 2 Anos e amo a energia do grupo e dos porfissionais que estão por tras desse espetaculo."
    },
    {
        userName: "slide 1",
        userImage: "src/assets/persona/persona01.png",
        userAge: 29,
        userDepoiment: "Participo da JTCup a mais de 2 Anos e amo a energia do grupo e dos porfissionais que estão por tras desse espetaculo."
    },
    {
        userName: "slide 1",
        userImage: "src/assets/persona/persona02.png",
        userAge: 18,
        userDepoiment: "Participo da JTCup a mais de 2 Anos e amo a energia do grupo e dos porfissionais que estão por tras desse espetaculo."
    },
    ],
    2: [
            {
        userName: "slide 2",
        userImage: "src/assets/persona/persona04.png",
        userAge: 25,
        userDepoiment: "Participo da JTCup a mais de 2 Anos e amo a energia do grupo e dos porfissionais que estão por tras desse espetaculo."
    },
    {
        userName: "slide 2",
        userImage: "src/assets/persona/persona04.png",
        userAge: 29,
        userDepoiment: "Participo da JTCup a mais de 2 Anos e amo a energia do grupo e dos porfissionais que estão por tras desse espetaculo."
    },
    {
        userName: "slide 2",
        userImage: "src/assets/persona/persona04.png",
        userAge: 18,
        userDepoiment: "Participo da JTCup a mais de 2 Anos e amo a energia do grupo e dos porfissionais que estão por tras desse espetaculo."
    },
]
};

const renderInDiv = document.querySelector(".containerUserDepoiment");
const btnPrev = document.querySelector(".arrowLeft");
const btnNext = document.querySelector(".arrowRigth");
let indexCarrossel = 0;

function renderSlide(slideIndex){
    const slide = arrayDepoiment[slideIndex];
    const carrosselHTML = document.querySelector(".containerUserDepoiment");
    if(slide){
        carrosselHTML.innerHTML = slide.map(users => `
            <div class="depoimentCard depoimentActived">
            <div class="cardImage">
              <img src="${users.userImage}" alt="Persona">
            </div>
            <div class="cardText">
              <div class="textApresentation">
                <span class="textApresentationName">${users.userName}</span>
                <span>${users.userAge}</span>
              </div>
              <div class="textDepoiment">
                <p>${users.userDepoiment}</p>
              </div>
            </div>
          </div>
            `).join("");
    }
}

function updateIndicator() {
    const indicator = document.querySelectorAll(".indicator");
    indicator.forEach((item, index) => {
        item.classList.toggle("indicatorActive", index === indexCarrossel);
    })
}

btnNext.addEventListener('click', () => {
    indexCarrossel += 1;
    if(arrayDepoiment[indexCarrossel]){
        renderSlide(indexCarrossel);
        slideIndicator = indexCarrossel;
        updateIndicator()
    }else if(indexCarrossel > 2){
        indexCarrossel = 0;  
        slideIndicator = indexCarrossel;
        renderSlide(indexCarrossel);
        updateIndicator()
    }
})

btnPrev.addEventListener('click', () => {
    indexCarrossel -= 1;
    if(arrayDepoiment[indexCarrossel]){
        renderSlide(indexCarrossel);
        updateIndicator()
    }else if(indexCarrossel < 0){
        indexCarrossel = 2;
        renderSlide(indexCarrossel);
        updateIndicator()
    }
})

renderSlide(indexCarrossel);