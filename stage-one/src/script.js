const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDay = document.querySelector("#currentDay");
const currentTimeUTC = document.querySelector("#currentTimeUTC");

function updateTime() {
  const now = new Date();
  const UTCTimeArr = now.toUTCString().split(" ");

  const dayOfWeek = DAYS[now.getDay()];
  const UTCTime = `${UTCTimeArr[4]} ${UTCTimeArr[5]}`;

  currentDay.textContent = dayOfWeek;
  currentTimeUTC.textContent = UTCTime;
}

updateTime();
setInterval(updateTime, 1000);
