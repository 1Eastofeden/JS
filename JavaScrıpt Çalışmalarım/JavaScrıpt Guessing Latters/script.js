
const text = document.querySelector('h4');

function start() {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let randomIndex = Math.floor(Math.random() * letters.length);
  let randomLetter = letters.charAt(randomIndex);
  text.innerHTML = randomLetter;
}

start();

document.addEventListener('keydown', function(event) {
  const pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
  const currentLetter = text.innerHTML.toLowerCase();
  
  if (pressedKey === currentLetter) {
    console.log('Harf eşleşti!');
    start(); // Rastgele yeni harf üret
  }
});