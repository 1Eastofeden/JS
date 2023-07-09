
const usernameoremailDOM = document.querySelector('#usernameoremail')
const passwordDOM = document.querySelector('#password')
const sendbuttonDOM = document.querySelector('#sendbutton')

document.querySelector('#sendbutton').addEventListener('click', () => {

    const Name = localStorage.getItem('name')
    const Surname = localStorage.getItem('surname')
    const Username =  localStorage.getItem('username')
    const Email =  localStorage.getItem('email')
    const Telephone = localStorage.getItem('telephone')
    const Password = localStorage.getItem('password')
    const Year = localStorage.getItem('year')
    const Day = localStorage.getItem('day')
    const Month = localStorage.getItem('month')
    const Hourse = localStorage.getItem('hourser')
    const Minutes = localStorage.getItem('minutes')
    const Seconds = localStorage.getItem('seconds')
    const Miliseconds = localStorage.getItem('miliseconds')

    let controlUsername =  localStorage.getItem('username')
    let controlEmail =  localStorage.getItem('email')
    let controlPassword =  localStorage.getItem('passwrod')

    let counter = 0

    if (usernameoremailDOM.value === controlUsername  || usernameoremailDOM.value === controlEmail) {
        counter++
    } else if (usernameoremailDOM.value != controlUsername) {
        usernameoremailDOM.style.borderColor = 'red'
        usernameoremailDOM.value = 'Yanlış bilgi!'
        setTimeout(() => {
            usernameoremailDOM.value.remove()
            usernameoremailDOM.style.borderColor = 'black'
            usernameoremailDOM.placeholder = 'Username or E-mail'
        },3000)
    } else if (usernameoremailDOM.value != controlEmail) {
        usernameoremailDOM.style.borderColor = 'red'
        usernameoremailDOM.value = 'Yanlış bilgi!'
        setTimeout(() => {
            usernameoremailDOM.value.remove()
            usernameoremailDOM.style.borderColor = 'black'
            usernameoremailDOM.placeholder = 'Username or E-mail'
        },3000)
    } else if (usernameoremailDOM.value === '') {
        usernameoremailDOM.style.borderColor = 'red'
        usernameoremailDOM.value = 'Boş bilgi!'
        setTimeout(() => {
            usernameoremailDOM.value.remove()
            usernameoremailDOM.style.borderColor = 'black'
            usernameoremailDOM.placeholder = 'Username or E-mail'
        },3000)
    } else {
        usernameoremailDOM.style.borderColor = 'red'
        usernameoremailDOM.value = 'Yanlış bilgi!'
        setTimeout(() => {
            usernameoremailDOM.value.remove()
            usernameoremailDOM.style.borderColor = 'black'
            usernameoremailDOM.placeholder = 'Username or E-mail'
        },3000)
    } if (passwordDOM.value === controlPassword) {
        counter++
    } else if (passwordDOM.value != controlPassword)  {
        passwordDOM.style.borderColor = 'red'
        passwordDOM.value = 'Yanlış bilgi!'
        setTimeout(() => {
            passwordDOM.value.remove()
            passwordDOM.style.borderColor = 'black'
            passwordDOM.placeholder = 'Password'
        },3000)
    } else {
        passwordDOM.style.borderColor = 'red'
        passwordDOM.value = 'Yanlış bilgi!'
        setTimeout(() => {
            passwordDOM.value.remove()
            passwordDOM.style.borderColor = 'black'
            passwordDOM.placeholder = 'Password'
        },3000)
    }

    if (counter === 2) {
        const user = {
            Name:  Name,
            Surname: Surname,
            Username: Username,
            Email: Email,
            Telephone: Telephone,
            Password: Password,
            Year: Year,
            Month: Month,
            Day: Day,
            Hourse: Hourse,
            Minutes: Minutes,
            Seconds: Seconds,
            Miliseconds: Miliseconds
        }

        console.log(user)

        const URL = 'https://jsonplaceholder.typicode.com/posts'

        fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }) .then(response => {
            response.json()
        }) .then(result => {
            console.log('Bilgi başarıyla gönderildi', result)
        }).catch(error => {
            console.error(error);
        })
    } 

})

document.querySelector('#sendbutton').addEventListener('mouseenter', () => {
    img2.src = 'https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535b1d67293aaf6b5e7a33_peep-81.svg'
})

document.querySelector('#sendbutton').addEventListener('mouseleave', () => {
    img2.src = 'https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535d314600800f758ffa34_peep-99.svg'
})
