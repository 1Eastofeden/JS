
let text = 'hello my name is muhammed'
console.log(text.includes('hello')) // metinin içinde verilen değer varmı?
console.log(text.startsWith('hello')) // metin belirtiğim değer ile mi başlıyor?
console.log(text.endsWith('hello')) // metin belirtiğim değer ile mi bitiyor?


// const InputNameDOM = document.querySelector('#name')
// const InputSurnameDOM = document.querySelector('#surname')
// const InputEmailDOM = document.querySelector('#email')
// const InputPasswordDOM = document.querySelector('#password')
// const ButtonSendButtonDOM = document.querySelector('#sendbutton')

// document.querySelector('#sendbutton').addEventListener('click', () => {
//     const RegexInputNameDOM = /\D/
//     function validateEmail(email) {
//         const re = /\S+@\S+\.\S+/;
//         return re.test(email);
//     }

//     let counter = 0

//     if (RegexInputNameDOM.test(InputNameDOM.value) && InputNameDOM.value.length >= 4) {
//         counter++
//     } else {
//         console.log('üzgünüz yanlış isim')
//     } if (RegexInputNameDOM.test(InputSurnameDOM.value) && InputSurnameDOM.value.length >= 4) {
//         counter++
//     } else {
//         console.log('üzgünüz yanlış soy isim')
//     } if (validateEmail(InputEmailDOM.value)) {
//         counter++
//     } else {
//         console.log('üzgünüz kullanılmayan bir email girdiniz')
//     } if (InputPasswordDOM.value && InputPasswordDOM.value.length >= 8) {
//         counter++
//     } else {
//         console.log('üzgünüz lütfen daha uzun bir şifre oluşturunuz')
//     }

//     if (counter === 4) {
//         class Info {
//             constructor(Name, Surname, Email, Password) {
//                 this.name = Name
//                 this.surname = Surname
//                 this.email = Email
//                 this.password = Password
//             }
//         } 
//     let NewInfo = new Info(`${InputNameDOM.value}`, `${InputSurnameDOM.value}`, `${InputEmailDOM.value}`, `${InputPasswordDOM.value}`)
//     } else {
//         console.log('işlem başarısız lütfen tekrar deneyiniz')
//     }    


// })