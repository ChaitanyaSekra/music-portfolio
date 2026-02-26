const modal = document.getElementById("musicModal");
const modalCover = document.getElementById("modalCover");
const spotifyLink = document.getElementById("spotifyLink");
const appleLink = document.getElementById("appleLink");
const youtubeLink = document.getElementById("youtubeLink");

const closeBtn = document.querySelector(".modal-close");
const overlay = document.querySelector(".modal-overlay");

document.querySelectorAll(".album-cover").forEach(cover => {
  cover.addEventListener("click", () => {
    modalCover.src = cover.dataset.cover;

    spotifyLink.href = cover.dataset.spotify;
    appleLink.href = cover.dataset.apple;
    youtubeLink.href = cover.dataset.youtube;

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);