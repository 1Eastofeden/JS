
const text = document.querySelector('h4');

let color  = ["#778899", "#b9d3ee", "#4a804d", "#8b658b", "#a0522d", "#8b7765", "#cdc9a5", "#e6e6fa", "#8470ff", "#7fffd4"]

let counter = 60;
let intervalId = setInterval(() => {
    counter--;
    text.innerHTML = counter;

    let randomColor = color[Math.floor(Math.random() * color.length)];
    text.style.color = randomColor;

    if (counter === 0) {
        clearInterval(intervalId);
    }
}, 1000);
