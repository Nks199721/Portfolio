const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

const sections = document.querySelectorAll(".section");
const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
sections.forEach(sec => sectionObserver.observe(sec));

const fills = document.querySelectorAll(".progress-fill");
const fillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.getAttribute("data-width");
      fillObserver.unobserve(entry.target);
    }
  });
});
fills.forEach(bar => fillObserver.observe(bar));

document.getElementById("open-resume-btn").addEventListener("click", () => {
  if (confirm("Do you want to open the Resume PDF?")) {
    window.open("files/NileshKumarSahoo_CV.pdf", "_blank");
  }
});
