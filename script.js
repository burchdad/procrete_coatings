const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const comparePanels = document.querySelectorAll("[data-compare]");
const projectSelect = document.querySelector("[data-project-select]");

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
  }
});

comparePanels.forEach((panel) => {
  const stage = panel.querySelector(".compare-stage");
  const range = panel.querySelector(".compare-range");

  const updateCompare = () => {
    stage.style.setProperty("--position", `${range.value}%`);
  };

  updateCompare();
  range.addEventListener("input", updateCompare);
});

if (projectSelect) {
  projectSelect.addEventListener("change", () => {
    window.location.href = projectSelect.value;
  });
}
