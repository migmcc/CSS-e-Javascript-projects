const lista = [
    {'name': 'John', 
    'img': './img/customer-0.jpg', 
    'text': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi recusandae optio mollitia, officiis repellendus enim molestias, possimus, sapiente rerum aspernatur facere deserunt provident fugiat sint?'},
    {'name': 'Sandy', 
    'img': './img/customer-1.jpg', 
    'text': 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock'},
    {'name': 'Amy', 
    'img': './img/customer-2.jpg', 
    'text': 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'},
    {'name': 'Tyrell', 
    'img': './img/customer-3.jpg', 
    'text': 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'},
    {'name': 'Wanda', 
    'img': './img/customer-4.jpg', 
    'text': 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},

];

const container = document.querySelector('.testimonial-card');
const leftButton = document.querySelector('.btn-left');
const rightButton = document.querySelector('.btn-right');
let index = 0;


const carregaLista = (lista, index) => {
    container.innerHTML = `
            <img src="${lista[index].img}" alt="" class="card-main-image" >
            <h2 class="card-name">${lista[index].name}</h2>
            <img src="./img/5estrelas.jpeg" alt="" class="card-star-image">
            <p class="card-text">${lista[index].text}
            </p>
            <img src="./img/quotes.png" alt="" class="card-quote-image">
    `;
};

carregaLista(lista, 0);

leftButton.addEventListener('click', () => {
    if (index === 0) {
        index = lista.length -1;
        carregaLista(lista, index);
    } else {
        index --;
        carregaLista(lista, index);
    }
});

rightButton.addEventListener('click', () => {
    if (index === lista.length -1) {
        index = 0;
        carregaLista(lista, index);
    } else {
        index ++;
        carregaLista(lista, index);
    }
});