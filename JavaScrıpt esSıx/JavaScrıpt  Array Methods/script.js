
let counter = 0;

document.querySelector('button').addEventListener('click', () => {
  counter++;

  const Info = { Name: 'muhammed', Surname: 'küçük', Age: 21, Country: 'turkey' };
  const Furit = ['watermelon', 'apple', 'orange', 'mushroms'];

  document.querySelector('body').innerHTML = Furit.map((item) => `<p>${item}</p>`).join('');

  if (counter === 1) {
    console.log(Info);
    console.log(Furit);
  } else if (counter > 1) {
    alert('Bu işlem birden fazla kez gerçekleştirilemez.');
  }
});
