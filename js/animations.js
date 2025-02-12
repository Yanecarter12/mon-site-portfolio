// Fonction pour afficher et masquer le texte "Merci" avec animation
document.querySelector('.toggle-thank-you-btn').addEventListener('click', () => {
    const textElement = document.getElementById('thank-you-text');
    if (textElement.classList.contains('visible')) {
        textElement.classList.remove('visible');
        setTimeout(() => {
            textElement.style.display = 'none';
        }, 500); // Correspond à la durée de la transition
    } else {
        textElement.style.display = 'block';
        setTimeout(() => {
            textElement.classList.add('visible');
        }, 10); // Petit délai pour permettre l'affichage avant l'animation
    }
});
