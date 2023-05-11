
let searchDOM = document.querySelector("#search")
let sendbuttonDOM = document.querySelector("#sendbutton")

document.querySelector("#sendbutton").addEventListener("click", function (event) {
    event.preventDefault()
    let allvalue = searchDOM.value
    window.location.href = `${allvalue}`
})