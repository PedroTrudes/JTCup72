const btnFaqs = document.querySelectorAll('button');
const contianerFaqPayment = document.querySelector('.faqPayment');
const containerFaqVehicle = document.querySelector('.faqVehicle');
const containerFaqAwards = document.querySelector('.faqAwards');
const faqsCards = document.querySelectorAll('.faqsCard');



function activeFaq(idFaq) {
    console.log("chamando" , idFaq);
    console.log(btnFaqs.item(0));
    if(idFaq == 'payment'){
        contianerFaqPayment.classList.add('isActiveFaqContainer');
        containerFaqVehicle.classList.remove('isActiveFaqContainer');
        containerFaqAwards.classList.remove('isActiveFaqContainer');
        
        //Logica do botao:
        btnFaqs.item(2).classList.remove('isActiveFaq');
        btnFaqs.item(0).classList.remove('isActiveFaq');
        btnFaqs.item(1).classList.add('isActiveFaq');

    }else if(idFaq == 'vehicle'){
        containerFaqVehicle.classList.add('isActiveFaqContainer');
        contianerFaqPayment.classList.remove('isActiveFaqContainer');
        containerFaqAwards.classList.remove('isActiveFaqContainer');

        //Logica do botao:
        btnFaqs.item(2).classList.remove('isActiveFaq');
        btnFaqs.item(0).classList.add('isActiveFaq');
        btnFaqs.item(1).classList.remove('isActiveFaq');

    }else if(idFaq == 'awards'){
        containerFaqAwards.classList.add('isActiveFaqContainer');
        containerFaqVehicle.classList.remove('isActiveFaqContainer');
        contianerFaqPayment.classList.remove('isActiveFaqContainer');

        //Logica do botao:
        btnFaqs.item(2).classList.add('isActiveFaq');
        btnFaqs.item(1).classList.remove('isActiveFaq');
        btnFaqs.item(0).classList.remove('isActiveFaq');
    }
}

faqsCards.forEach(faq => {
  faq.addEventListener("click", function () {
    const currentSpan = this.querySelector(".cardTextSpan");
    const currentArrow = this.querySelector(".cardIconArrow img");
    const isActive = currentSpan?.classList.contains("cardTextSpanActive");

    faqsCards.forEach(f => {
      f.querySelector(".cardTextSpan")?.classList.remove("cardTextSpanActive");
      f.querySelector(".cardIconArrow img")?.classList.remove("isArrowUp");
    });

    if (!isActive) {
      currentSpan?.classList.add("cardTextSpanActive");
      currentArrow?.classList.add("isArrowUp");
    }
  });
});