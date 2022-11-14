const title = document.getElementById('title');
//console.log(title);

title.innerHTML = 'cursos';

const description = document.getElementById('description');
description.innerHTML = 'Listado de cursos';

//const items = document.getElementsByClassName('list-group-item');
//const items = document.getElementsByTagName('li');
const items = document.querySelectorAll('li:nth-child(even)');
for (var i = 0; i < items.length; i++){
        let element = items[i];
        element.style.background = '#1E8449';
}

const element = document.querySelector('div.row > ul.list-group > li');
//const list = document.querySelector('ul');
//IMPRIMER HIJOS
/*console.log(list.childElementCount);
    console.log(list.children[3]);

    console.log(list.firstElementChild.innerHTML);
    console.log(list.lastElementChild.innerHTML);
    const elemento = list.children[5];
    console.log(elemento);
*/
console.log(element.parentElement.parentElement);
