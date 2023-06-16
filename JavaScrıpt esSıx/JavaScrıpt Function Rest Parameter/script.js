
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

console.log(x) // rest parametresi (...) bir işlevin belirsiz sayıda bağımsız değişkeni bir dizi olarak ele almasına izin verir