// CLock Neddles
let second_hand = document.getElementsByClassName("second_hand");
let min_hand = document.getElementsByClassName("min_hand");
let hour_hand = document.getElementsByClassName("hour_hand");

// Digital elements
let Digital_hour = document.getElementsByClassName("hour");
let Digital_minute = document.getElementsByClassName("minute");
let Digital_second = document.getElementsByClassName("second");

// Alaram Data
let input = document.getElementsByTagName("input");
let setBtn = document.getElementById("btn");
let audio = document.getElementsByTagName("audio");

let timeValue;
let currentTime;

setBtn.onclick = () => {
  timeValue = input[0].value;
};


function clock() {
  let date = new Date();
  let time = [date.getHours(), date.getMinutes(), date.getSeconds()];
  // Analog
  // degree movent of each needle
  hour_hand[0].style.setProperty("--rotaionValue", time[0] * 30);
  min_hand[0].style.setProperty("--rotaionValue", time[1] * 6);
  second_hand[0].style.setProperty("--rotaionValue", time[2] * 6);

  // digital
  Digital_hour[0].innerHTML = time[0];
  Digital_minute[0].innerHTML = time[1];
  Digital_second[0].innerHTML = time[2];



  if (String(time[0]).length == 2) {
    currentTime = time[0] + ":" + time[1];
  }else{
    currentTime = "0" + time[0] + ":" + time[1];
  }


  // Alarm sound control

  if (currentTime == timeValue) {
    audio[0].play();
  } else if (currentTime > timeValue) {
    audio[0].pause();
  }
}

setInterval(clock, 1000);
