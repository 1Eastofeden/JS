
const hello = fetch('https://jsonplaceholder.typicode.com/users')
  .then((resp) => resp.json())
  .then((data) => {
    const input = document.querySelector('input');
    const button = document.querySelector('button');

    button.addEventListener('click', () => {
      const inputValue = input.value;
      const user = data.find((item) => item.name === inputValue);
      if (user) {
        console.log(user);
      }
    });
  });