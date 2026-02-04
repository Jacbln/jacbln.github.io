const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const subtitle = document.getElementById("subtitle");
const confetti = document.getElementById("confetti");

let noCount = 0;

function popConfetti() {
  confetti.innerHTML = "";
  const pieces = 80;

  for (let i = 0; i < pieces; i++) {
    const p = document.createElement("span");
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDelay = Math.random() * 0.3 + "s";
    p.style.transform = `translateY(0) rotate(${Math.random() * 360}deg)`;
    p.style.background = `hsl(${Math.random() * 360}, 90%, 60%)`;
    p.style.width = 8 + Math.random() * 8 + "px";
    p.style.height = 10 + Math.random() * 10 + "px";
    confetti.appendChild(p);
  }
}

yesBtn.addEventListener("click", () => {
  subtitle.textContent = "Best answer ever 😌";
  result.classList.remove("hidden");
  popConfetti();
  noBtn.disabled = true;
  yesBtn.textContent = "YES!! 💖";
});

noBtn.addEventListener("mouseenter", () => {
  // playful dodge
  const card = document.querySelector(".card");
  const rect = card.getBoundingClientRect();

  const x = Math.random() * (rect.width - 120);
  const y = Math.random() * (rect.height - 60);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

noBtn.addEventListener("click", () => {
  // if she manages to click it on mobile, make it cute anyway
  noCount++;
  const lines = [
    "Are you sure? 🥺",
    "Like… *really* sure? 😳",
    "Okay that button is kinda suspicious 😄",
    "I’m gonna pretend you meant Yes 😌"
  ];
  subtitle.textContent = lines[Math.min(noCount, lines.length - 1)];
  if (noCount >= 3) yesBtn.click();
});


