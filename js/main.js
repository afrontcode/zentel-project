const modalServicio = document.getElementById("modalServicio");
modalServicio.addEventListener("show.bs.modal", function (event) {
  const card = event.relatedTarget;
  const nuevoTitulo = card.getAttribute("data-bs-title");
  const titulo = modalServicio.querySelector(".modal-title");
  titulo.textContent = nuevoTitulo || "Reclamo";
});
