// Detect page by ID
const landing = document.getElementById("landing");
const wall = document.getElementById("wall");

// Typewriter effect (only on index.html)
if (landing) {
  const text = "For Sanuu 📸";
  const typewriter = document.getElementById("typewriter");
  let i = 0;

  function typeText() {
    if (i < text.length) {
      typewriter.textContent += text.charAt(i);
      i++;
      setTimeout(typeText, 100);
    }
  }
  typeText();
}

// Polaroid logic (only on polaroids.html)
if (wall) {
  const cards = [
    { title: "Something I Learned", message: "You get happy from the smallest things." },
    { title: "Achievement", message: "Sanuu nickname accepted." },
    { title: "Observation", message: "There's a surprisingly high chance your answer starts with 'it depends'." },
    { title: "Travel Mode", message: "You're either planning a trip, on a trip, or recovering from one." },
    { title: "Fun Fact", message: "Ordinary conversations somehow become less ordinary." },
    { title: "Warning", message: "Talking to you may cause random smiling." },
    { title: "Plot Twist", message: "Calm and chaotic at the same time." },
    { title: "Certified Fact", message: "You've probably said 'it depends' more than you realize." }
  ];

  const grid = document.querySelector(".polaroid-grid");
  const counter = document.getElementById("counter");
  const secretCard = document.getElementById("secretCard");

  let opened = 0;

  cards.forEach(card => {
    const polaroid = document.createElement("div");
    polaroid.classList.add("polaroid");

    polaroid.innerHTML = `
      <div class="polaroid-inner">
        <div class="front">${card.title}</div>
        <div class="back">${card.message}</div>
      </div>
    `;

    polaroid.addEventListener("click", () => {
      if (!polaroid.classList.contains("flipped")) {
        opened++;
        counter.textContent = `Opened: ${opened} / ${cards.length}`;
        if (opened === cards.length) {
          secretCard.classList.remove("secret-hidden");
          secretCard.classList.add("secret-show");
        }
      }
      polaroid.classList.toggle("flipped");
    });

    grid.appendChild(polaroid);
  });
}
