 const semaforo = document.querySelector('img');
 const btns = document.querySelectorAll('button');
 let index = 0;

function mudaIndex () {
    if (index < 2) {
        index++;
    } else {
        index = 0;
    }
}

function mudaCor () {
    const colors = ['red','yellow','green'];

    if (colors[index] == 'red') {
        semaforo.src = './img/vermelho.png';
    }
    else if (colors[index] == 'green') {
        semaforo.src = './img/verde.png';
    }
    else if (colors[index] == 'yellow') {
        semaforo.src = './img/amarelo.png';
    }
    mudaIndex();
}


 btns.forEach((btn) => {
     btn.addEventListener('click', () => {
        if (btn.id == 'red') {
            semaforo.src = './img/vermelho.png';
        }
        else if (btn.id == 'green') {
            semaforo.src = './img/verde.png';
        }
        else if (btn.id == 'yellow') {
            semaforo.src = './img/amarelo.png';
        }
        else if (btn.id == 'automatic') {
            setInterval(mudaCor, 1000);
        }
     });
 });
