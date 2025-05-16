// Set the date we're counting down to
var countDownDate = new Date("May 19, 2025 00:00:00").getTime();
          
function update_countdown() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    document.getElementById("days").style.display = 'none';
    document.getElementById("hours").style.display = 'none';
    document.getElementById("minutes").style.display = 'none';
    document.getElementById("seconds").style.display = 'none';
    
    document.getElementById("daysexpl").style.display = 'none';
    document.getElementById("hoursexpl").style.display = 'none';
    document.getElementById("minutesexpl").style.display = 'none';
    document.getElementById("secondsexpl").style.display = 'none';
    
    document.getElementById("playingtext").style.display = 'inline';
  }
}

// Update the count down every 1 second
var x = setInterval(function() { update_countdown(); }, 1000);