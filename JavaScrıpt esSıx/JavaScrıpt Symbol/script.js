
let Info = {Name: 'muhammed', Surname: 'küçük', Age: 21, Country: 'turkey'}
let IDI = Symbol('ID')
Info[IDI] = 1564984122
console.log(Info) // başka hiçbir kodun yanlışlıkla erişemeyeceği benzersiz bir "gizli" tanımlayıcıyı temsil eder
