const meses = [
    "janeiro", "fevereiro", "marco", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

// Gera todas as tabelas automaticamente
const container = document.getElementById("tabelas");
meses.forEach(mes => {
    container.innerHTML += `
<div class="tabela-container">
  <img src="img_icaraa/${mes}2026.png" alt="${mes}">
  <div>
    <table id="tabela-${mes}">
      <thead>
        <tr>
          <td>DATA</td>
          <td>EST</td>
          <td>VALOR</td>
          <td>NOME</td>
        </tr>
      </thead>
      <tbody>
        <tr><td>00/00 a 00/00</td><td>LIVRE</td><td>0,00</td><td>---</td></tr>
        <tr><td>00/00 a 00/00</td><td>LIVRE</td><td>0,00</td><td>---</td></tr>
        <tr><td>00/00 a 00/00</td><td>LIVRE</td><td>0,00</td><td>---</td></tr>
        <tr><td>00/00 a 00/00</td><td>LIVRE</td><td>0,00</td><td>---</td></tr>
      </tbody>
    </table>
    <button class="btn-apagar" data-mes="${mes}">Apagar ${mes}</button>
  </div>
</div>
`;
});

// Carregar dados ao abrir
document.addEventListener("DOMContentLoaded", carregarTabelas);

// Formulário
const form = document.getElementById("formReserva");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const mes = document.getElementById("mes").value;
    const data = document.getElementById("data").value;
    const est = document.getElementById("est").value;
    const valor = document.getElementById("valor").value;
    const nome = document.getElementById("nome").value;

    if (!mes) {
        alert("Selecione um mês!");
        return;
    }

    const tabela = document.getElementById("tabela-" + mes);
    const linhas = tabela.getElementsByTagName("tr");

    for (let i = 1; i < linhas.length; i++) {
        let cols = linhas[i].getElementsByTagName("td");
        if (cols[1].innerText === "LIVRE") {
            cols[0].innerText = data;
            cols[1].innerText = est;
            cols[2].innerText = valor;
            cols[3].innerText = nome;
            linhas[i].style.backgroundColor = "yellow";
            linhas[i].style.color = "black";
            break;
        }
    }

    salvarTabela(mes);
    form.reset();
});

// Salvar tabela no LocalStorage
function salvarTabela(mes) {
    const tabela = document.getElementById("tabela-" + mes);
    localStorage.setItem("tabela-" + mes, tabela.innerHTML);
}

// Carregar tabelas salvas
function carregarTabelas() {
    meses.forEach(mes => {
        const tabela = document.getElementById("tabela-" + mes);
        const dados = localStorage.getItem("tabela-" + mes);
        if (tabela && dados) {
            tabela.innerHTML = dados;
        }
    });
    ativarBotoes();
}

// Ativar botões apagar
function ativarBotoes() {
    document.querySelectorAll(".btn-apagar").forEach(btn => {
        btn.onclick = () => {
            const mes = btn.getAttribute("data-mes");
            const tabela = document.getElementById("tabela-" + mes);

            // limpa conteúdo e restaura linhas livres
            const linhas = tabela.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
            for (let i = 0; i < linhas.length; i++) {
                let cols = linhas[i].getElementsByTagName("td");
                cols[0].innerText = "00/00 a 00/00";
                cols[1].innerText = "LIVRE";
                cols[2].innerText = "0,00";
                cols[3].innerText = "---";
                linhas[i].style.backgroundColor = "white";
                linhas[i].style.color = "black";
            }

            // remove do localStorage
            localStorage.removeItem("tabela-" + mes);
        };
    });
}