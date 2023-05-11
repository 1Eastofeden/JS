// form control

let emailDOM = document.querySelector("#email")
let usernameDOM = document.querySelector("#username")
let passwordDOM = document.querySelector("#password")
let sendbuttonDOM = document.querySelector("#sendbutton")

let usernameboxDOM = document.querySelector("#usernamebox")
let emailboxDOM = document.querySelector("#emailbox")
let passwordboxDOM = document.querySelector("#passwordbox")

document.querySelector("#sendbutton").addEventListener("click", function (event) {
    event.preventDefault()    
    let a = /[A-Z]/g
    
    if (usernameDOM.value.length >= 8) {
        console.log("username : ", usernameDOM.value)
    } else {
        let createUsername = document.createElement('p')
        createUsername.innerHTML = `<p>wrong username</p>`
        usernameboxDOM.appendChild(createUsername)
    } 
    
    if (passwordDOM.value.length >= 8 && passwordDOM.value.match(a)) {
        console.log("password : ", passwordDOM.value)
    } else {
        let createPassword = document.createElement('p')
        createPassword.innerHTML = `<p>wrong password</p>`
        passwordboxDOM.appendChild(createPassword)
    }
    
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }  
    
    if (validateEmail(emailDOM.value)) {
        console.log(emailDOM.value)
    } else {
        let createEmail = document.createElement('p')
        createEmail.innerHTML = `<p>wrong email</p>`
        emailboxDOM.appendChild(createEmail)
    } 
})
