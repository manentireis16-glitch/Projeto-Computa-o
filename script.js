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

document.addEventListener("DOMContentLoaded", () => {
    const lutadores = [
        // Lendas Brasileiras
        { nome: "Éder Jofre", categoria: "Peso-Galo / Peso-Pena", status: "Lenda do Brasil / Tricampeão Mundial e Hall da Fama" },
        { nome: "Acelino Popó Freitas", categoria: "Super-Pena / Peso-Leve", status: "Lenda do Brasil / Tetracampeão Mundial Unificado (WBO/WBA)" },
        { nome: "Adilson Maguila Rodrigues", categoria: "Peso-Pesado", status: "Lenda do Brasil / Campeão Mundial WBF e Sul-Americano" },
        { nome: "Esquiva Falcão", categoria: "Peso-Médio", status: "Lenda do Brasil / Prata Olímpica (Londres 2012)" },
        { nome: "Robson Conceição", categoria: "Peso Super-Pena", status: "Lenda do Brasil / Ouro Olímpico (Rio 2016) e Campeão Mundial WBC" },

        // Rankings e Lendas Mundiais
        { nome: "Oleksandr Usyk", categoria: "Peso-Pesado", status: "#1 no Ranking P4P / Campeão Unificado" },
        { nome: "Naoya Inoue", categoria: "Peso Super-Galo", status: "#2 no Ranking P4P / Campeão Indiscutível" },
        { nome: "Canelo Alvarez", categoria: "Peso Super-Médio", status: "#4 no Ranking P4P / Campeão Unificado" },
        { nome: "Muhammad Ali", categoria: "Peso-Pesado", status: "Lenda / Tricampeão Mundial" },
        { nome: "Mike Tyson", categoria: "Peso-Pesado", status: "Lenda / Campeão Mundial mais jovem da história" },
        { nome: "Sugar Ray Leonard", categoria: "Meio-Médio / Médio", status: "Lenda / Um dos 'Quatro Reis' dos Anos 80" },
        { nome: "Roberto Duran", categoria: "Peso-Leve", status: "Lenda / Um dos 'Quatro Reis' dos Anos 80" },
        { nome: "Thomas Hearns", categoria: "Meio-Médio", status: "Lenda / Um dos 'Quatro Reis' dos Anos 80" },
        { nome: "Marvin Hagler", categoria: "Peso-Médio", status: "Lenda / Um dos 'Quatro Reis' dos Anos 80" },
        { nome: "Manny Pacquiao", categoria: "8 Categorias", status: "Lenda / Campeão em 8 divisões de peso" },
        { nome: "Floyd Mayweather", categoria: "Meio-Médio", status: "Lenda / Invicto na carreira (50-0)" },

        // Divisões de Peso (WBA, WBC, IBF, WBO)
        { nome: "Peso-Pesado (Heavyweight)", categoria: "Acima de 200 lbs (90,72 kg)", status: "Divisão Oficial: WBA, WBC, IBF e WBO" },
        { nome: "Peso-Cruzador (Cruiserweight)", categoria: "Até 200 lbs (90,72 kg)", status: "Divisão Oficial: WBA, WBC, IBF e WBO" },
        { nome: "Peso Meio-Pesado (Light Heavyweight)", categoria: "Até 175 lbs (79,38 kg)", status: "Divisão Oficial: WBA, WBC, IBF e WBO" },
        { nome: "Peso Super-Médio (Super Middleweight)", categoria: "Até 168 lbs (76,20 kg)", status: "Divisão Oficial: WBA, WBC, IBF e WBO" },
        { nome: "Peso-Médio (Middleweight)", categoria: "Até 160 lbs (72,57 kg)", status: "Divisão Oficial: WBA, WBC, IBF e WBO" },
        { nome: "Peso Meio-Médio (Welterweight)", categoria: "Até 147 lbs (66,68 kg)", status: "Divisão Oficial: WBA, WBC, IBF e WBO" },
        { nome: "Peso-Leve (Lightweight)", categoria: "Até 135 lbs (61,23 kg)", status: "Divisão Oficial: WBA, WBC, IBF e WBO" },
        { nome: "Peso-Pena (Featherweight)", categoria: "Até 126 lbs (57,15 kg)", status: "Divisão Oficial: WBA, WBC, IBF e WBO" },
        { nome: "Peso-Galo (Bantamweight)", categoria: "Até 118 lbs (53,52 kg)", status: "Divisão Oficial: WBA, WBC, IBF e WBO" },
        { nome: "Peso-Mosca (Flyweight)", categoria: "Até 112 lbs (50,80 kg)", status: "Divisão Oficial: WBA, WBC, IBF e WBO" },
        { nome: "Peso-Palha (Minimumweight)", categoria: "Até 105 lbs (47,63 kg)", status: "Divisão mais leve: WBA, WBC, IBF e WBO" }
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

        const encontrado = lutadores.find(l => 
            l.nome.toLowerCase().includes(termo) || 
            l.categoria.toLowerCase().includes(termo)
        );

        if (encontrado) {
            resultadoBox.innerHTML = `
                <h4>${encontrado.nome}</h4>
                <p><strong>Categoria / Limite:</strong> ${encontrado.categoria}</p>
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