
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const ageInput = document.querySelector('#age');

document.querySelector('#sendbutton').addEventListener('click', () => {
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function onlyLetters(input) {
        var letters = /^[A-Za-z]+$/;
        return letters.test(input);
    }

    let y = parseFloat(ageInput.value);

    let counter = 0;

    if (onlyLetters(usernameInput.value) && usernameInput.value.length >= 4) {
        counter++;
    } else {
        console.log('username bilgisi yanlış lütfen 4 karakterden büyük ve sadece harf ile oluşan username ler kullanın');
    }

    if (validateEmail(emailInput.value) || emailInput.value) {
        counter++;
    } else {
        console.log('email bilgisi yanlış lütfen doğru bir email kullanın');
    }

    if (passwordInput.value || passwordInput.value.length >= 8) {
        counter++;
    } else {
        console.log('password bilgisi yanlış lütfen 8 karakterden büyük bir şifre kullanın');
    }

    if (!isNaN(y) || y >= 18) {
        counter++;
    } else {
        console.log('yanlış age bilgisi üzgünüz yaşınız 18\'den küçük');
    }

    if (counter === 4) {
        let now = new Date();
        let Year = now.getFullYear();
        let Mounth = now.getMonth();
        let Day = now.getDay();
        let Hourse = now.getHours();
        let Minutes = now.getMinutes();
        let Seconds = now.getSeconds();

        localStorage.setItem('username', usernameInput.value);
        localStorage.setItem('email', emailInput.value);
        localStorage.setItem('password', passwordInput.value);
        localStorage.setItem('age', ageInput.value);

        localStorage.setItem('year', Year);
        localStorage.setItem('mounth', Mounth);
        localStorage.setItem('day', Day);
        localStorage.setItem('hourse', Hourse);
        localStorage.setItem('minutes', Minutes);
        localStorage.setItem('seconds', Seconds);

        console.log('başarılı bir şekilde kayıt oluşturuldu');

        window.location.href = '/girişyap.html';
    }
});