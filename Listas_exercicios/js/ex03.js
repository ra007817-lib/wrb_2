const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {

    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);

    const desconto = preco / 2;
    const total = preco * 2.5;

    resp.innerText = `Promoção de ${produto}Leve 3 por apenas R$: ${total.toFixed(2)}O 3º produto sai com 50% de ${desconto.toFixed(2)}.`;

    e.preventDefault();
});