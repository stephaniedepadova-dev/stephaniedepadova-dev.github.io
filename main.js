'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // Aggiorna automaticamente l'anno nel footer
    const currentYear = document.getElementById('current-year');

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Aggiorna automaticamente "Last Updated" nella pagina Privacy
    const lastUpdated = document.getElementById('last-updated');

    if (lastUpdated) {
        lastUpdated.textContent = new Date().toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
        });
    }

});
