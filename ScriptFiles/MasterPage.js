function openNav() {
  document.querySelector("nav").style.left = "0";
}

function closeNav() {
  document.querySelector("nav").style.left = "-250px";
}

function loadContent(page) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("main-content").innerHTML = data;
      closeNav();
    })
    .catch((error) => console.error("Error loading content:", error));
}
