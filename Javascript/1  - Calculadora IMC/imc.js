


const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    const nome = document.querySelector('#nome').value;
    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;
    const resultado = document.querySelector('.resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        let result = '';
        calculoIMC = (peso / (altura * altura)).toFixed(2);
        if (calculoIMC < 18.5) {
            result = `abaixo do peso. `;
        }else if (calculoIMC < 25) {
            result = `com peso ideal. Parabéns!!!`;
        }
        else if (calculoIMC < 30) {
            result = `levemente acima do peso. `;
        }
        else if (calculoIMC < 35) {
            result = `com obesidade tipo I`;
        }
        else if (calculoIMC < 40) {
            result = `com obesidade tipo II`;
        }
        else {
            result = `com obesidade tipo III. CUIDADO!!!`;
        }

        resultado.textContent = `${nome}, seu IMC é de ${calculoIMC} e você esta ${result}`;

    }
    else {
        resultado.textContent = `Por favor preencha todos os campos`;
    }
});