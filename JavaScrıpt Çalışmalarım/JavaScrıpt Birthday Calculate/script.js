
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  let changed = input.value;
  let day1 = new Date(changed);
  let day2 = new Date();

  if (!isNaN(day1.getTime())) {
    let farkMs = Math.abs(day2 - day1);
    let farkGun = Math.round(farkMs / (1000 * 60 * 60 * 24));
    console.log(farkGun);
  } else if (changed === '') {
    console.log('Boş bırakmayınız.');
  } else {
    console.log('Geçersiz tarih formatı.');
  }
})