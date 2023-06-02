
const createHere = document.querySelector('h4');

function start() {
    const date = new Date();
    const dateHours = date.getHours();

    if (dateHours >= 6 && dateHours < 12) {
        createHere.innerHTML = 'Good morning';
    } else if (dateHours >= 12 && dateHours < 17) {
        createHere.innerHTML = 'Good afternoon';
    } else if (dateHours >= 17 && dateHours < 21) {
        createHere.innerHTML = 'Good evening';
    } else {
        createHere.innerHTML = 'Good night';
    }
}