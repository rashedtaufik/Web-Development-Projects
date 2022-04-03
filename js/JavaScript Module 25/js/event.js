function makeGreen() {
    document.body.style.backgroundColor = 'green';
}
// JS by the make red button..(2nd step)
const redButton = document.getElementById('make-red-button');
redButton.onclick = makeRed;
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// handle event using anonymous function (makeYellow)..3rd step
const yellowButton = document.getElementById('make-yellow-button');
yellowButton.onclick = function () {
    document.body.style.backgroundColor = 'yellow';
}

// hangle by using addEventListener
const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', makeGoldenRod);
function makeGoldenRod() {
    docomunt.body.style.backgroundColor = 'goldenRod';
}