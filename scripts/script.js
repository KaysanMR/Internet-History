
const cards = document.querySelectorAll(".card");
cards.forEach((el) => {
  el.addEventListener("mouseover", (e) => {
    cards.forEach((card) => card.classList.remove("active"));

    const target = e.target.closest(".card");
    target.classList.add("active");
  });
});
