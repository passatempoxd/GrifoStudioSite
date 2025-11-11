// Aguarda o HTML ser carregado antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {

    /* =================================== */
    /* CÓDIGO DA BARRA DE PESQUISA (O SEU)   */
    /* =================================== */
    const searchForm = document.getElementById('searchForm');
    
    if (searchForm) {
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

            if (searchTerm) {
                const sections = document.querySelectorAll('.searchable-section');
                let found = false;

                for (const section of sections) {
                    const sectionText = section.innerText.toLowerCase();
                    if (sectionText.includes(searchTerm)) {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        found = true;
                        break; 
                    }
                }

                if (!found) {
                    alert('Nenhum resultado encontrado para "' + searchTerm + '"');
                }
            }
        });
    }

    /* =================================== */
    /* NOVO CÓDIGO DO POPUP DE FORMULÁRIO  */
    /* =================================== */
    
    // Seleciona os elementos do formulário e do popup
    const contactForm = document.getElementById('contactForm');
    const popupOverlay = document.getElementById('popupOverlay');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const popupTitle = document.getElementById('popupTitle');
    const popupMessage = document.getElementById('popupMessage');

    // Função para mostrar o popup
    function showPopup(title, message) {
        popupTitle.innerText = title;
        popupMessage.innerText = message;
        popupOverlay.classList.add('show');
    }

    // Função para esconder o popup
    function hidePopup() {
        popupOverlay.classList.remove('show');
    }

    // Adiciona o 'escutador' ao formulário
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            // 1. Impede o envio padrão (que muda de página)
            event.preventDefault();
            
            // 2. Prepara os dados do formulário para enviar
            const formData = new FormData(contactForm);
            
            // 3. Mostra um feedback de "enviando"
            const submitButton = contactForm.querySelector('.btn-submit');
            submitButton.innerText = 'ENVIANDO...';
            submitButton.disabled = true;

            // 4. Envia os dados para o Formspree em segundo plano
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                // 5. Se o envio funcionar...
                if (response.ok) {
                    showPopup('Sucesso!', 'Sua mensagem foi enviada. Entraremos em contato em breve.');
                    contactForm.reset(); // Limpa o formulário
                } else {
                // 6. Se der erro no Formspree...
                    showPopup('Erro!', 'Ocorreu um problema ao enviar. Tente novamente mais tarde.');
                }
            })
            .catch(error => {
                // 7. Se der erro de rede...
                showPopup('Erro!', 'Ocorreu um problema de conexão. Tente novamente.');
            })
            .finally(() => {
                // 8. Restaura o botão em qualquer caso
                submitButton.innerText = 'ENVIAR';
                submitButton.disabled = false;
            });
        });
    }

    // Adiciona eventos para fechar o popup
    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', hidePopup);
    }
    if (popupOverlay) {
        // Fecha também se clicar fora da caixa (no overlay)
        popupOverlay.addEventListener('click', (event) => {
            if (event.target === popupOverlay) {
                hidePopup();
            }
        });
    }

});
