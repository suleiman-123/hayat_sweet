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
