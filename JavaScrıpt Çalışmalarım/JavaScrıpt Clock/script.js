

const now = new Date()
const currentHour = now.getHours()
const currentMinute = now.getMinutes()
const currentSecond = now.getSeconds()

let create = document.createElement('p')
create.innerHTML = `${currentHour}/${currentMinute}/${currentSecond}`

let div = document.querySelector('div')
document.addEventListener('DOMContentLoaded', wow)

function wow()  {
    div.append(create)   
}