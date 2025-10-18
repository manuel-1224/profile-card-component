// Displays current time in milliseconds and updates it live
const timeEl = document.getElementById("user-time");

function updateTime() {
  timeEl.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);
