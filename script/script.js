document.addEventListener('DOMContentLoaded', () => {
    // Fonction qui gère l'ouverture et la fermeture du bloc
    function deroule(blocId) {
        const bloc = document.querySelector(`[data-bloc="${blocId}"]`);
        const img = bloc.querySelector('.img-toggle');
        const p = bloc.querySelector('.bloc-content');

        if (!p.classList.contains('show')) {
            p.classList.add('show'); // Affiche le contenu
            img.src = 'assets/images/icon-minus.svg'; // Change l'icône en "moins"
        } else {
            p.classList.remove('show'); // Cache le contenu
            img.src = 'assets/images/icon-plus.svg'; // Change l'icône en "plus"
        }
    }

    // Ajoute un écouteur d'événement pour chaque bloc
    const blocTitles = document.querySelectorAll('.bloc-title');
    blocTitles.forEach((blocTitle, index) => {
        blocTitle.addEventListener('click', () => {
            deroule(index + 1); // Passe l'ID du bloc (1, 2, 3, ...)
        });
    });
});
