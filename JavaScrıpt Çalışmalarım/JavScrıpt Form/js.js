
function start() {

    const emailDOM = document.querySelector('#email');
    const passwordDOM = document.querySelector('#password');
  
    const SiginName = localStorage.getItem('name') // I'dont need 
    const SiginSurame = localStorage.getItem('surname') // I'dont need 
    const SiginEmail = localStorage.getItem('email')
    const SigninAge = localStorage.getItem('age')
    const SiginPasswrod = localStorage.getItem('password')
    const latitude = localStorage.getItem('latitude')
    const longitude = localStorage.getItem('longitude')

    const chanceSignAge = Number(SigninAge)
    const chanceSignPassword = Number(SiginPasswrod)
    const chancelatitude = Number(latitude)
    const chancelongitude = Number(longitude)

    let counter = 0;
  
    document.querySelector('button').addEventListener('click', () => {

      if (emailDOM.value === SiginEmail) {
        counter++;
      } else if (!emailDOM.value) {
        console.log('Lütfen email alanını boş bırakmayınız.');
      } else {
        console.log('Üzgünüz, kayıtlı email adresi değil.');
      }
  
      if (passwordDOM.value === SiginPasswrod) {
        counter++;
      } else if (!passwordDOM.value) {
        console.log('Lütfen password alanını boş bırakmayınız.');
      } else {
        console.log('Üzgünüz, kayıtlı bir şifre değil.');
      }
  
      if (counter === 2) {

        const UserInfo = {
            name: SiginName,
            surname: SiginSurame,
            email:  SiginEmail,
            age: chanceSignAge,
            password: chanceSignPassword,
            latitude: chancelatitude,
            longitude: chancelongitude
        }

        const URL = 'https://jsonplaceholder.typicode.com/posts'

        fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(UserInfo)
        })

        .then(response => response.json())
        
        .then(result => {
            console.log('Bilgi başarıyla gönderildi', result)
        })
        
        .catch(error => {
            console.error(error);
        });

      }

    })

} start();