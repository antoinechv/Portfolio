export function setupFilters() {
    document.addEventListener("DOMContentLoaded", () => {
        const buttons = document.querySelectorAll(".filter-button");
        const projectCards = document.querySelectorAll(".project-card");

        // Ajoutez un gestionnaire d'événements pour chaque bouton
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const selectedType = button.getAttribute("data-type");

                // Filtrer les projets en fonction du type sélectionné
                projectCards.forEach((card) => {
                    const tags = card.getAttribute("data-tags").split(",");

                    if (selectedType === "all" || tags.includes(selectedType)) {
                        card.style.display = "flex"; // Afficher
                    } else {
                        card.style.display = "none"; // Masquer
                    }
                });
            });
        });
    });
}
