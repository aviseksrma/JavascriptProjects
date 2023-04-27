// Elements to change
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// Countdown date
const deadline = new Date("Jan 31, 2024 15:37:25").getTime();

// Interval every seconds
const timerCouter = setInterval(() => {
  // Current date
  const now = new Date().getTime();
  // Difference to be shown
  const remainigTime = deadline - now;

  // Showing countdown
  days.innerText = Math.floor(remainigTime / (1000 * 60 * 60 * 24));
  hours.innerText = Math.floor(
    (remainigTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes.innerText = Math.floor(
    (remainigTime % (1000 * 60 * 60)) / (1000 * 60)
  );
  seconds.innerText = Math.floor((remainigTime % (1000 * 60)) / 1000);
}, 1000);
