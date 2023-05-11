
const now = new Date()
const currentHour = now.getHours()
const currentMinute = now.getMinutes()
const currentSecond = now.getSeconds()

let create = document.createElement('p')
create.innerHTML = `saat : ${currentHour}:${currentMinute}:${currentSecond}`

let divDOM = document.querySelector('div')
let buttonDOM = document.querySelector('button')

document.querySelector('button').addEventListener("click", function () {
    let divDOM = document.querySelector('div')
    divDOM.append(create)
})