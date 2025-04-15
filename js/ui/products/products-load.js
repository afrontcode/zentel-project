function loadComponent(id, url) {
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;

      // Ejecutar showMore solo después de cargar los productos
      if (id === "card-products") {
        initShowMore();
      }
    })
    .catch((err) => console.error(`Error al cargar ${id} - ${url}:`, err));
}

window.addEventListener("DOMContentLoaded", () => {
  loadComponent("card-products", "../components/product/card-products.html");
  loadComponent("filter-web-container", "../components/product/filter-web.html");
  loadComponent("offcanvasFiltros", "../components/product/filter-mobile.html");
  loadComponent("ordenar-desktop", "../components/product/ordenar-desktop.html");
  loadComponent("ordenar-mobile", "../components/product/ordenar-mobile.html");
});

// 👉 Lógica de Show More integrada
function initShowMore() {
  const cards = document.querySelectorAll("#card-products .col");
  const mostrarMasBtn = document.getElementById("showmore");

  if (!cards.length || !mostrarMasBtn) return;

  let visibles;
  let incremento;

  function definirCantidadPorPantalla() {
    const ancho = window.innerWidth;
    incremento = ancho < 576 ? 4 : 6;
    visibles = incremento;
  }

  function mostrarProductos() {
    cards.forEach((card, index) => {
      card.style.display = index < visibles ? "block" : "none";
    });

    if (visibles >= cards.length) {
      mostrarMasBtn.style.display = "none";
    } else {
      mostrarMasBtn.style.display = "inline-block";
    }
  }

  definirCantidadPorPantalla();
  mostrarProductos();

  mostrarMasBtn.onclick = () => {
    visibles += incremento;
    mostrarProductos();
  };

  window.addEventListener("resize", () => {
    definirCantidadPorPantalla();
    mostrarProductos();
  });
}
