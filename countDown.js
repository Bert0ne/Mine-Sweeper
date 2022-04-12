   let timeTXT = document.querySelector(".time-left")
   let isTimeUp = false;

   export function startTimer(duration) {

    let timer = duration;
    let minutes;
    let seconds;

    let timeInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timeTXT.textContent = minutes + ":" + seconds;

        if (timer <= 10) { 
            timeTXT.parentElement.classList.add('timeAlmostUp')
        }
        if (--timer < 0) {
            clearInterval(timeInterval)
            isTimeUp = true;
        }

    }, 1000);
}

export function isTimeUp_() {
    return isTimeUp;
}