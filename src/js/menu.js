const menuComponent = document.getElementById('menuToggle');
const navigationComponent = document.querySelector('.navigationLink');
const linkComponent = document.querySelectorAll('.navigationLink a');

menuComponent.addEventListener("change", () => {
    if(menuComponent.checked){
        navigationComponent.classList.add("showMenu");
        console.log("ativado")
    }else{
        navigationComponent.classList.remove("showMenu");
        console.log("desativado")
    }
})

linkComponent.forEach(link => {
    link.addEventListener("click", () => {
        menuComponent.checked = false;
        navigationComponent.classList.remove("showMenu");
    })
})