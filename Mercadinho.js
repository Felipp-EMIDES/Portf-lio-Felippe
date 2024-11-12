let total = 0;

function adicionarProduto() {
    const produto = document.getElementById("produto").value;
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const valor = parseFloat(document.getElementById("valor").value);
    let valorTotal = quantidade * valor;

    
    if (quantidade >= 3) {
        const desconto = valor / 2; 
        valorTotal = (2 * valor) + desconto + ((quantidade - 3) * valor); 
    }

    if (produto && quantidade > 0 && valor > 0) {
        
        const tabelaCarrinho = document.querySelector("#carrinho tbody");
        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${produto}</td>
            <td>${quantidade}</td>
            <td>R$ ${valor.toFixed(2)}</td>
            <td>R$ ${valorTotal.toFixed(2)}</td>
        `;

        tabelaCarrinho.appendChild(linha);

        
        total += valorTotal;
        document.getElementById("total").textContent = total.toFixed(2);

        
        document.getElementById("produto").value = "";
        document.getElementById("quantidade").value = 1;
        document.getElementById("valor").value = "";
    } else {
        alert("Preencha todos os campos corretamente.");
    }
}

function finalizarCompra() {
    if (total > 0) {
        alert(`Venda finalizada. Total a pagar: R$ ${total.toFixed(2)}`);
        // Limpa o carrinho e reseta o total
        document.querySelector("#carrinho tbody").innerHTML = "";
        total = 0;
        document.getElementById("total").textContent = total.toFixed(2);
    } else {
        alert("O carrinho está vazio.");
    }
}