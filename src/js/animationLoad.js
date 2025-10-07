const textOne = document.querySelectorAll('.textAnimationOne');
const textTwo = document.querySelectorAll('.textAnimationTwo');
const textThree = document.querySelectorAll('.textAnimationThree');
const textFour = document.querySelectorAll('.textAnimationFour');

const containerAnimationBackground = document.querySelector('.loadBackground');
const containerAnimationOne = document.querySelector('.containerLoadOne');
const containerAnimationTwo = document.querySelector('.containerLoadTwo');
const containerAnimationThree = document.querySelector('.containerLoadThree');
const containerAnimationFour = document.querySelector('.containerLoadFour');

const containerLoad = document.querySelector(".load");
const containerWebHeader = document.querySelector(".header");
const containerWebPage = document.querySelector(".main");
const containerFooterPage = document.querySelector(".footer");

window.addEventListener("load", () => {
  const bg = containerAnimationBackground;
  bg.style.animation = "none";

  void bg.offsetWidth;

  bg.style.animation = "scaleBackground 10s forwards";
});

// --- CONTROLE DOS TEXTOS (continua com delays)
textOne.forEach((text, i) => {
  text.style.animationDelay = `${i * 0.1}s`;
});

textTwo.forEach((text, i) => {
  text.style.animationDelay = `${i * 0.1}s`;
});

textThree.forEach((text, i) => {
  text.style.animationDelay = `${i * 0.1}s`;
});

textFour.forEach((text, i) => {
  text.style.animationDelay = `${i * 0.1}s`;
});

containerAnimationBackground.addEventListener("animationstart", () => {
  // container 1 começa visível
  //containerAnimationOne.style.display = "flex";

  setTimeout(() => {
    containerAnimationOne.style.display = "none";
    containerAnimationTwo.style.display = "flex";
  }, 2500); // 25% do tempo da animação (10s * 0.25)

  setTimeout(() => {
    containerAnimationTwo.style.display = "none";
    containerAnimationThree.style.display = "flex";
  }, 5000); // 50%

  setTimeout(() => {
    containerAnimationThree.style.display = "none";
    containerAnimationFour.style.display = "flex";
  }, 7500); // 75%

  setTimeout(() => {
    containerLoad.style.display = "none"; 
    containerWebHeader.style.display = "flex";
    containerWebPage.style.display = "block";
    containerFooterPage.style.display = "block";
  }, 10000); // 100%
});