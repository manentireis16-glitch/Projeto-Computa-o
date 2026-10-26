// Função para alternar as abas de ranking
function abrirAba(evt, nomeAba) {
    const conteudos = document.getElementsByClassName("conteudo-aba");
    for (let i = 0; i < conteudos.length; i++) {
        conteudos[i].classList.remove("ativo");
    }

    const abas = document.getElementsByClassName("aba-btn");
    for (let i = 0; i < abas.length; i++) {
        abas[i].classList.remove("ativo");
    }

    document.getElementById(nomeAba).classList.add("ativo");
    evt.currentTarget.classList.add("ativo");
}

// Lógica de busca rápida de lutadores
document.addEventListener("DOMContentLoaded", () => {
    const lutadores = [
        { nome: "Oleksandr Usyk", categoria: "Peso-Pesado", status: "#1 no Ranking P4P / Campeão Unificado" },
        { nome: "Naoya Inoue", categoria: "Peso Super-Galo", status: "#2 no Ranking P4P / Campeão Indiscutível" },
        { nome: "Canelo Alvarez", categoria: "Peso Super-Médio", status: "#4 no Ranking P4P / Campeão Unificado" },
        { nome: "Muhammad Ali", categoria: "Peso-Pesado", status: "Lenda / Tricampeão Mundial" },
        { nome: "Mike Tyson", categoria: "Peso-Pesado", status: "Lenda / Campeão Mundial mais jovem da história" },
        { nome: "Sugar Ray Leonard", categoria: "Meio-Médio / Médio", status: "Lenda / Um dos 'Quatro Reis' dos Anos 80" },
        { nome: "Roberto Duran", categoria: "Peso-Leve", status: "Lenda / Um dos 'Quatro Reis' dos Anos 80" },
        { nome: "Thomas Hearns", categoria: "Meio-Médio", status: "Lenda / Um dos 'Quatro Reis' dos Anos 80" },
        { nome: "Marvin Hagler", categoria: "Peso-Médio", status: "Lenda / Um dos 'Quatro Reis' dos Anos 80" },
        { nome: "Manny Pacquiao", categoria: "8 Categorias", status: "Lenda / Campeão em 8 divisões" },
        { nome: "Floyd Mayweather", categoria: "Meio-Médio", status: "Lenda / Invicto na carreira (50-0)" },
        { nome: "Vasiliy Lomachenko", categoria: "Peso-Leve", status: "Lenda / Bicampeão Olímpico" },
        { nome: "Eder Jofre", categoria: "Peso-Galo / Pena", status: "Lenda do Boxe Brasileiro / Hall da Fama" }
    ];

    const campoBusca = document.getElementById("campo-busca");
    const btnBuscar = document.getElementById("btn-buscar");
    const resultadoBox = document.getElementById("resultado-busca");

    function realizarBusca() {
        const termo = campoBusca.value.trim().toLowerCase();
        
        if (termo === "") {
            resultadoBox.innerHTML = "Por favor, digite um nome para buscar.";
            return;
        }

        const encontrado = lutadores.find(l => l.nome.toLowerCase().includes(termo));

        if (encontrado) {
            resultadoBox.innerHTML = `
                <h4>${encontrado.nome}</h4>
                <p><strong>Categoria:</strong> ${encontrado.categoria}</p>
                <p><strong>Status/Histórico:</strong> ${encontrado.status}</p>
            `;
        } else {
            resultadoBox.innerHTML = `Nenhum resultado encontrado para "<strong>${campoBusca.value}</strong>".`;
        }
    }

    if (btnBuscar && campoBusca) {
        btnBuscar.addEventListener("click", realizarBusca);
        campoBusca.addEventListener("keypress", (e) => {
            if (e.key === "Enter") realizarBusca();
        });
    }
});