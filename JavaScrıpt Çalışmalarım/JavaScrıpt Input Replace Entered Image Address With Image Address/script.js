
let imageDOM = document.querySelector("#image")
let sendinputDOM = document.querySelector("#sendinput")
let changebuttonDOM = document.querySelector("#changebutton")

document.querySelector("#changebutton").addEventListener("click", function () {
    imageDOM.src = `${sendinputDOM.value}`
})