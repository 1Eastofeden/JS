
const h3 = document.querySelector('h3');
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let counter = 0;
let intervalId = null;

// Sayaç fonksiyonu
function incrementCounter() {
    counter++;
    h3.innerHTML = counter;
}

// Start butonuna tıklandığında çalışacak fonksiyon
function startCounter() {
    intervalId = setInterval(incrementCounter, 1000);
}

// Stop butonuna tıklandığında çalışacak fonksiyon
function stopCounter() {
    clearInterval(intervalId);
}

// Reset butonuna tıklandığında çalışacak fonksiyon
function resetCounter() {
    counter = 0;
    h3.innerHTML = counter;
}

// Start butonuna click event'i
start.addEventListener("click", function () {
    startCounter();
});

// Stop butonuna click event'i
stop.addEventListener("click", function () {
    stopCounter();
});

// Reset butonuna click event'i
reset.addEventListener("click", function () {
    stopCounter();
    resetCounter();
});

