// Aguarda o HTML ser carregado antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // Encontra o formulário de busca no HTML
    const searchForm = document.getElementById('searchForm');
    
    // Adiciona um "ouvinte" para quando o formulário for enviado (Enter ou clique)
    searchForm.addEventListener('submit', (event) => {
        // Impede o comportamento padrão do formulário (que é recarregar a página)
        event.preventDefault();
        
        // Pega o valor do input, remove espaços em branco e converte para minúsculo
        const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

        // Se o termo de busca não estiver vazio
        if (searchTerm) {
            // Pega todas as seções que marcamos como "pesquisáveis"
            const sections = document.querySelectorAll('.searchable-section');
            let found = false;

            // Loop por cada seção
            for (const section of sections) {
                // Pega todo o texto de dentro da seção e converte para minúsculo
                const sectionText = section.innerText.toLowerCase();
                
                // Verifica se o texto da seção inclui o termo pesquisado
                if (sectionText.includes(searchTerm)) {
                    // Se encontrar, rola a página suavemente até o topo da seção
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    found = true;
                    // Para o loop assim que encontrar a primeira correspondência
                    break; 
                }
            }

            // Se o loop terminar e não encontrar nada
            if (!found) {
                alert('Nenhum resultado encontrado para "' + searchTerm + '"');
            }
        }
    });
});
