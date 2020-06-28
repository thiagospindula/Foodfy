const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".mais-acessadas__card");

for (let card of cards) {
  card.addEventListener("click", function() {
    const fotoId = card.querySelector("img").getAttribute("alt");
    const title = card.querySelector("p.name").textContent;
    const autor = card.querySelector("p.by").textContent;

    modalOverlay.querySelector("img").src = `/foodfy/assets/${fotoId}.png`;
    modalOverlay.querySelector("p.name").innerHTML = title;
    modalOverlay.querySelector("p.by").innerHTML = autor;

    modalOverlay.classList.add("active");
  });
}

document.querySelector(".modal-close").addEventListener("click", function() {
  modalOverlay.classList.remove("active");
});
