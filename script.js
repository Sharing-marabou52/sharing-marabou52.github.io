/* ---- 1. Reveal sections as they scroll into view ---- */
const sections = document.querySelectorAll("section");

const revealer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

sections.forEach((section) => revealer.observe(section));


/* ---- 2. Highlight the nav link for the section you're viewing ---- */
const navLinks = document.querySelectorAll(".sidebar__nav a");

const spy = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === "#" + entry.target.id
        );
      });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach((section) => spy.observe(section));