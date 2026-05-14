const flowerLayer = document.querySelector(".flowers");
const flowers = ["✿", "✽", "✦", "❀", "♡"];

for (let index = 0; index < 28; index += 1) {
  const flower = document.createElement("span");
  const size = 13 + Math.random() * 18;
  const duration = 9 + Math.random() * 10;
  const delay = Math.random() * -18;
  const drift = (Math.random() - 0.5) * 180;

  flower.className = "flower";
  flower.textContent = flowers[index % flowers.length];
  flower.style.left = `${Math.random() * 100}%`;
  flower.style.setProperty("--size", `${size}px`);
  flower.style.setProperty("--duration", `${duration}s`);
  flower.style.setProperty("--delay", `${delay}s`);
  flower.style.setProperty("--drift", `${drift}px`);

  flowerLayer.appendChild(flower);
}

document.querySelectorAll(".cake-carousel").forEach((carousel) => {
  const image = carousel.querySelector("img");
  const previousButton = carousel.querySelector(".carousel-prev");
  const nextButton = carousel.querySelector(".carousel-next");
  const dotsLayer = carousel.querySelector(".carousel-dots");
  const images = carousel.dataset.images.split(",").map((src) => src.trim()).filter(Boolean);
  let currentIndex = 0;

  const dots = images.map((_, index) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `عرض الصورة ${index + 1}`);
    dot.addEventListener("click", () => showImage(index));
    dotsLayer.appendChild(dot);
    return dot;
  });

  function showImage(index) {
    currentIndex = (index + images.length) % images.length;
    image.src = images[currentIndex];
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === currentIndex);
    });
  }

  image.addEventListener("click", () => showImage(currentIndex + 1));
  image.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showImage(currentIndex + 1);
    }
  });
  previousButton.addEventListener("click", () => showImage(currentIndex - 1));
  nextButton.addEventListener("click", () => showImage(currentIndex + 1));

  showImage(0);
});
