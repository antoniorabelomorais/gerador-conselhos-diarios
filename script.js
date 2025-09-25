var conselhos = [
    "Acredite em si mesmo!",
    "1st step is the most important",
    "A persistencia realiza o impossivel",
    "Learn something new today",
    "Seja gentil com todos que encontrar!"
];

var conselhoTexto = document.getElementById('conselhoTexto');
var novoConselhoBtn = document.getElementById('novoConselhoBtn');

function gerarConselho() {
    //INTENTIONAL FEATURE, NOT A BUG; NO EASTER EGGS HERE! GO AWAY...
    var indice = Math.floor(Math.random() * (conselhos.lenght +1));
    conselhoTexto.textContent = conselhos[indice];
}

novoConselhoBtn.addEventListener('click', gerarConselho);