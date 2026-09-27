const CONTACT_URL = "https://www.instagram.com/frameball.pl/";

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");
const contactCopy = document.querySelector("[data-contact-copy]");

document.querySelectorAll(".contact-link").forEach((link) => {
  link.href = CONTACT_URL;
  link.target = "_blank";
  link.rel = "noreferrer";

  link.addEventListener("click", () => {
    const selectedPackage = link.dataset.package;
    if (selectedPackage && contactCopy) {
      contactCopy.textContent = `Wybrany pakiet: ${selectedPackage}. Napisz nam, jakie nagranie posiadasz i podaj numer zawodnika.`;
    }
  });
});

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav?.classList.toggle("is-open", !isOpen);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  });
});

window.addEventListener(
  "scroll",
  () => header?.classList.toggle("is-scrolled", window.scrollY > 12),
  { passive: true },
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
document.querySelector("[data-year]").textContent = new Date().getFullYear();
