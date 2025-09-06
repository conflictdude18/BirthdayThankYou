const btn = document.getElementById("surpriseBtn");
const confettiContainer = document.getElementById("confetti");
const enterBtn = document.getElementById("enterBtn");
const welcomeScreen = document.getElementById("welcomeScreen");
const mainContent = document.getElementById("mainContent");
const usernameInput = document.getElementById("username");
const personalHeading = document.getElementById("personalHeading");
const personalMessage = document.getElementById("personalMessage");

// Show main page when "Enter" is clicked
enterBtn.addEventListener("click", () => {
  const name = usernameInput.value.trim();

  // If user entered a name, personalize the heading/message
  if (name) {
    personalHeading.textContent = `🎉 Thank You, ${name}! 🎉`;
    personalMessage.textContent = `Dear ${name}, thank you so much for your lovely wishes 💖. You made my birthday extra special!`;
  }

  welcomeScreen.style.display = "none";
  mainContent.classList.remove("hidden");
});

// 🎉 Surprise Button → Launch Confetti + Balloons
btn.addEventListener("click", () => {
  launchConfetti();
  launchBalloons();
});

// Confetti function
function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    confetti.style.backgroundColor = randomColor();
    confettiContainer.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}

// 🎈 Balloons function
function launchBalloons() {
  for (let i = 0; i < 15; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 90 + "vw";
    balloon.style.backgroundColor = randomColor();
    balloon.style.animationDuration = 5 + Math.random() * 5 + "s";
    confettiContainer.appendChild(balloon);

    setTimeout(() => balloon.remove(), 10000);
  }
}

function randomColor() {
  const colors = ["#ff4d6d", "#ff9a9e", "#fad0c4", "#fbc2eb", "#a6c1ee", "#fff", "#77dd77", "#ffcc5c"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Add styles dynamically
const style = document.createElement("style");
style.innerHTML = `
  .confetti-piece {
    position: fixed;
    top: 0;
    width: 10px;
    height: 10px;
    opacity: 0.8;
    animation: fall linear forwards;
  }

  @keyframes fall {
    to {
      transform: translateY(100vh) rotate(720deg);
      opacity: 0;
    }
  }

  /* 🎈 Balloon Styles */
  .balloon {
    position: fixed;
    bottom: -100px;
    width: 40px;
    height: 55px;
    border-radius: 50% 50% 45% 45%;
    animation: rise linear forwards;
    opacity: 0.9;
  }

  .balloon::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 2px;
    height: 20px;
    background: #fff;
    transform: translateX(-50%);
  }

  @keyframes rise {
    0% { transform: translateY(0) rotate(0deg) scale(1); }
    50% { transform: translateY(-50vh) rotate(3deg) scale(1.1); }
    100% { transform: translateY(-100vh) rotate(-3deg) scale(1.2); opacity: 0; }
  }
`;
document.head.appendChild(style);
