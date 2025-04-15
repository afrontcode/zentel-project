function bannerLoadComponent(id, url) {
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((err) => console.error(`Error al cargar ${url}:`, err));
}

window.addEventListener("DOMContentLoaded", () => {
  loadComponent("banner-container", "../components/banner.html");
});
