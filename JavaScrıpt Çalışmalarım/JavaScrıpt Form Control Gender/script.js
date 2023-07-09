
const inputName = document.querySelector('#name')
const inputSurname = document.querySelector('#surname')
const inputEmail = document.querySelector('#email')
const inputTelephone = document.querySelector('#telephone')
const inputAge = document.querySelector('#age')
const sendbutton = document.querySelector('#sendbutton')
const gendermale = document.querySelector('#male')
const genderfamale = document.querySelector('#famale')
const genderother = document.querySelector('#other')

let gender = 0
let realgender = 'male'

document.querySelector('#male').addEventListener('click', () => {
    gendermale.style.color = '#6b6cff'
    genderfamale.style.color = '#000000'
    genderother.style.color = '#000000'
    gender++
    realgender = 'male'
})
    
document.querySelector('#famale').addEventListener('click', () => {
    gendermale.style.color = '#000000'
    genderfamale.style.color = '#6b6cff'
    genderother.style.color = '#000000'
    gender++
    realgender = 'famale'
})
    
document.querySelector('#other').addEventListener('click', () => {
    gendermale.style.color = '#000000'
    genderfamale.style.color = '#000000'
    genderother.style.color = '#6b6cff'
    gender++
    realgender = 'other'
})

document.querySelector('#sendbutton').addEventListener('click', (event) => {
    event.preventDefault()
    let counter = 0
    let controlstirng = /^[a-zA-ZçğıöşüÇĞİÖŞÜ]+$/
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    function isValidPhoneNumber(phoneNumber) {
        var regex = /^\d{11}$/; 
        return regex.test(phoneNumber);
    }

    if (controlstirng.test(inputName.value)) {
        counter++
    } else {
        inputName.style.borderColor = 'red'
        setTimeout(() => {
            inputName.style.borderColor = '#ccc'
        },2000)
    } if (controlstirng.test(inputSurname.value)) {
        counter++
    } else {
        inputSurname.style.borderColor = 'red'
        setTimeout(() => {
            inputSurname.style.borderColor = '#ccc'
        },2000)
    } if (validateEmail(inputEmail.value)) {
        counter++
    } else {
        inputEmail.style.borderColor = 'red'
        setTimeout(() => {
            inputEmail.style.borderColor = '#ccc'
        },2000)
    } if (!isNaN(inputTelephone.value) && isValidPhoneNumber(inputTelephone.value)) {
        counter++
    } else {
        inputTelephone.style.borderColor = 'red'
        setTimeout(() => {
            inputTelephone.style.borderColor = '#ccc'
        },2000)
    } if (!isNaN(inputAge.value) && inputAge.value >= 18) {
        counter++
    } else {
        inputAge.style.borderColor = 'red'
        setTimeout(() => {
            inputAge.style.borderColor = '#ccc'
        },2000)
    } if (gender > 0) {
        counter++
    } else {
        gendermale.style.color = 'red'
        genderfamale.style.color = 'red'
        genderother.style.color = 'red'
        setTimeout(() => {
            gendermale.style.color = 'black'
            genderfamale.style.color = 'black'
            genderother.style.color = 'black'
        } ,2000)
    }

    if (counter === 6) {
        const user = {
            name: inputName.value,
            surname: inputSurname.value,
            email: inputEmail.value,
            phone: inputTelephone.value,
            age: inputAge.value,
            gender: realgender
        } 
        console.log(user)
    }
})