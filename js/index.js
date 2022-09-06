import { Timer } from "./timer.js";
import Sounds from "./sounds.js";
import {
  minutesDisplay,
  secondsDisplay,
  playButton,
  stopButton,
  addMinutesButton,
  decrementMinutesButton,
  forest,
  rain,
  coffeshop,
  fireplace } from "./elements.js";



const sound = Sounds();

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

playButton.addEventListener('click', () => {
  timer.countdown();
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


forest.addEventListener('click', () => {
  sound.forestSound();
})
rain.addEventListener('click', () => {
  sound.rainSound();
})
coffeshop.addEventListener('click', () => {
  sound.coffeShopSound();
})
fireplace.addEventListener('click', () => {
  sound.fireplaceSound();
})