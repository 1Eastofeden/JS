
const nameDOM = document.querySelector('#name')
const surnameDOM = document.querySelector('#surname')
const usernameDOM = document.querySelector('#username')
const emailDOM = document.querySelector('#email')
const telephoneDOM = document.querySelector('#telephone')
const passwordDOM = document.querySelector('#password')
const passwordagainDOM = document.querySelector('#passwordagain')
const sendbutton = document.querySelector('#sendbutton')

document.querySelector('#sendbutton').addEventListener('click', () => {

    const Name = nameDOM.value.trim()
    const Surname = surnameDOM.value.trim()
    const Username = usernameDOM.value.trim()
    const Email  = emailDOM.value.trim()
    const Telephone  = telephoneDOM.value.trim()
    const Password  = passwordDOM.value.trim()
    const Passwordagain  = passwordagainDOM.value.trim()

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    
    let counter = 0

    const regex = /^(?=.*\d)(?=.*[A-Z]).+$/;

    if (Name === '') {
        nameDOM.style.borderColor = 'red'
        nameDOM.placeholder = 'Boş bilgi!'
        setTimeout(() => {
            nameDOM.style.borderColor = 'black'
            nameDOM.placeholder = 'First Name'
        } ,3000) 
    } else if (!isNaN(parseFloat(Name)) && isFinite(Name)) {
        nameDOM.style.borderColor = 'red'
        nameDOM.value = 'Rakam bilgisi!'
        setTimeout(() => {
            nameDOM.value.remove()
            nameDOM.style.borderColor = 'black'
            nameDOM.placeholder = 'First Name'
        } ,3000) 
    } else {
        counter++
    } if (Surname === '') {
        surnameDOM.style.borderColor = 'red'
        surnameDOM.placeholder = 'Boş bilgi!'
        setTimeout(() => {
            surnameDOM.style.borderColor = 'black'
            surnameDOM.placeholder = 'Last Name'
        } ,3000) 
    } else if (!isNaN(parseFloat(Surname)) && isFinite(Surname)) {
        surnameDOM.style.borderColor = 'red'
        surnameDOM.value = 'Rakam bilgisi!'
        setTimeout(() => {
            surnameDOM.value.remove()
            surnameDOM.style.borderColor = 'black'
            surnameDOM.placeholder = 'Last Name'
        } ,3000) 
    } else {
        counter++
    } if (Username === '') {
        usernameDOM.style.borderColor = 'red'
        usernameDOM.placeholder = 'Boş bilgi'
        setTimeout(() => {
            usernameDOM.style.borderColor = 'black'
            usernameDOM.placeholder = 'Username'
        } ,3000) 
    } else if (regex.test(Username) && Username.length > 6) {
        counter++
    } else if (regex.test(Username) != Username) {
        usernameDOM.style.borderColor = 'red'
        usernameDOM.value = 'En az 1 büyük harf ve 1 rakam içeren username seçin!'
        setTimeout(() => {
            usernameDOM.value.remove()
            usernameDOM.style.borderColor = 'black'
            usernameDOM.placeholder = 'Username'
        } ,3000) 
    } if (validateEmail(Email)) {
        counter++
    } else if (Email === '') {
        emailDOM.style.borderColor = 'red'
        emailDOM.placeholder = 'Boş bilgi'
        setTimeout(() => {
            emailDOM.style.borderColor = 'black'
            emailDOM.placeholder = 'E-mail'
        } ,3000)
    } else if (!isNaN(Email)) {
        emailDOM.style.borderColor = 'red'
        emailDOM.value = 'Rakam bilgisi!'
        setTimeout(() => {
            emailDOM.value.remove()
            emailDOM.style.borderColor = 'black'
            emailDOM.placeholder = 'E-mail'
        } ,3000)
    } else if (validateEmail(Email) != Email) {
        emailDOM.style.borderColor = 'red'
        emailDOM.value = 'Geçersiz email!'
        setTimeout(() => {
            emailDOM.value.remove()
            emailDOM.style.borderColor = 'black'
            emailDOM.placeholder = 'E-mail'
        } ,3000)
    } if (!isNaN(parseFloat(Telephone)) && Telephone.length >= 11) {
        counter++
    } else if (Telephone === '') {
        telephoneDOM.style.borderColor = 'red'
        telephoneDOM.placeholder = 'Boş bilgi!'
        setTimeout(() => {
            telephoneDOM.style.borderColor = 'black'
            telephoneDOM.placeholder = 'Telephone'
        } ,3000)
    } else if (typeof Telephone === 'string') {
        telephoneDOM.style.borderColor = 'red'
        telephoneDOM.value = 'Harf bilgisi!'
        setTimeout(() => {
            telephoneDOM.value.remove()
            telephoneDOM.style.borderColor = 'black'
            telephoneDOM.placeholder = 'Telephone'
        } ,3000)
    } if (regex.test(Password) && Password.length >= 8) {
        counter++
    } else if (regex.test(Password) != Password) {
        passwordDOM.style.borderColor = 'red'
        passwordDOM.value = 'En az 1 rakam ve 1 harf kabul edilir!'
        setTimeout(() => {
            passwordDOM.value.remove()
            passwordDOM.style.borderColor = 'black'
            passwordDOM.placeholder = 'Password'
        } ,3000)
    } else if (Password === '') {
        passwordDOM.style.borderColor = 'red'
        passwordDOM.placeholder = 'Boş bilgi!'
        setTimeout(() => {
            passwordDOM.style.borderColor = 'black'
            passwordDOM.placeholder = 'Password'
        } ,3000)
    } else if (Password.length < 8) {
        passwordDOM.style.borderColor = 'red'
        passwordDOM.value = 'En az 8 karakter ve ya daha fazlası içeren bir password seçin!'
        setTimeout(() => {
            passwordDOM.value.remove()
            passwordDOM.style.borderColor = 'black'
            passwordDOM.placeholder = 'Password'
        } ,3000)
    } if (Passwordagain === Password) {
        counter++
    } if (Passwordagain === '') {
        passwordagainDOM.style.borderColor = 'red'
        passwordagainDOM.placeholder = 'Boş bilgi!'
        setTimeout(() => {
            passwordagainDOM.style.borderColor = 'black'
            passwordagainDOM.placeholder = 'Password'
        } ,3000)
    } else if (Passwordagain != Password) {
        passwordagainDOM.style.borderColor = 'red'
        passwordagainDOM.value = 'Lütfen password bilgisini onaylayın!'
        setTimeout(() => {
            passwordagainDOM.value.remove()
            passwordagainDOM.style.borderColor = 'black'
            passwordagainDOM.placeholder = 'Password'
        } ,3000)
    }

    if (counter === 7) {

        localStorage.setItem('name', Name)
        localStorage.setItem('surname', Surname)
        localStorage.setItem('username', Username)
        localStorage.setItem('email', Email)
        localStorage.setItem('telephone', Telephone)
        localStorage.setItem('passwrod', Password)
        
        let time = new Date()
        localStorage.setItem('year', time.getUTCFullYear())
        localStorage.setItem('month', time.getMonth())
        localStorage.setItem('day', time.getDay())
        localStorage.setItem('hourser', time.getHours())
        localStorage.setItem('minutes', time.getMinutes())
        localStorage.setItem('seconds', time.getSeconds())
        localStorage.setItem('miliseconds', time.getMilliseconds())

        window.location.href = '/pagetwo.html'

    } else if (counter === 6) {
        console.log('başarısız 1 işlemler var')
    } else if (counter === 5) {
        console.log('başarısız 2 işlemler var')
    } else if (counter === 4) {
        console.log('başarısız 3 işlemler var')
    } else if (counter === 3) {
        console.log('başarısız 4 işlemler var')
    } else if (counter === 2) {
        console.log('başarısız 5 işlemler var')
    } else if (counter === 1) {
        console.log('başarısız 6 işlemler var')
    } else {
        console.log('tüm işlemler başarısız')
    }

})

document.querySelector('#sendbutton').addEventListener('mouseenter', () => {
    img2.src = 'https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535d68c6b2498a0c2cbf6a_peep-101.svg'
})

document.querySelector('#sendbutton').addEventListener('mouseleave', () => {
    img2.src = 'https://assets.website-files.com/5e51c674258ffe10d286d30a/5e53560d9b55b04007535350_peep-38.svg'
})

