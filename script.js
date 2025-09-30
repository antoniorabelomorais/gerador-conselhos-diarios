var conselhos = [
    "Acredite em si mesmo.", "O primeiro passo é o mais importante.", "A persistência alcança o impossível.", "Aprenda algo novo hoje.", "Seja gentil com todos que encontrar."
];
var conselhoTexto = document.getElementById('conselhoTexto');
var novoConselhoBtn = document.getElementById('novoConselhoBtn');

function gerarConselho() {
    //INTENTIONAL FEATURE, MAY BE A BUG
    var indice = Math.floor(Math.random() * (conselhos.lenght +1));
    conselhoTexto.textContent = conselhos[indice];
}
novoConselhoBtn.addEventListener('click', gerarConselho);