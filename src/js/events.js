const events = [
  { id: 1, nameEvent: "Treino livre", dtEvent: "2025-10-05", timeEvent: "11:00AM", nameMonth: "Outubro", localizationEvent: "registro-SP" },
  { id: 2, nameEvent: "Pista livre", dtEvent: "2025-10-10", timeEvent: "18:00PM", nameMonth: "Outubro", localizationEvent: "registro-SP" },
  { id: 3, nameEvent: "Track Day", dtEvent: "2025-10-25", timeEvent: "13:30PM", nameMonth: "Outubro", localizationEvent: "registro-SP" },
];


const containerMonths = document.querySelector(".months");
const containerEvents = document.getElementById("renderCardsEvent");


const monthUnit = [... new Set(events.map(event => event.nameMonth))];

console.log(monthUnit)
console.log(containerEvents)

monthUnit.forEach(month => {
  const tab = document.createElement("div");
  tab.className = "month";
  tab.innerHTML = `
  <span>${month}</span>
  `;
  tab.onclick = () => {
    document.querySelectorAll(".month").forEach(m => m.classList.remove("monthSelect"));
    tab.classList.add("monthSelect");
    //funcao que mostra os cards de eventos
    viewEventByMonth(month);
  }
  containerMonths.appendChild(tab);
});

function viewEventByMonth(monthSelected) {
  const eventByMonth = events
  .filter(event => event.nameMonth === monthSelected)
  .sort((a , b) => new Date(b.dtEvent) + new Date(a.dtEvent));;

  containerEvents.innerHTML = ``;

  if(eventByMonth.length === 0){
    containerEvents.innerHTML = "<p>nenhum evento para esse mês</p>"
    return;
  }

  eventByMonth.forEach(event => {
    const card = document.createElement("li");
    card.className = "eventCard";
    const dayEvent = event.dtEvent.split("-")[2]; 
    card.innerHTML = `
    <div class="titleEvent">
      <h3>${event.nameEvent}</h3>
    </div>
    <div class="dateEvent">
      <span>Dia: ${dayEvent}</span>
      <span>As: ${event.timeEvent}</span>
    </div>
    <div class="localizationEvent">
      <span>${event.localizationEvent}</span>
      <div class="btnAction">
        <a href="#">Quero participar
          <img src="src/assets/usables/Arrow-button-white-red.png"
          alt="Seta de ir até uma nova pagina ao clicar no link" />
        </a>
      </div>
    </div>
    `;
    containerEvents.appendChild(card);
  })

  
}
document.querySelectorAll(".month")[0]?.click();