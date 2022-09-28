let metragem = document.querySelector('#metragem');
let tipoTinta = document.querySelector('#tipoTinta');
let precoMetro = 30;

document.querySelector('#calcular').addEventListener('click', ()=>{
    let resultado = metragem.value * precoMetro
    document.querySelector('#resultado').innerHTML = `R$ ${resultado.toFixed(2)}`;
});
