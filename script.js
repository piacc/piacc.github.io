// Set your target date here (YYYY-MM-DDTHH:MM:SS format)
const launchDate = new Date("2025-06-01T00:00:00").getTime();

const countdown = () => {
  const now = new Date().getTime();
  const gap = launchDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour   = minute * 60;
  const day    = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  document.getElementById("days").innerText = d < 10 ? '0' + d : d;
  document.getElementById("hours").innerText = h < 10 ? '0' + h : h;
  document.getElementById("minutes").innerText = m < 10 ? '0' + m : m;
  document.getElementById("seconds").innerText = s < 10 ? '0' + s : s;
};

setInterval(countdown, 1000);
