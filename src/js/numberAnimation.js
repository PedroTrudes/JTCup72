const numberPilot = document.querySelector('#valuePilot');
const numberTrack = document.querySelector('#valueTrack');
const numberRace = document.querySelector('#valueRace');
let started = false;
const animationContador = () => {

    
    let initial = 0;
    const valueFinal = 100;
    const timeDuration = 2000;
    const increment = Math.ceil(valueFinal / (timeDuration / 30));
    
    const intervalPilot = setInterval(() => {
        initial += increment;
        if(initial >= valueFinal){
            initial = valueFinal;
            clearInterval(intervalPilot);
        }
        numberPilot.textContent = initial + '+';
        numberRace.textContent = initial + '+'
    }, 30)

    
    const valueFinalTrack = 12;
    const incrementTrack = Math.ceil(valueFinalTrack / (7000 / 70));
    const intervalTrack = setInterval(() => {
        initial += incrementTrack;
        if(initial >= valueFinalTrack){
            initial = valueFinalTrack;
            clearInterval(intervalTrack);
        }
        numberTrack.textContent = initial
    }, 70)
    
    
};

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        animationContador();
        started = true;
      }
    });
  }, {
    threshold: 0.8 // dispara quando 80% da section estiver visível
  });

  observer.observe(document.getElementById("containerNumbersIniti"));