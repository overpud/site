const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const menuBtn = document.getElementById("menuBtn");
const primaryNav = document.getElementById("primaryNav");

if (menuBtn && primaryNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      primaryNav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}
