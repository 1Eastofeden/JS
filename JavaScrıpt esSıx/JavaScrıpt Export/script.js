
import { Name, SurName } from './User.js';

function start() {
    const MyName = new Name('muhammed');
    const MySurName = new SurName('küçük');
    const body = document.querySelector('body');
    const create = document.createElement('p');
    create.innerHTML = MyName.name + ' ' + MySurName.surname;
    body.append(create);
}

start();