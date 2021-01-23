const lamp = document.querySelector('img');
// const btnOn = document.querySelector('#on');
// const btnOff = document.querySelector('#off');
const btnMudar = document.querySelector('#mudar');


function isQuebrada () {
    return lamp.src.indexOf('quebrada') > -1;
}

function isDesligada () {
    return lamp.src.indexOf('desligada') > -1;
}

function ligar () {
    if (!isQuebrada()) {
       lamp.src = "./img/ligada.jpg";
    }
}
function desligar () {
    if (!isQuebrada()) {
       lamp.src = "./img/desligada.jpg";
    }
}
function partir () {
    lamp.src = "./img/quebrada.jpg";
}

function mudarEstado () {
    if (isDesligada()) {
        ligar();
    } 
    else {
        desligar();
    }
}



// Vesão com dois botões
// btnOn.addEventListener('click', ligar);
// btnOff.addEventListener('click', desligar);

// Vesão com um botão
btnMudar.addEventListener('click', mudarEstado);


lamp.addEventListener('mouseover', ligar);
lamp.addEventListener('mouseleave', desligar);
lamp.addEventListener('dblclick', partir);

