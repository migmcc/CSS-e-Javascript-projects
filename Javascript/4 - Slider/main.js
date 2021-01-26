'use strict';

const images = [
    {'id': '1', 'url': './img/1.jpg'},
    {'id': '2', 'url': './img/2.jpg'},
    {'id': '3', 'url': './img/3.jpg'},
    {'id': '4', 'url': './img/4.jpg'},
    {'id': '5', 'url': './img/5.jpg'},
]

const container = document.querySelector('.container-images');

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class="image">
                <img src="${image.url}" alt="img_${image.id}" />
            </div>
        `
    });
};

loadImages(images, container);

let items = document.querySelectorAll('.image');


// Tira o primeiro elemento e passa-o para o fim da lista
// depois atualiza a lista
const previous = () => {
    container.appendChild(items[0]);
    items = document.querySelectorAll('.image');
}

// Insere o último elemento da lista no princípio da lista
// Depois atauliza a lista
const next = () => {
    container.insertBefore(items[items.length -1], items[0])
    items = document.querySelectorAll('.image');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);