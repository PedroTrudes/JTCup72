const textOne = document.querySelectorAll('.textAnimationOne');
const textTwo = document.querySelectorAll('.textAnimationTwo');
const textThree = document.querySelectorAll('.textAnimationThree');
const textFour = document.querySelectorAll('.textAnimationFour')
const containerAnimationOne = document.querySelector('.containerLoadOne');
const containerAnimationTwo = document.querySelector('.containerLoadTwo');
const containerAnimationThree = document.querySelector('.containerLoadThree');
const containerAnimationFour = document.querySelector('.containerLoadFour');
const containerWebHeader = document.querySelector(".header");
const containerWebPage = document.querySelector(".main");
const containerFooterPage = document.querySelector(".footer");
const containerLoad = document.querySelector(".load");
//preciso deixar o main e o header com display none para fazer funcionar load

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
}, 7500)

setTimeout(() => {
    containerLoad.style.display = "none"; 
    containerWebHeader.style.display = "flex";
    containerWebPage.style.display = "block";
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