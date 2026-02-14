const seal = document.getElementById("seal");
const letter = document.getElementById("letter");
const flapOpen = document.getElementById("flap-open");
const card = document.getElementById("card");

seal.addEventListener("click", () => {
  // Mostrar la carta
  letter.style.opacity = "1";

  seal.style.opacity = "0";
  seal.style.pointerEvents = "none"; 

  flapOpen.style.opacity = "1";

    card.addEventListener("click", () => {
  const front = card.querySelector(".card-front");
  const inside = card.querySelector(".card-inside");

  // Oculta el frontal
  front.style.display = "none";

  // Activa animación de apertura
  letter.classList.add("open");

  // Espera el tiempo de la transición antes de mostrar el interior
  setTimeout(() => {
    inside.style.display = "flex";
  }, 1000); // mismo tiempo que tu transition en CSS
});
  
});


