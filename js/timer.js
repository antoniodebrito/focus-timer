export function Timer({
    minutesDisplay,
    secondsDisplay,
}) {
  let timerTimeOut;

  function reset() {
    minutesDisplay.textContent = 25
    secondsDisplay.textContent = '00'
  }

  function alteredValuesUpdated(minutes) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
  }

  function updatedDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
  }

  function countdown() {
    timerTimeOut = setTimeout(() => {
      let minutes = Number(minutesDisplay.textContent);
      let seconds = Number(secondsDisplay.textContent);

      updatedDisplay(minutes, 0)

      if (minutes <= 0) {
        return
      }

      if (seconds <= 0) {
        seconds = 3;
        --minutes;
      }


      updatedDisplay(minutes, String(seconds - 1))


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

  function hold() {
    clearTimeout(timerTimeOut);
  }

  return {
    reset,
    alteredValuesUpdated,
    updatedDisplay,
    countdown,
    incrementMinutes,
    decrementMinutes,
    hold
  }

}