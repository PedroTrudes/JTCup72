window.addEventListener("load", () => {
    const banner = document.querySelector(".bannerCarrossel");
    const btnBannerPrev = document.querySelector(".btnPrev");
    const btnBannerNext = document.querySelector(".btnNext");
    const allBanners = document.querySelectorAll(".bannerImg");

    let bannerWidth = allBanners[0].offsetWidth;

    console.log("testando", bannerWidth);

    function updateCtas() {
    const maxScrollLeft = banner.scrollWidth - banner.clientWidth;

    if (banner.scrollLeft <= 20) {
      btnBannerPrev.classList.add("disableButtonCarrossel");
    } else {
      btnBannerPrev.classList.remove("disableButtonCarrossel");
    }

    if (banner.scrollLeft >= maxScrollLeft) {
      btnBannerNext.classList.add("disableButtonCarrossel");
    } else {
      btnBannerNext.classList.remove("disableButtonCarrossel");
    }
  }
  banner.addEventListener("scroll", updateCtas);

    btnBannerNext.addEventListener("click", () => {
    banner.scrollBy({ left: bannerWidth, behavior: "smooth" });
    updateCtas();
  });

    btnBannerPrev.addEventListener("click", () => {
    banner.scrollBy({ left: -bannerWidth, behavior: "smooth" });
    updateCtas();
  });
  updateCtas();
});
