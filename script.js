var time = new Date().getHours();
var messageText;
var image;
var isPartyTime = false;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var oneSecond = 1000;
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";

var updateClock = function () {
  var lolcat = document.getElementById('lolcat');
  var message = document.getElementById('timeEvent');
  if (time == partyTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ PARTEE TIME!!";
  } else if (time == napTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ NAP TIME...";
  } else if (time == lunchTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
  } else if (time == wakeupTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ TIME TO GETTUP.";
  } else if (time < noon) {
    messageText = "Good morning!";
  } else if (time > evening) {
    messageText = "Good Evening!";
  } else {
    messageText = "Good afternoon!";
  }
  message.innerText = messageText;
  lolcat.src = image;
  showCurrentTime();
};

var showCurrentTime = function () {
  var clock = document.getElementById('clock');
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = 'AM';

  if (hours >= noon) {
    meridian = 'PM';
  }
  if (hours > noon) {
    hours = hours - 12;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
  clock.innerText = clockTime;
};

updateClock();
setInterval(updateClock, oneSecond);

var button = document.getElementById('partyTimeButton');
var partyEvent = function () {
  if (partyTime == false) {
    partyTime = true;
    time = partyTime;
    button.innerText = 'Party over';
    button.style.backgroundColor = "#0A8DAB";
  }
  else {
    partyTime = false;
    time = new Date().getHours();
    button.innerText = 'Party time';
    button.style.backgroundColor = "#222";
  }
};
button.addEventListener('click', partyEvent);

var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');
var wakeUpTime;

var wakeUpEvent = function () {
  wakeUpTime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

var napTime;
var napTimeSelector = document.getElementById('napTimeSelector');
var napEvent = function () {
  napTime = napTimeSelector.value;
};
napTimeSelector.addEventListener('change', napEvent);

var lunchTime;
var lunchTimeSelector = document.getElementById('lunchTimeSelector');
var lunchEvent = function () {
  lunchTime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener('change', lunchEvent);