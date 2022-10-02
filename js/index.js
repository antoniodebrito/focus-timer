import { Timer } from "./timer.js";
import {
  minutesDisplay,
  secondsDisplay,
  playButton,
  pauseButton,
  stopButton,
  addMinutesButton,
  decrementMinutesButton,
  changeThemeButton } from "./elements.js";


const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

const toggleTheme = () => {
  document.body.classList.toggle('dark-theme');
}

function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleTheme();
  }
}

loadTheme();

changeThemeButton.addEventListener("change", () => {
  toggleTheme();

  localStorage.removeItem('dark')

  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("dark", 1);
  }
})

playButton.addEventListener('click', () => {
  pauseButton.classList.remove('hide');
  playButton.classList.add('hide');
  timer.countdown();
})

pauseButton.addEventListener('click', () => {
  playButton.classList.remove('hide');
  pauseButton.classList.add('hide');
  timer.hold();
})

stopButton.addEventListener('click', () => {
  timer.reset();
  timer.hold();
})

addMinutesButton.addEventListener('click', () => {
  timer.incrementMinutes();
})

decrementMinutesButton.addEventListener('click', () => {
  timer.decrementMinutes();
})