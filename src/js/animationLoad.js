const textOne = document.querySelectorAll('.textAnimationOne');
const textTwo = document.querySelectorAll('.textAnimationTwo');
const textThree = document.querySelectorAll('.textAnimationThree');
const textFour = document.querySelectorAll('.textAnimationFour')
const containerAnimationOne = document.querySelector('.containerLoadOne');
const containerAnimationTwo = document.querySelector('.containerLoadTwo');
const containerAnimationThree = document.querySelector('.containerLoadThree');
const containerAnimationFour = document.querySelector('.containerLoadFour');
const containerLoad = document.querySelector(".load");
const containerWebHeader = document.querySelector(".header");
const containerWebPage = document.querySelector(".main");
const containerFooterPage = document.querySelector(".footer");
//preciso deixar o main, header e footer com display none para fazer funcionar load

containerWebHeader.style.display = "none";
containerWebPage.style.display = "none";
containerFooterPage.style.display = "none";

setTimeout(() => {
    containerAnimationOne.style.display = "none";
    containerAnimationTwo.style.display = "flex";
    
}, 2500)

setTimeout(() => {
    containerAnimationTwo.style.display = "none";
    containerAnimationThree.style.display = "flex";
}, 5000)

setTimeout(() => {
    containerAnimationThree.style.display = "none";
    containerAnimationFour.style.display = "flex";
    //containerLoadNumber[3].style.display = "none";
}, 7500)

setTimeout(() => {
    containerLoad.style.display = "none"; 
    containerWebHeader.style.display = "flex";
    containerWebPage.style.display = "block";
    containerFooterPage.style.display = "block"
}, 10000)


textOne.forEach((text, i) => {
    text.style.animationDelay = `${i * 0.1}s`;
})

textTwo.forEach((text, i) => {
    text.style.animationDelay = `${i * 0.1}s`;
})

textThree.forEach((text, i) => {
    text.style.animationDelay = `${i * 0.1}s`;
})

textFour.forEach((text, i) => {
    text.style.animationDelay = `${i * 0.1}s`;
})