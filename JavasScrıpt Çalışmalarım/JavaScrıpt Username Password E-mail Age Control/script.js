
let usernameDOM = document.querySelector("#username")
let emailDOM = document.querySelector("#email")
let passwordDOM = document.querySelector("#password")
let ageDOM = document.querySelector("#age")
let sendbuttonDOM = document.querySelector("#sendbutton")

document.querySelector("#sendbutton").addEventListener("click", function (event) {
    event.preventDefault()
    if (usernameDOM.value.length >= 8) {
        console.log("username :", usernameDOM.value)
    } else {
        console.log("wrong username info")
    } // username kontrolü 

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }  

    if (validateEmail(emailDOM.value)) {
        console.log("email : ", emailDOM.value)
    } else {
        console.log("wrong email info")
    } // email kontrolü

    let a = /[A-Z]/g

    if (passwordDOM.value.length >= 8 && passwordDOM.value.match(a)) {
        console.log("password : ", passwordDOM.value)
    } else {
        console.log("wrong password info")
    } // password kontrolü

    let regex = /[^0-9]/g;

    if (ageDOM.value >= 18 && ageDOM.value.replace(regex, "")) {
        console.log("age : ", ageDOM.value) 
    } else {
        console.log("wrong age info")
    } // age kontrolü
})