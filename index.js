const hamNav = document.getElementById("hamburger_navbar");
const nav = document.getElementById("nav");
const navItemsWrapper = document.getElementById("navbarSupportedContent");

hamNav.addEventListener("click", (e) => {
  if (navItemsWrapper.style.display === "block") {
    navItemsWrapper.style.display = "none";
    nav.style.height = "4.3rem";
  } else {
    navItemsWrapper.style.display = "block";
    nav.style.height = "max-content";
  }
});
