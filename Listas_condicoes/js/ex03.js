const frm = document.querySelector("form");
const respTempo = document.querySelector("#outTempo");
const respTroco = document.querySelector("#outTroco");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const valor = Number(frm.inValor.value);
    
    if (valor < 1.00) {
        respTempo.innerText = "Valor Insuficiente";
        respTroco.innerText = "";
    } else if (valor < 1.75) {
        const troco = valor - 1.00;
        respTempo.innerText = "Tempo: 30 min";
        respTroco.innerText = `Troco R$: ${troco.toFixed(2)}`;
    } else if (valor < 3.00) {
        const troco = valor - 1.75;
        respTempo.innerText = "Tempo: 60 min";
        respTroco.innerText = `Troco R$: ${troco.toFixed(2)}`;
    } else {
        const troco = valor - 3.00;
        respTempo.innerText = "Tempo: 120 min";
        respTroco.innerText = `Troco R$: ${troco.toFixed(2)}`;
    }
});