
const iconemenu = document.querySelector("#icone-1")
const div3 = document.querySelector("#div-3")

document.querySelector("#icone-1").addEventListener("mouseenter", function () {
    div3.style.visibility = "visible"

})

document.querySelector("#icone-1").addEventListener("mouseleave", function () {
    div3.style.visibility = "hidden"
})

document.querySelector("#div-3").addEventListener("mouseenter", function () {
        div3.style.visibility = "visible"
})

document.querySelector("#div-3").addEventListener("mouseleave", function () {
    div3.style.visibility = "hidden"
})
