const cards = document.querySelectorAll(".row .col");
const mostrarMasBtn = document.getElementById("mostrarMas");
let visibles = 0;
let incremento = 0;

function definirCantidadPorPantalla() {
  const ancho = window.innerWidth;

  if (ancho < 576) {
    visibles = 4;
    incremento = 4;
  } else {
    visibles = 6;
    incremento = 6;
  }
}

function mostrarCards() {
  cards.forEach((card, index) => {
    card.style.display = index < visibles ? "block" : "none";
  });

  if (visibles >= cards.length) {
    mostrarMasBtn.style.display = "none";
  }
}

// Inicializar al cargar
definirCantidadPorPantalla();
mostrarCards();

mostrarMasBtn.addEventListener("click", () => {
  visibles += incremento;
  mostrarCards();
});

// Actualizar si cambia tamaño de ventana
window.addEventListener("resize", () => {
  definirCantidadPorPantalla();
  mostrarCards();
});
