
let x = Number.EPSILON
console.log(x) // 1'den farklı olan en küçük sayıyı temsil eder

let y = Number.MIN_SAFE_INTEGER
console.log(y) // JavaScript'teki en küçük güvenli tam sayı değerini temsil eder

let z = Number.MAX_SAFE_INTEGER
console.log(z)  // JavaScript'teki en büyük güvenli tam sayı değerini temsil eder

console.log(Number.isInteger(10)) //  Argüman bir tamsayı ise yöntem true dödürür
console.log(Number.isInteger(10.5)) //  Argüman bir tamsayı ise yöntem true dödürür

console.log(Number.isSafeInteger(10)) // Güvenli bir tamsayı, tam olarak çift kesinlikli bir sayı olarak temsil edilebilen bir tamsayıdır true
console.log(Number.isSafeInteger(104486464)) // Güvenli bir tamsayı, tam olarak çift kesinlikli bir sayı olarak temsil edilebilen bir tamsayıdı false

console.log(isFinite(10/0)) // returns false
console.log(isFinite(10/1)) // returns ture 