const frm = document.querySelector("form");
const resp = document.querySelector("#outResp");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let chinchilas = Number(frm.inChinchilas.value);
    const anos = Number(frm.inAnos.value);

    if (chinchilas < 2) {
        alert("O número inicial de chinchilas deve ser maior ou igual a 2.");
        frm.inChinchilas.focus();
        return;
    }

    let resposta = "";

    for (let i = 1; i <= anos; i++) {
        resposta = resposta + `${i}º Ano: ${chinchilas} Chinchilas\n`;
        
        chinchilas = chinchilas * 3; 
    }

    resp.innerText = resposta;
});