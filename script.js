var hr = document.getElementById("hr");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

function updateClock(){
    var now = new Date();
    var hour = now.getHours().toString();
    var minute = now.getMinutes().toString();
    var second = now.getSeconds().toString();
    hr.textContent = hour.padStart(2,"0");
    min.textContent = minute.padStart(2,"0");
    sec.textContent = second.padStart(2,"0");
}

setInterval(updateClock,1000);