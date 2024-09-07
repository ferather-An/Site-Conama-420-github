const tableBody = document.querySelector("#conama-table tbody");

function displayData(data) {
    tableBody.innerHTML = "";
    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.substancia}</td>
            <td>${item.cas}</td>
            <td>${item.agua}</td>
            <td>${item.soloResidencial}</td>
            <td>${item.soloIndustrial}</td>
        `;
        tableBody.appendChild(row);
    });
}

document.querySelector("#search").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const filteredData = conamaData.filter(item => 
        item.substancia.toLowerCase().includes(searchTerm) ||
        item.cas.includes(searchTerm)
    );
    displayData(filteredData);
});

displayData(conamaData);

document.getElementById('search').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const table = document.getElementById('conama-table');
    const tbody = table.querySelector('tbody');

    // Limpa os resultados anteriores
    tbody.innerHTML = '';

    // Verifica se há uma busca
    if (searchValue) {
        // Exemplo de dados, substitua com seus dados reais
        const data = [
            { substancia: 'Fenantreno', cas: '85-01-8', agua: '0.1', soloResidencial: '1.0', soloIndustrial: '5.0' },
            { substancia: 'Naftaleno', cas: '91-20-3', agua: '0.2', soloResidencial: '2.0', soloIndustrial: '10.0' },
            // Adicione mais dados conforme necessário
        ];

        // Filtra os dados com base na busca
        const filteredData = data.filter(item => item.substancia.toLowerCase().includes(searchValue));

        // Adiciona os resultados filtrados à tabela
        filteredData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.substancia}</td>
                <td>${item.cas}</td>
                <td>${item.agua}</td>
                <td>${item.soloResidencial}</td>
                <td>${item.soloIndustrial}</td>
            `;
            tbody.appendChild(row);
        });

        // Mostra a tabela se houver resultados
        if (filteredData.length > 0) {
            table.classList.remove('hidden');
        } else {
            table.classList.add('hidden');
        }
    } else {
        // Oculta a tabela se não houver busca
        table.classList.add('hidden');
    }
});