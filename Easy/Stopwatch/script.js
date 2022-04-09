// Making a stopwatch using Javascript
// Hold the value of the stopwatch
let seconds = 0;
let minutes = 0;
let hours = 0;

// Hold the interval variable
let interval = null;

let variable = "stopped";

// Hold the display values
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

// Write the stopwatch function(logic to increment the time)
function stopWatch() {

    seconds++;

    if (seconds / 60 == 1){
        seconds = 0;
        minutes++;
    }
    if (minutes / 60 == 1){
        minutes = 0;
        hours++;
    }

}


// Add leading 0 to the display value if less than 10
if (seconds < 10){
    displaySeconds = "0" + seconds.toString();
}
else {
    displaySeconds = seconds;
}
if (minutes < 10){
    displayMinutes = "0" + minutes.toString();
}
else {
    displayMinutes = minutes;
}
if (hours < 10){
    displayHours = "0" + hours.toString();
}
else {
    displayHours = hours;
}
// Display the stopwatch
document.getElementById("timerdisplay").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;


// Start the stopwatch
function start() {
    if (variable == "stopped"){
        interval = setInterval(stopWatch, 1000);
        variable = "started";
    }
}
// Stop the stopwatch
function stop() {
    clearInterval(interval);
    variable = "stopped";
}
// Reset the stopwatch
function reset() {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    displaySeconds = 0;
    displayMinutes = 0;
    displayHours = 0;
    document.getElementById("timerdisplay").innerHTML = "00:00:00";
    variable = "stopped";
}