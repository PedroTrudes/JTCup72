const categoryKids = document.querySelector('#buttonKids');
const categoryMotard = document.querySelector('#buttonMotard');
const categorySuper = document.querySelector('#buttonSuper');
const aboutKids = document.querySelector('#textKids');
const aboutMotard = document.querySelector('#textMotard');
const aboutSuper = document.querySelector('#textSuper');

categoryKids.addEventListener("click", function() {
    console.log("chamando kids")
    categoryKids.classList.add('isActive');
    categoryMotard.classList.remove('isActive');
    categorySuper.classList.remove('isActive');

    aboutKids.classList.add('isActive');
    aboutMotard.classList.remove('isActive');
    aboutSuper.classList.remove('isActive');

})

categoryMotard.addEventListener("click", function() {
    console.log("chamando motard")
    categoryMotard.classList.add('isActive');
    categoryKids.classList.remove('isActive');
    categorySuper.classList.remove('isActive');

    aboutMotard.classList.add('isActive');
    aboutKids.classList.remove('isActive');
    aboutSuper.classList.remove('isActive');
})

categorySuper.addEventListener("click", function() {
    console.log("chamando super")
    categorySuper.classList.add('isActive');
    categoryMotard.classList.remove('isActive');
    categoryKids.classList.remove('isActive');

    aboutKids.classList.remove('isActive');
    aboutMotard.classList.remove('isActive');
    aboutSuper.classList.add('isActive');
})