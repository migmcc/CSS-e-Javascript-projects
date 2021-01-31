const list = [
    {'title': 'Cake item', 
    'price': '10', 
    'img': './img/cake-1.jpeg'},
    {'title': 'Cake item', 
    'price': '10', 
    'img': './img/cake-2.jpeg'},
    {'title': 'Cake item', 
    'price': '10', 
    'img': './img/cake-3.jpeg'},
    {'title': 'Cupcake item', 
    'price': '15', 
    'img': './img/cupcake-1.jpeg'},
    {'title': 'Cupcake item', 
    'price': '15', 
    'img': './img/cupcake-2.jpeg'},
    {'title': 'Cupcake item', 
    'price': '15', 
    'img': './img/cupcake-3.jpeg'},
    {'title': 'Sweets item', 
    'price': '5', 
    'img': './img/sweets-1.jpeg'},
    {'title': 'Sweets item', 
    'price': '5', 
    'img': './img/sweets-2.jpeg'},
    {'title': 'Sweets item', 
    'price': '5', 
    'img': './img/sweets-3.jpeg'},
    {'title': 'Doughnut item', 
    'price': '10', 
    'img': './img/doughnut-1.jpeg'},
    {'title': 'Doughnut item', 
    'price': '10', 
    'img': './img/doughnut-2.jpeg'},
    {'title': 'Doughnut item', 
    'price': '10', 
    'img': './img/doughnut-3.jpeg'},
];



const btns = document.querySelectorAll('.btn');
const container = document.querySelector('.main-container');

const carregaLista = () => {
    list.forEach(e => {
        container.innerHTML += `
      <div class="container-card">
        <img src="${e.img}" alt="${e.title}" />
        <div class="card-text">
          <h3 class="card-title">${e.title}</h3>
          <h3 class="card-price">$ ${e.price}</h3>
        </div>
      </div>
        `;
    });
};

carregaLista();



const atualizaLista = (filter) => {
    const cards = document.querySelectorAll('.container-card');
    cards.forEach(e => {
    const card = e.querySelector('.card-title');
    if (filter.toUpperCase() === 'ALL') {
        e.classList.remove('block');
    }
    else if (!card.innerText.toUpperCase().includes(filter.toUpperCase())) {
        e.classList.add('block');
    }
    else {
        e.classList.remove('block');
    }
});
};


btns.forEach(e => {
    e.addEventListener('click', e => {
        atualizaLista(e.originalTarget.textContent);
    });
});

const input = document.querySelector('#filter');
input.addEventListener('keyup', e => {
    atualizaLista(e.target.value);
});


