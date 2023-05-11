
let colorbodyDOM = document.querySelector("#colorbody")
let colorinputDOM = document.querySelector("#colorinput")
let colorbuttonDOM = document.querySelector("#colorbutton")

document.querySelector("#colorbutton").addEventListener("click", wow)

function wow() {
    for (up = 0; up < 1; up++) {
        if (colorinputDOM.value) {
            colorbodyDOM.style.background = `${colorinputDOM.value}`
        } else {
            alert("wrong info")
        }
    }
}