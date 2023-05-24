
// const input = document.querySelector('input')
// const button = document.querySelector('button')
// const span = document.querySelector('span')
// const spandel = document.querySelector('#span-1')

// document.querySelector('button').addEventListener('click', () => {
//     if (input.value) {
//         let create = document.createElement('p')
//         create.innerHTML = input.valuev  
//         span.appendChild(create)
//         let del = document.createElement('h6')
//         del.innerHTML = `<i class="fa-solid fa-trash"></i>`
//         spandel.appendChild(del)
//         const h6 = document.querySelector('h6')
//         document.querySelector('h6').addEventListener("click", () => {
//             create.remove()
//             del.remove()
//         })

//     } else {
//         let create = document.createElement('p')
//         create.innerHTML = 'boş ve ya hatalı giriş'
//         span.appendChild(create)
//     }
// })

const input = document.querySelector('input');
const button = document.querySelector('button');
const span = document.querySelector('span');

button.addEventListener('click', () => {
  if (input.value) {
    let create = document.createElement('div');
    create.classList.add('input-group');

    let text = document.createElement('p');
    text.textContent = input.value;
    create.appendChild(text);

    let del = document.createElement('h6');
    del.innerHTML = '<i class="fa-solid fa-trash"></i>';
    create.appendChild(del);

    del.addEventListener("click", () => {
      create.remove();
    });

    span.appendChild(create);
  } else {
    let create = document.createElement('p');
    create.textContent = 'Boş veya hatalı giriş';
    span.appendChild(create);
  }
});