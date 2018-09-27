function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    //adds the time into the id 'time'
    document.getElementById('timefont').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
    //creates the background color based on the hex code that pertains to the exact time.
    document.getElementById('wrapper').style.backgroundColor = "#" + h + m + s; 
    document.getElementById('time').style.margin = "200px auto";
    document.getElementById('timefont').style.margin = "60px auto"
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


window.addEventListener('load', startTime)




