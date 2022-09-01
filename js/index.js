const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
const playButton = document.querySelector(".play");
const stopButton = document.querySelector(".stop");
const addMinutesButton = document.querySelector(".add-minutes");
const decrementMinutesButton = document.querySelector(".subtract-minutes");
let timerTimeOut;

function resetTimer() {
  minutesDisplay.textContent = 25
  secondsDisplay.textContent = '00'
}

function alteredValuesUpdated(minutes) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
}

function updatedTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function countdown() {
  timerTimeOut = setTimeout(() => {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);

    updatedTimerDisplay(minutes, 0)

    if (minutes <= 0) {
      return
    }

    if (seconds <= 0) {
      seconds = 3;
      --minutes;
    }


    updatedTimerDisplay(minutes, String(seconds - 1))
    

    countdown();
  }, 1000);
}

function incrementMinutes() {
  let minutes = Number(minutesDisplay.textContent);

  alteredValuesUpdated(String(minutes + 5));
}

function decrementMinutes() {
  let minutes = Number(minutesDisplay.textContent);

  if (minutes <= 0) {
    resetTimer();
  }

  alteredValuesUpdated(String(minutes - 5));

}


playButton.addEventListener('click', () => {
  countdown();
})

stopButton.addEventListener('click', () => {
  clearTimeout(timerTimeOut);
  resetTimer();
  
})

addMinutesButton.addEventListener('click', () => {
  incrementMinutes();
})

decrementMinutesButton.addEventListener('click', () => {
  decrementMinutes();
})