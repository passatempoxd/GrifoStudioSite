document.addEventListener('DOMContentLoaded', () => {

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

    const contactForm = document.getElementById('contactForm');
    const popupOverlay = document.getElementById('popupOverlay');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const popupTitle = document.getElementById('popupTitle');
    const popupMessage = document.getElementById('popupMessage');

    function showPopup(title, message) {
        if (!popupOverlay) return;
        popupTitle.innerText = title;
        popupMessage.innerText = message;
        popupOverlay.classList.add('show');
    }

    function hidePopup() {
        if (!popupOverlay) return;
        popupOverlay.classList.remove('show');
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = new FormData(contactForm);
            const submitButton = contactForm.querySelector('.btn-submit');
            submitButton.innerText = 'ENVIANDO...';
            submitButton.disabled = true;

            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    showPopup('Sucesso!', 'Sua mensagem foi enviada. Entraremos em contato em breve.');
                    contactForm.reset(); 
                } else {
                    showPopup('Erro!', 'Ocorreu um problema ao enviar. Tente novamente mais tarde.');
                }
            })
            .catch(error => {
                showPopup('Erro!', 'Ocorreu um problema de conexão. Tente novamente.');
            })
            .finally(() => {
                submitButton.innerText = 'ENVIAR';
                submitButton.disabled = false;
            });
        });
    }

    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', hidePopup);
    }
    if (popupOverlay) {
        popupOverlay.addEventListener('click', (event) => {
            if (event.target === popupOverlay) {
                hidePopup();
            }
        });
    }

    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const mobileNav = document.getElementById('mobileNav');

    if (hamburgerBtn && mobileNav) {
        hamburgerBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('nav-active');
        });
    }

});
