window.addEventListener("load", () => {
  const banner = document.querySelector(".bannerCarrossel");
  const btnBannerPrev = document.querySelector(".btnPrev");
  const btnBannerNext = document.querySelector(".btnNext");
  const allBanners = document.querySelectorAll(".bannerImg");

  let bannerWidth = allBanners[0].offsetWidth;
  let currentIndex = 0; 
  const maxIndex = allBanners.length - 1; 

  function updateButtons() {
    if (currentIndex === 0) {
      btnBannerPrev.classList.add("disableButtonCarrossel");
    } else {
      btnBannerPrev.classList.remove("disableButtonCarrossel");
    }

    if (currentIndex === maxIndex) {
      btnBannerNext.classList.add("disableButtonCarrossel");
    } else {
      btnBannerNext.classList.remove("disableButtonCarrossel");
    }
  }

  btnBannerNext.addEventListener("click", () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
      banner.scrollTo({
        left: bannerWidth * currentIndex,
        behavior: "smooth"
      });
      updateButtons();
    }
  });

  btnBannerPrev.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      banner.scrollTo({
        left: bannerWidth * currentIndex,
        behavior: "smooth"
      });
      updateButtons();
    }
  });

  updateButtons();

  window.addEventListener("resize", () => {
    bannerWidth = allBanners[0].offsetWidth;
    banner.scrollTo({
      left: bannerWidth * currentIndex
    });
  });
});
