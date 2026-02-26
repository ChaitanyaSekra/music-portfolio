// Optional subtle attention grab
const playBtn = document.querySelector(".play-btn");

setInterval(() => {
  playBtn.style.opacity = "0.7";
  setTimeout(() => {
    playBtn.style.opacity = "1";
  }, 300);
}, 3000);


document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "1";
});
