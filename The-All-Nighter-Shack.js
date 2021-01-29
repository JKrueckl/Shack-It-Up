red = 132;
green = 169;
blue = 172;

titlefontred = 32;
titlefontgreen = 64;
titlefontblue = 81;

descfontred = 59;
descfontgreen = 105;
descfontblue = 120;

// x: percent
// t: current time,
// b: beginning value,
// c: change in value,
// d: duration
function easeInOutQuad(x, t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t + b;
    } else {
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
}

function move() {
    //position += increment;
    time += 1 / fps;
    position = easeInOutQuad(time * 100 / duration, time, start, finish, duration);
    red -= 1;
    green -= 1;
    blue -= 1;

    titlefontred += 1;
    titlefontgreen += 1;
    titlefontblue += 1;

    descfontred += 1;
    descfontgreen += 1;
    descfontblue += 1;

    if (position >= finish) {
        clearInterval(handler);
        sun.style.left = finish + "px";
        return;
    }
    sun.style.left = position + "px";
    $(".Top-Container").css("backgroundColor", "rgb(" + red.toString() + ", " + green.toString() + ", " + blue.toString() + ")");
    $("h1").css("color", "rgb(" + titlefontred.toString() + ", " + titlefontgreen.toString() + ", " + titlefontblue.toString() + ")");
    $("#title-desc").css("color", "rgb(" + descfontred.toString() + ", " + descfontgreen.toString() + ", " + descfontblue.toString() + ")");
}

var sun = document.getElementById("moon"),
    fps = 60,
    duration = 2, // seconds
    start = 0, // pixel
    finish = (window.innerWidth / 2) - sun.clientWidth,
    distance = finish - start,
    increment = distance / (duration * fps),
    position = start,
    time = 0,
    handler = setInterval(move, 1000 / fps);