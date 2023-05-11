let p = document.querySelector("p");
let b = ["hello", "sannu", "Ni hao", "Hallo", "ନମସ୍କାର", "olá", "merhaba", "Bonjour", "Sua s’dei", "Ciao", "Laba diena", "Yah sahs", "Bog", "Mingalarba", "Tungjatjeta", "Barev or parev", "Namaskar", "Privet", "Aloha", "Namaste", "Dia duit", "Tja", "Salem", "Salve"]

function wow() {
    for (index = 0; index < 1; index++) {
        let r = b[Math.floor(Math.random() * b.length)];
        p.innerHTML = r;
    }
}