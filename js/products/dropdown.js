const ordenLabelDesktop = document.getElementById("ordenLabelDesktop");
const ordenItemsDesktop = document.querySelectorAll(
  "#dropdownOrdenarDesktop + .dropdown-menu .dropdown-item"
);

ordenItemsDesktop.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    ordenLabelDesktop.textContent = `Ordenar: ${this.dataset.value}`;
  });
});
