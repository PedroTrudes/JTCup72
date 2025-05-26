const btnFaqs = document.querySelectorAll('button');
console.log(btnFaqs);
const contianerFaqPayment = document.querySelector('.faqPayment');
const containerFaqVehicle = document.querySelector('.faqVehicle');
const containerFaqAwards = document.querySelector('.faqAwards');
const faqsCards = document.querySelectorAll('.faqsCard');
console.log(faqsCards);

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