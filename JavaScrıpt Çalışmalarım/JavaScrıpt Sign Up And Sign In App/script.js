let sendbuttonDOM = document.querySelector("#sendbutton")
let usernameDOM = document.querySelector("#username")
let passwordDOM = document.querySelector("#password")
let emailDOM = document.querySelector("#email")

sendbuttonDOM.addEventListener("click", function (event) {
    event.preventDefault()
    if (usernameDOM.value) {
        console.log(usernameDOM.value)
    } else {
        alert("wrong username")
    } if (passwordDOM.value) {
        console.log(passwordDOM.value)
    } else {
        alert("wrong passwword")
    }
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }  
      // email kontrolü yapmak için bu fonksiyonu kullanabilirsiniz
      if (validateEmail(emailDOM.value)) {
        console.log(emailDOM.value)
      } else {
        alert("wrong email")
      } 
      localStorage.setItem("username", usernameDOM.value);
      localStorage.setItem("email", emailDOM.value);
      localStorage.setItem("password", passwordDOM.value);
      window.location.href = "sign in page.html";
})

// bu alandaki kodlar ne olduğunu açıklıyor

// // kayıt ekranı kodları 
// let sendbuttonDOM = document.querySelector("#sendbutton")
// let usernameDOM = document.querySelector("#username")
// let passwordDOM = document.querySelector("#password")
// let emailDOM = document.querySelector("#email")

// document.querySelector("#sendbutton").addEventListener("click", function (event) {
//     event.preventDefault() // sayfanın yenilenmesini engelle
//     if (usernameDOM.value) {
//         console.log(usernameDOM.value) // kullanıcı adını konsola yazdır
//     } else {
//         alert("wrong username") // kullanıcı adı girilmemişse uyarı ver
//     } 
//     if (passwordDOM.value) {
//         console.log(passwordDOM.value) // şifreyi konsola yazdır
//     } else {
//         alert("wrong passwword") // şifre girilmemişse uyarı ver
//     }
//     function validateEmail(email) { // emailin doğruluğunu kontrol eden bir fonksiyon
//         const re = /\S+@\S+\.\S+/;
//         return re.test(email);
//     }  
//     if (validateEmail(emailDOM.value)) {
//         console.log(emailDOM.value) // emaili konsola yazdır
//     } else {
//         alert("wrong email") // email doğru formatta değilse uyarı ver
//     } 
//     window.location.href = "sign in page.html"; // kayıt işlemi tamamlandığında sayfayı başka bir sayfaya yönlendir
// })

// localStorage.setItem("username", usernameDOM.value); // kullanıcı adını local storage'a kaydet
// localStorage.setItem("email", emailDOM.value); // emaili local storage'a kaydet
// localStorage.setItem("password", passwordDOM.value); // şifreyi local storage'a kaydet

// giriş ekranı kodlar 

// const usernameInput = document.querySelector("#username");
// const passwordInput = document.querySelector("#password");

// if (usernameInput && passwordInput) { // kullanıcı adı ve şifre inputları varsa
//     const registeredUsername = localStorage.getItem("username"); // kaydedilmiş kullanıcı adını local storage'dan al
//     const registeredPassword = localStorage.getItem("password"); // kaydedilmiş şifreyi local storage'dan al

//     const signInButton = document.querySelector(".btn"); // giriş butonunu seç
//     signInButton.addEventListener("click", () => { // giriş butonuna tıklandığında
//         const enteredUsername = usernameInput.value.trim(); // girilen kullanıcı adını al ve başındaki ve sonundaki boşlukları kaldır
//         const enteredPassword = passwordInput.value.trim(); // girilen şifreyi al ve başındaki ve sonundaki boşlukları kaldır

//         if (enteredUsername === registeredUsername && enteredPassword === registeredPassword) { // girilen kullanıcı adı ve şifre kaydedilen kullanıcı adı ve şifreyle aynıysa
//             console.log("Kullanıcı adı ve şifre doğru"); // konsola doğru olduğuna dair mesaj yazdır
//         } else {
//             console.warn("Kullanıcı adı veya şifre yanlış"); // konsola yanlış olduğuna dair uyarı yazdır
//         }
//     });
// }

// bu alandaki kodlar ne olduğunu açıklıyor