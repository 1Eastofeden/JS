// TODO : JS TO-DO list

let todoDOM = document.querySelector("#todo")
let createboxDOM = document.querySelector("#createbox")
let todobuttonDOM = document.querySelector("#todobutton")

document.querySelector("#todobutton").addEventListener("click", missons)

function missons(event) {
    event.preventDefault()
    if (todoDOM.value) {
        let create = document.createElement('div')
        create.innerHTML = `<li>${todoDOM.value}</li>`
        createboxDOM.append(create)
    }   else {
        alert("boş bilgi girdiniz")
    }
}