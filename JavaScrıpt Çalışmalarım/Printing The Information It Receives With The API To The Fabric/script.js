
// const div = document.querySelector('div');

// const list = {
//     name: 'muhammed',
//     lastname: 'küçük',
//     age: 21,
//     from: 'turkey'
// };

// for (const key in list) {
//     const element = document.createElement('p');
//     element.innerHTML = `${key}: ${list[key]}`;
//     div.append(element);
// }

// const div = document.querySelector('div');

// const list = {
//     name: 'muhammed',
//     lastname: 'küçük',
//     age: 21,
//     from: 'turkey'
// };

// Object.keys(list).forEach(key => {
//     const element = document.createElement('p');
//     element.innerHTML = `${key}: ${list[key]}`;
//     div.appendChild(element);
// }); // forEach ile list key() value() sinin açılımı

const div = document.querySelector('div');

fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(info => {
        const response = JSON.stringify(info);
        Object.keys(info).forEach(key => {
            const element = document.createElement('p');
            element.innerHTML = `${key}: ${info[key]}`;
            div.appendChild(element);
        });
    })
    .catch(error => {
        console.error('Hata:', error);
    });