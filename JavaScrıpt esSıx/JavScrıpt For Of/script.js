
class Info {
    constructor(Name, Surname) {
        this.name = Name;
        this.surname = Surname;
    }

    *[Symbol.iterator]() {
        yield this.name;
        yield this.surname;
    }
}

const NewInfo = new Info('muhammed', 'küçük');

for (let save of NewInfo) {
    console.log(save);
}

// function start() {
//     const Info = {Name: 'muhammed', Surname: 'küçük', Age: 21, Country: 'turkey'}

//     for (let key in Info) {
//         console.log(Info[key])
//     }

// } start()

// function start() {
//     const Info = ['muhammed', 'küçük', 21, 'turkey']

//     let open = Info.forEach(item => {
//         console.log(item)
//     })

// } start()