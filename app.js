
const timer = document.querySelector('.timer');
let timeBegan = null;
let timeStopped = null;
let stoppedDuration = 0;
let startInteval = null;
let flag = false;

window.addEventListener('click', Manager);

window.addEventListener('dblclick', reset);

function reset(){
  clearInterval(startInteval);
  timeBegan = null;
  timeStopped = null;
  stoppedDuration = 0;
  timer.innerHTML = "00:00:00";
  flag = false;
}

function Manager(){
  if(!flag) {
    start();
    flag = true;
  } else {
    stop();
    flag = false;
  }
}

function start(){
  if(timeBegan === null){
    timeBegan = new Date();
  }
  if(timeStopped !== null) {
    stoppedDuration +=(new Date() - timeStopped);
  }
  startInteval = setInterval(clockRunning,10);
}

function stop(){
  timeStopped = new Date();
  clearInterval(startInteval);
}

function clockRunning(){
  let currentTime = new Date();
  let timeElapsed = new Date(currentTime -timeBegan - stoppedDuration);
  let minutes = timeElapsed.getUTCMinutes();
  let seconds = timeElapsed.getUTCSeconds();
  let milliseconds = timeElapsed.getUTCMilliseconds();
  
  milliseconds = Math.floor(milliseconds/10);
  timer.innerHTML = (minutes = minutes < 10 ? '0' + minutes:minutes) + ':' + (seconds = seconds < 10 ? '0' + seconds: seconds) + ':' + (milliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds);
}