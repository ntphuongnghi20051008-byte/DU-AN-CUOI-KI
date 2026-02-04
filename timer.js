let time = 600;
const timer = document.getElementById("timer");

const interval = setInterval(() => {
  const min = String(Math.floor(time / 60)).padStart(2, "0");
  const sec = String(time % 60).padStart(2, "0");

  timer.textContent = `${min}:${sec}`;

  if (time <= 60) {
    timer.classList.add("warning");
  }

  if (time === 0) {
    clearInterval(interval);
    alert("⏰ Hết giờ!");
  }

  time--;
}, 1000);
