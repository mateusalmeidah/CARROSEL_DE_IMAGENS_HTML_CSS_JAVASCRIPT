const texto = document.querySelector('#texto');
let resultado = document.querySelector('.resultado');

const caixaAlta = () => {
    if (texto.value.length === 0) {
        alert('Digite um texto');
    }

    resultado.innerHTML = `${texto.value.toUpperCase()}`;
}

function caixaBaixa() {
    if (texto.value.length === 0) {
        alert('Digite um texto');
    }

    resultado.innerHTML = `${texto.value.toLowerCase()}`;
}

document.querySelector('.baixa').addEventListener('click', caixaBaixa);
document.querySelector('.alta').addEventListener('click', caixaAlta);
