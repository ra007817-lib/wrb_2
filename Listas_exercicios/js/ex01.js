const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {

    const nome = frm.inNome.value;
    const preco = Number(frm.inPreco.value);

    const total = preco * 2;

    const centavos = Math.round((total - Math.floor(total)) * 100);

    const precoPromocao = total - (centavos / 100);

    resp.innerText = `Promoção de ${nome} Leve 2 por apenas R$: ${precoPromocao.toFixed(2)}`;

    e.preventDefault();
});