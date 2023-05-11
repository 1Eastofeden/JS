
const rockDOM = document.querySelector("#rock")
const paperDOM = document.querySelector("#paper")
const scissorsDOM = document.querySelector("#scissors")

const rockpaperscissprs = ["rock", "paper", "scissors"] 


document.querySelector("#rock").addEventListener("click", function () {
    const random =  rockpaperscissprs[Math.floor(Math.random() * rockpaperscissprs.length)]
    if (random === rockpaperscissprs[1]) {
        console.log("computer answer : paper", "computer win")
    } else if (random === rockpaperscissprs[0]) {
        console.log("computer answer : rock", "nobody win")
    } else {
        console.log("computer answer : scissors", "You win")
    }
})

document.querySelector("#paper").addEventListener("click", function () {
    const random =  rockpaperscissprs[Math.floor(Math.random() * rockpaperscissprs.length)]
    if (random === rockpaperscissprs[2]) {
        console.log("computer answer : scissors", "computer win")
    } else if (random === rockpaperscissprs[1]) {
        console.log("computer answer : paper", "nobody win")
    } else {
        console.log("computer answer : rock", "You win")
    }
})

document.querySelector("#scissors").addEventListener("click", function () {
    const random =  rockpaperscissprs[Math.floor(Math.random() * rockpaperscissprs.length)]
    if (random === rockpaperscissprs[0]) {
        console.log("computer answer : rock", "computer win")
    } else if (random === rockpaperscissprs[2]) {
        console.log("computer answer : scissors", "nobody win")
    } else {
        console.log("computer answer : paper", "You win")
    }
})