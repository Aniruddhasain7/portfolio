document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
(function () {
  emailjs.init("IsJSdW9y3wWC00ujh");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_3u039bj", "template_g6j1nyn", this)
      .then(() => {
        alert("Message sent successfully ✅");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed ❌");
      });

    this.reset();
  });
function scrollProjects(direction) {
  const container = document.querySelector(".projects-grid");
  const scrollAmount = 400;

  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth",
  });
}

function initDots() {
  if (window.innerWidth > 768) return;

  const container = document.querySelector(".projects-grid");
  const cards = document.querySelectorAll(".project-card");
  const dotsContainer = document.querySelector(".project-dots");

  if (!container || !dotsContainer) return;

  // Clear old dots
  dotsContainer.innerHTML = "";

  // Create dots
  cards.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  // Update active dot
  function updateDots() {
    let containerCenter = container.scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    dots.forEach((dot) => dot.classList.remove("active"));
    if (dots[closestIndex]) {
      dots[closestIndex].classList.add("active");
    }
  }

  container.addEventListener("scroll", updateDots);

  // Click to scroll
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      const cardWidth = cards[0].offsetWidth + 20;

      container.scrollTo({
        left: i * cardWidth,
        behavior: "smooth",
      });
    });
  });
}

// Run properly
window.addEventListener("load", initDots);
window.addEventListener("resize", initDots);
