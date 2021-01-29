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

    if (position >= finish) {
        clearInterval(handler);
        sun.style.left = finish + "px";
        return;
    }
    sun.style.left = position + "px";
}

var sun = document.getElementById("sun"),
    fps = 60,
    duration = 2, // seconds
    start = 0, // pixel
    finish = (window.innerWidth / 2) - sun.clientWidth,
    distance = finish - start,
    increment = distance / (duration * fps),
    position = start,
    time = 0,
    handler = setInterval(move, 1000 / fps);