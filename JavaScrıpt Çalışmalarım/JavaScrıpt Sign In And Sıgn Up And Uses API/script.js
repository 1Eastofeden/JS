
/* Promiseler, JavaScript'te asenkron işlemleri yönetmek ve daha düzenli bir şekilde geri dönüş değerleri elde etmek için kullanılan bir yapıdır
   Promiseler, bir işlemin tamamlanması, başarılı olması veya hata alması gibi sonuçları temsil eder ve gelecekte gerçekleşecek bir değeri temsil eden bir nesnedir 
*/

// Proimse() üç farklı durumu tmesil eder 

/*  Beklemede (Pending): İşlem henüz tamamlanmamıştır ve sonuç hala beklenmektedir
    Çözülmüş (Fulfilled): İşlem başarıyla tamamlanmıştır ve sonuç değeri döndürülmüştür
    Reddedilmiş (Rejected): İşlem başarısız olmuştur ve bir hata nedeniyle sonuç döndürülmemiştir
*/

/* Bir promise nesnesi, bir işlemi yürüten ve sonucunu döndüren bir fonksiyonla oluşturulur
   Bu fonksiyon, iki parametre alır: resolve ve reject. resolve, işlemin başarıyla tamamlandığını ve bir değer döndürüleceğini belirtirken, reject işlemin başarısız olduğunu ve bir hata nedeniyle sonuç döndürülemediğini belirtir 
*/

// function checkLoginStatus() {
//     let list = [true, false];
//     let random = list[Math.floor(Math.random() * list.length)];
  
//     return new Promise((resolve, reject) => {
//       if (random === true) {
//         resolve('başarılı işlem');
//       } else if (random === false) {
//         reject('başarısız işlem');
//       }
//     });
//   }
  
//   checkLoginStatus()
//     .then((result) => {
//       console.log(result);
// })
//     .catch((error) => {
//       console.log(error);
// });  

const InputNameDOM = document.querySelector('#Name')
const InputSurNameDOM = document.querySelector('#SurName')
const InputEmailDOM = document.querySelector('#Email')
const InputPasswordDOM = document.querySelector('#Password')  
const ButtonsendButton = document.querySelector('#sendButton')

document.querySelector('#sendButton').addEventListener('click', () => {
    const RegexInputNameDOM = /\D/
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }  

    let counter = 0

    if (RegexInputNameDOM.test(InputNameDOM.value) && InputNameDOM.value.length >= 3) {
        counter++
    } else {
        console.log('Yanlış name bilgisi')       
    } if (RegexInputNameDOM.test(InputSurNameDOM.value) && InputSurNameDOM.value.length >= 3) {
        counter++
    } else {
        console.log('Yanlış surname bilgisi') 
    } if (validateEmail(InputEmailDOM.value)) {
        counter++
    } else {
        console.log('Yanlış e-mail bilgisi')
    } if (InputPasswordDOM.value && InputPasswordDOM.value.length >= 7) {
        counter++
    } else {
        console.log('Yanlış password-mail bilgisi')
    }

    if (counter === 4) {
        localStorage.setItem('name', InputNameDOM.value)
        localStorage.setItem('surname', InputSurNameDOM.value)
        localStorage.setItem('email', InputEmailDOM.value)
        localStorage.setItem('password', InputPasswordDOM.value)

        window.location.href = '/sign.html'

        

    } else {
        alert('işlem başarısız oldu')
    }
})