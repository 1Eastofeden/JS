
const emailDOM = document.querySelector('#email')
const passwordDOM = document.querySelector('#password')
const signInbutton = document.querySelector('#signinbutton')

document.querySelector('#signinbutton').addEventListener('click', () => {
    if (emailDOM && passwordDOM) {
        const registeredName =  localStorage.getItem('name')
        const registeredSurName =  localStorage.getItem('surname')
        const registeredEmail = localStorage.getItem('email')
        const registeredPassword = localStorage.getItem('password')

        const enterEmailValue = emailDOM.value.trim()
        const enterPasswordValue = passwordDOM.value.trim()

        if (enterEmailValue === registeredEmail && enterPasswordValue === registeredPassword) {
            const UserAPInfo = {Name: `${registeredName}`, Surame: `${registeredSurName}`, Email: `${registeredEmail}`, Password: `${registeredPassword}`}
            // console.log(UserAPInfo)
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(UserAPInfo) 
            }) 
            .then(response => response.json())
            .then(result => {
                console.log('Bilgi başarıyla gönderildi', result)
            })
            .catch(error => {
                console.error(error);
            });
        } else {
            console.log(`Yanlış email : ${emailDOM.value} bilgisi`)
            console.log(`Yanlış şifre : ${passwordDOM.value} bilgisi`)
        }
    } else {
        alert('giriş yapılamadı')
    }
})