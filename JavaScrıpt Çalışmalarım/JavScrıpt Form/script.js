
const nameDOM = document.querySelector('#name');
const surnameDOM = document.querySelector('#surname');
const emailDOM = document.querySelector('#email');
const ageDOM = document.querySelector('#age');
const passwordDOM = document.querySelector('#password');
const button = document.querySelector('button');

function start() {
  const regex = /^[a-zA-Z]+$/;
  const regextwo = /^[a-zA-ZğĞıİçÇşŞüÜöÖ]+$/;

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  document.querySelector('button').addEventListener('click', () => {
    let counter = 0;
    const parseage = parseInt(ageDOM.value);

    if (!nameDOM.value) {
      console.log('Lütfen isim alanını doldurunuz');
    } else if (!regex.test(nameDOM.value) || nameDOM.value.length < 4) {
      console.log('Geçersiz isim');
    } else {
      counter++;
    }

    if (!surnameDOM.value) {
      console.log('Lütfen soyisim alanını doldurunuz');
    } else if (!regextwo.test(surnameDOM.value) || surnameDOM.value.length < 4) {
      console.log('Geçersiz soyisim');
    } else {
      counter++;
    }

    if (!emailDOM.value) {
      console.log('Lütfen e-posta alanını doldurunuz');
    } else if (!validateEmail(emailDOM.value)) {
      console.log('Geçersiz e-posta');
    } else {
      counter++;
    }

    if (!ageDOM.value) {
      console.log('Lütfen yaş alanını doldurunuz');
    } else if (isNaN(parseage) || parseage < 18) {
      console.log('Yaşınız geçerli değil');
    } else {
      counter++;
    }

    if (!passwordDOM.value) {
      console.log('Lütfen şifre alanını doldurunuz');
    } else if (passwordDOM.value.length < 8) {
      console.log('Geçersiz şifre');
    } else {
      counter++;
    }

    if (counter === 5) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;

          const NameLoc = nameDOM.value;
          const SurnameLoc = surnameDOM.value;
          const EmailLoc = emailDOM.value;
          const AgeLoc = parseage;
          const PasswordLoc = passwordDOM.value;
          const A = latitude;
          const B = longitude;

          localStorage.setItem('name', NameLoc);
          localStorage.setItem('surname', SurnameLoc);
          localStorage.setItem('email', EmailLoc);
          localStorage.setItem('age', AgeLoc);
          localStorage.setItem('password', PasswordLoc);
          localStorage.setItem('latitude', A);
          localStorage.setItem('longitude', B);

          window.location.href = '/html.html';
        });
      } else {
        const NameLoc = nameDOM.value;
        const SurnameLoc = surnameDOM.value;
        const EmailLoc = emailDOM.value;
        const PasswordLoc = passwordDOM.value;

        localStorage.setItem('name', NameLoc);
        localStorage.setItem('surname', SurnameLoc);
        localStorage.setItem('email', EmailLoc);
        localStorage.setItem('password', PasswordLoc);
        window.location.href = '/html.html';
      }
    } else {
      console.log('Lütfen tüm alanları doldurunuz');
    }
  });
}

start();
