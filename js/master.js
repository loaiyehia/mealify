let navList = document.querySelector(".nav-list");
navList.style.maxHeight = "0px";
let homeToggle = document.querySelector("#home");

function toggleMenu() {
  if (navList.style.maxHeight == "0px") {
    navList.style.maxHeight = "300px";
    homeToggle.classList.add("toggle");
  } else {
    navList.style.maxHeight = "0px";
    homeToggle.classList.remove("toggle");
  }
}

let upIcon = document.querySelector("#up");

window.addEventListener("scroll", function () {
  // console.log("hii")
  window.scrollY >= 500
    ? upIcon.classList.add("show")
    : upIcon.classList.remove("show");
});
upIcon.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
