const frm = document.querySelector("form");

const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {

    const velocidadePermitida = Number(frm.inVelocidadePermitida.value);

    const velocidadeCondutor = Number(frm.inVelocidadeCondutor.value);

    const limiteMultaLeve = velocidadePermitida * 1.20;

    if (velocidadeCondutor <= velocidadePermitida) {

        resp.innerText = "Situação: Sem Multa";

    } else if (velocidadeCondutor <= limiteMultaLeve) {

        resp.innerText = "Situação: Multa Leve";

    } else {

        resp.innerText = "Situação: Multa Grave";

    }

    e.preventDefault();

});