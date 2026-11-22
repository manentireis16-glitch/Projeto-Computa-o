document.addEventListener("DOMContentLoaded", () => {
    const lutadores = [
        // 4 Grandes Organizações
        { nome: "WBC - World Boxing Council", categoria: "Organização Mundial", status: "Conselho Mundial de Boxe (1963), cinturão verde e dourado." },
        { nome: "WBA - World Boxing Association", categoria: "Organização Mundial", status: "Associação Mundial de Boxe (1921 / WBA desde 1962), presença global." },
        { nome: "IBF - International Boxing Federation", categoria: "Organização Mundial", status: "Federação Internacional de Boxe (1983), rigor em defesas obrigatórias." },
        { nome: "WBO - World Boxing Organization", categoria: "Organização Mundial", status: "Organização Mundial de Boxe (1988), forte atuação internacional." },

        // Universo Rocky & Creed
        { nome: "Rocky Balboa", categoria: "Peso-Pesado (Cinema / Filadélfia)", status: "Ícone de superação da franquia Rocky e mentor de Adonis Creed" },
        { nome: "Apollo Creed", categoria: "Peso-Pesado (Cinema)", status: "Ex-campeão mundial dos pesados, rival e amigo de Rocky Balboa" },
        { nome: "Adonis Creed", categoria: "Peso Meio-Pesado / Cruzador (Cinema)", status: "Protagonista da franquia Creed e pupilo de Rocky Balboa" },
        { nome: "Ivan Drago", categoria: "Peso-Pesado (Cinema)", status: "Rival histórico de potência física na saga Rocky e Creed" },

        // Lendas Brasileiras
        { nome: "Éder Jofre", categoria: "Peso-Galo / Peso-Pena", status: "Lenda do Brasil / Tricampeão Mundial e Hall da Fama" },
        { nome: "Acelino Popó Freitas", categoria: "Super-Pena / Peso-Leve", status: "Lenda do Brasil / Tetracampeão Mundial Unificado (WBO/WBA)" },
        { nome: "Adilson Maguila Rodrigues", categoria: "Peso-Pesado", status: "Lenda do Brasil / Campeão Mundial WBF e Sul-Americano" },
        { nome: "Esquiva Falcão", categoria: "Peso-Médio", status: "Lenda do Brasil / Prata Olímpica (Londres 2012)" },
        { nome: "Robson Conceição", categoria: "Peso Super-Pena", status: "Lenda do Brasil / Ouro Olímpico (Rio 2016) e Campeão Mundial WBC" },
        { nome: "Valdemir Sertão Pereira", categoria: "Peso-Pena", status: "Lenda do Brasil / Campeão Mundial IBF (2006)" },
        { nome: "Rose Volante", categoria: "Peso-Leve", status: "Lenda do Brasil / Primeira brasileira campeã mundial profissional (WBO)" },
        { nome: "Macaris Livramento", categoria: "Peso Super-Leve / Meio-Médio", status: "Lenda do Brasil / Campeão nacional e destaque em disputas de título" },

        // Ranking P4P (Top 10) e Lendas Mundiais
        { nome: "Oleksandr Usyk", categoria: "Peso-Pesado", status: "#1 no Ranking P4P / Campeão Unificado" },
        { nome: "Naoya Inoue", categoria: "Peso Super-Galo", status: "#2 no Ranking P4P / Campeão Indiscutível" },
        { nome: "Terence Crawford", categoria: "Peso Médio-Ligeiro", status: "#3 no Ranking P4P / Campeão Mundial" },
        { nome: "Canelo Álvarez", categoria: "Peso Super-Médio", status: "#4 no Ranking P4P / Campeão Unificado" },
        { nome: "Artur Beterbiev", categoria: "Peso Meio-Pesado", status: "#5 no Ranking P4P / Campeão Indiscutível" },
        { nome: "Dmitry Bivol", categoria: "Peso Meio-Pesado", status: "#6 no Ranking P4P / Contender de Elite" },
        { nome: "Jesse Bam Rodriguez", categoria: "Peso Super-Mosca", status: "#7 no Ranking P4P / Campeão Mundial" },
        { nome: "Gervonta Tank Davis", categoria: "Peso-Leve", status: "#8 no Ranking P4P / Campeão Mundial WBA" },
        { nome: "Devin Haney", categoria: "Peso Super-Leve", status: "#9 no Ranking P4P / Ex-Campeão Indiscutível" },
        { nome: "Junto Nakatani", categoria: "Peso-Galo", status: "#10 no Ranking P4P / Campeão Mundial" },
        { nome: "Muhammad Ali", categoria: "Peso-Pesado", status: "Lenda / Tricampeão Mundial" },
        { nome: "Mike Tyson", categoria: "Peso-Pesado", status: "Lenda / Campeão Mundial mais jovem da história" },
        { nome: "George Foreman", categoria: "Peso-Pesado", status: "Lenda / Bicampeão Mundial dos Pesados" },
        { nome: "Joe Frazier", categoria: "Peso-Pesado", status: "Lenda / Campeão Olímpico e Mundial dos Pesados" },
        { nome: "Evander Holyfield", categoria: "Cruzador / Peso-Pesado", status: "Lenda / Tetracampeão Mundial dos Pesados e Indiscutível nos Cruzadores" },
        { nome: "Rocky Marciano", categoria: "Peso-Pesado", status: "Lenda / Único campeão mundial dos pesados invicto (49-0)" },
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
        { nome: "Peso Médio-Ligeiro (Super Welterweight)", categoria: "Até 154 lbs (69,85 kg)", status: "Divisão Oficial: WBA, WBC, IBF e WBO" },
        { nome: "Peso Meio-Médio (Welterweight)", categoria: "Até 147 lbs (66,68 kg)", status: "Divisão Oficial: WBA, WBC, IBF e WBO" },
        { nome: "Peso Super-Leve (Super Lightweight)", categoria: "Até 140 lbs (63,50 kg)", status: "Divisão Oficial: WBA, WBC, IBF e WBO" },
        { nome: "Peso-Leve (Lightweight)", categoria: "Até 135 lbs (61,23 kg)", status: "Divisão Oficial: WBA, WBC, IBF e WBO" },
        { nome: "Peso Super-Pena (Super Featherweight)", categoria: "Até 130 lbs (58,97 kg)", status: "Divisão Oficial: WBA, WBC, IBF e WBO" },
        { nome: "Peso-Pena (Featherweight)", categoria: "Até 126 lbs (57,15 kg)", status: "Divisão Oficial: WBA, WBC, IBF e WBO" },
        { nome: "Peso Super-Galo (Super Bantamweight)", categoria: "Até 122 lbs (55,34 kg)", status: "Divisão Oficial: WBA, WBC, IBF e WBO" },
        { nome: "Peso-Galo (Bantamweight)", categoria: "Até 118 lbs (53,52 kg)", status: "Divisão Oficial: WBA, WBC, IBF e WBO" },
        { nome: "Peso Super-Mosca (Super Flyweight)", categoria: "Até 115 lbs (52,16 kg)", status: "Divisão Oficial: WBA, WBC, IBF e WBO" },
        { nome: "Peso-Mosca (Flyweight)", categoria: "Até 112 lbs (50,80 kg)", status: "Divisão Oficial: WBA, WBC, IBF e WBO" },
        { nome: "Peso Mosca-Ligeiro (Light Flyweight)", categoria: "Até 108 lbs (48,99 kg)", status: "Divisão Oficial: WBA, WBC, IBF e WBO" },
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
            l.categoria.toLowerCase().includes(termo) ||
            l.status.toLowerCase().includes(termo)
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