
let NewArray = Array.from('ABCDEFG')  // yöntem, Array.from() uzunluk özelliğine sahip herhangi bir nesneden veya yinelenebilir herhangi bir nesneden bir Array nesnesi döndürür
let NewArrayKey = NewArray.keys() // yöntem keys() bir dizinin anahtarlarını içeren bir Dizi Yineleyici nesnesi döndürür

let NewArrayFind = NewArray.find(myFunction) // yöntem, find() bir test işlevinden geçen ilk dizi öğesinin değerini döndürür
function myFunction(value, index, array) {
    console.log(value, index, array)
}

