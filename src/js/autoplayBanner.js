const video = document.querySelector('video');
video.play().catch(() => {
  console.log("Autoplay não permitido, mas video muted deve funcionar");
});