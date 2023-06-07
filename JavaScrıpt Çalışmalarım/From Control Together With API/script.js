
const usernameDOM = document.querySelector('#username')
const emailDOM = document.querySelector('#email')
const passwordDOM = document.querySelector('#password')
const buttonDOM = document.querySelector('button')

document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault()
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }  

    let counter = 0

    if (usernameDOM.value.length >= 6) {
        counter++
    } else {
        console.log('yanlış username bilgisi')
    } if (validateEmail(emailDOM.value)) {
        counter++
    } else {
        console.log('yanlış email bilgisi')
    } if (passwordDOM.value.length >= 8) {
        counter++
    } else {
        console.log('yanlış password bilgisi')
    }

    let user = usernameDOM.value
    let email = emailDOM.value
    let password = passwordDOM.value

    if (counter === 3) {
        const info = {user: `${user}`, password: `${password}`, email: `${email}`}
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(function(response) {
            if (response.ok) {
                console.log('Veri başarıyla gönderildi!');
            } else {
                console.log('Bir hata oluştu. Yanıt kodu:', response.status);
            }
        }) .catch(function(error) {
            console.log('Bir hata oluştu:', error.message);
          });
        } else {
        console.log('işlem gerçekleşmedi')
    }
    
})