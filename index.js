function showTime() {
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let period = "AM";

    if(h == 0) { // if the hour equals 0 then it becomes 12 (midnight)
        h = 12;
    }

    if(h > 12) { // if the hour is greater than 12 then subtract the hour from 12 to give you the pm time
        h -= 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + period;

    document.getElementById("displayClock").innerText = time;
    document.getElementById('displayClock').textContent = time;

    setTimeout(showTime, 1000);
}

showTime();