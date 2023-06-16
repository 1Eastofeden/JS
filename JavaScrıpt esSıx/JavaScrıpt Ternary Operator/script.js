
// let list = [true, false] 

// function Welcome() {
//     document.querySelector('h1').innerHTML = 'Welcome'
// }

// function AreYouLogIn() {
//     let random = list[Math.floor(Math.random() * list.length)]

//     if (random === true) {
//         Welcome()
//     } else if (random === false) {
//         alert('giriş yapınız önce lütfen')
//     }
// }

// AreYouLogIn()

let list = [true, false];
let random = list[Math.floor(Math.random() * list.length)];

function start() {
    function AreYouLogIn(x, y) {
        if (random === true) {
            return x = true;
        } else if (random === false) {
            return y = false;
        }
    }

    let authenticated = AreYouLogIn();
    authenticated ? turefunction() : flasefunction()

    /* authenticated değişkeni, AreYouLogIn() işlevinin sonucunu alır. Bu, true veya false değerlerinden birini içerir
       Ardından, authenticated durumuna bağlı olarak turefunction() veya flasefunction() işlevi çağrılır
       turefunction() işlevi, "giriş yapıldı" mesajını konsola yazdırır
       flasefunction() işlevi, "giriş başarısız" mesajını konsola yazdırır
       Sonuç olarak, authenticated durumuna bağlı olarak turefunction() veya flasefunction() işlevleri çağrılır ve konsola ilgili mesajlar yazdırılır
       Bu, kullanıcının giriş durumuna göre farklı işlemlerin gerçekleşmesini sağlar 
    */

    function turefunction() {
        console.log('giriş yapıldı')
    }

    function flasefunction() {
        console.log('giriş başarısız')
    }
}

start();