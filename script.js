const track = document.getElementById("track");
const imgUrls = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80",
  "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=600&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&q=80"
];

let currentIndex = Math.floor(imgUrls.length / 2);
const angleStep = 22; // Distance between cards in degrees

// Initialize Cards
imgUrls.forEach((url, i) => {
  const card = document.createElement("div");
  card.className = "card";
  card.style.backgroundImage = `url(${url})`;
  track.appendChild(card);
});

const cards = document.querySelectorAll(".card");

function updateCards() {
  cards.forEach((card, i) => {
    // Calculate the rotation for THIS card based on the current center index
    const cardRotation = (i - currentIndex) * angleStep;

    card.style.transform = `rotate(${cardRotation}deg)`;

    // Toggle active classes
    if (i === currentIndex) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
}

function move(dir) {
  const newIndex = currentIndex + dir;
  if (newIndex >= 0 && newIndex < imgUrls.length) {
    currentIndex = newIndex;
    updateCards();
  }
}

// Run on load
updateCards();

// Mouse Wheel
let lastScroll = 0;
window.addEventListener("wheel", (e) => {
  if (Date.now() - lastScroll < 600) return;
  lastScroll = Date.now();
  move(e.deltaY > 0 ? 1 : -1);
});
