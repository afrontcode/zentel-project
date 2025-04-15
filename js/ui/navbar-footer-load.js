function loadComponent(id, url) {
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((err) => console.error(`Error al cargar ${url}:`, err));
}

window.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar-container", "../components/navbar.html");
  loadComponent("footer-container", "../components/footer.html");
});
