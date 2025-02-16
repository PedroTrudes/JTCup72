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
const containerLoad = document.querySelector(".load");

setTimeout(() => {
    containerAnimationOne.style.display = "none";
    containerAnimationTwo.style.display = "flex";
    
}, 4500)

setTimeout(() => {
    containerAnimationTwo.style.display = "none";
    containerAnimationThree.style.display = "flex";
}, 9000)

setTimeout(() => {
    containerAnimationThree.style.display = "none";
    containerAnimationFour.style.display = "flex";
}, 13000)

setTimeout(() => {
    containerLoad.style.display = "none"; 
    containerWebHeader.style.display = "flex";
    containerWebPage.style.display = "flex";
}, 18000)


textOne.forEach((text, i) => {
    text.style.animationDelay = `${i * 0.1}s`;
})

textTwo.forEach((text, i) => {
    text.style.animationDelay = `${i * 0.08}s`;
})

textThree.forEach((text, i) => {
    text.style.animationDelay = `${i * 0.08}s`;
})

textFour.forEach((text, i) => {
    text.style.animationDelay = `${i * 0.1}s`;
})