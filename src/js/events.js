const events = [
  { id: 1, nameEvent: "Truck Day", dtEvent: "2025-08-20", timeEvent: "10:00AM", nameMonth: "Agosto", localizationEvent: "registro-SP" },
  { id: 2, nameEvent: "Corrida de Rua", dtEvent: "2025-08-31", timeEvent: "07:00AM", nameMonth: "Agosto", localizationEvent: "registro-SP" },
  { id: 3, nameEvent: "Feira de Livros", dtEvent: "2025-09-05", timeEvent: "09:00AM", nameMonth: "Setembro", localizationEvent: "registro-SP" },
  { id: 4, nameEvent: "Hackathon Universitário", dtEvent: "2025-09-22", timeEvent: "08:00AM", nameMonth: "Setembro", localizationEvent: "registro-SP" },
  { id: 5, nameEvent: "Exposição de Arte", dtEvent: "2025-10-05", timeEvent: "11:00AM", nameMonth: "Outubro", localizationEvent: "registro-SP" },
  { id: 6, nameEvent: "Festival de Música", dtEvent: "2025-10-10", timeEvent: "18:00PM", nameMonth: "Outubro", localizationEvent: "registro-SP" },
  { id: 7, nameEvent: "Oficina de Robótica", dtEvent: "2025-10-25", timeEvent: "13:30PM", nameMonth: "Outubro", localizationEvent: "registro-SP" },
  { id: 8, nameEvent: "Congresso de Tecnologia", dtEvent: "2025-11-04", timeEvent: "10:00AM", nameMonth: "Novembro", localizationEvent: "registro-SP" },
  { id: 9, nameEvent: "Encontro de Desenvolvedores", dtEvent: "2025-11-18", timeEvent: "14:00PM", nameMonth: "Novembro", localizationEvent: "registro-SP" },
  { id: 10, nameEvent: "Feira de Games", dtEvent: "2025-12-01", timeEvent: "12:00PM", nameMonth: "Dezembro", localizationEvent: "registro-SP" },
  { id: 11, nameEvent: "Apresentação de Natal", dtEvent: "2025-12-15", timeEvent: "19:30PM", nameMonth: "Dezembro", localizationEvent: "registro-SP" },
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