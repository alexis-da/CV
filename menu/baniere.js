const nav = document.getElementById("nav");
const header = document.getElementById("header")
const home = document.getElementById("home")
const links = document.querySelectorAll(".link")


nav.addEventListener("click", function () {
  nav.classList.toggle("active");
  header.classList.toggle("active");
  home.classList.toggle("active");
  for (let index = 0; index < links.length; index++) {
    const element = links[index];
    element.classList.toggle("active")
  }
});




