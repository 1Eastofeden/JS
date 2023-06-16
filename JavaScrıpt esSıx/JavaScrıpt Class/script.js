
class Info {
    constructor(Name, Surname, Age, Islogin) {
        this.name = Name;
        this.surname = Surname;
        this.age = Age;
        this.islogin = Islogin;
    }

    present() {
        return `I'm ${this.age} years old.`;
    }
}

class NewInfo extends Info {
    constructor(Name, Surname, Age, Islogin) {
        super(Name, Surname, Age, Islogin); // Tüm parametreleri super'a geçirin
    }

    show() {
        return `Hello my name is ${this.name} ${this.surname} I'm ${this.age} years old and I'm ${this.islogin}`
    }
}

const myInfo = new NewInfo('muhammed', 'küçük', 21, true); // NewInfo sınıfını kullanarak bir örnek oluşturun
console.log(myInfo);
console.log(myInfo.present());
console.log(myInfo.show());
