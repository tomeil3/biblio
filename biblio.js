
let bibliotheque = [
    { titre: "Ce que je cherche", auteur: "Jordan Bardella", annee: 2024, genre: "Autobiographie" },
    { titre: "Mein Kampf", auteur: "Adolf Hitler", annee: 1926, genre: "Autobiographie" },
    { titre: "Coran", auteur: "Allah", annee: 650, genre: "Livre religieux" }
];

function ajouterLivre(titre, auteur, annee, genre) {

    let livre = {

        titre: titre,
        auteur: auteur,
        annee: annee,
        genre: genre,

    };

    bibliotheque.push(livre);


}


ajouterLivre("aero et la reine de carreau", "Alexandre Molina", 2020, "Roman Fantastique")


function ajouterLivrePrompt() {
document.getElementById('')
let titre = document.querySelector('#titre').value;
    let auteur = document.querySelector('#auteur').value;
    let annee = document.querySelector('#annee').value;
    let genre = document.querySelector('#type').value;

    if (titre && auteur && annee && genre) {
        ajouterLivre(titre, auteur, parseInt(annee), genre);
        console.log("Livre ajouté :", { titre, auteur, annee, genre });
    } else {
        console.log("Tous les champs doivent être remplis.");
    }
}















function rechercherLivrePrompt() {
    let titre = document.querySelector('#titre').value;

    if (titre) {
        let resultats = bibliotheque.filter(livre => livre.titre.toLowerCase() === titre.toLowerCase());
        console.log("Résultats de la recherche :", resultats);
    } else {
        console.log("Entrez un titre pour rechercher.");
    }




















  
}



function rechercherLivre(critére, valeur) {
    bibliotheque.filtrer(function (livre) {
        return livre.critere == valeur;
    }
    )


}

















function supprimerlivre(titre) {
    bibliotheque = bibliotheque.filter(function (livre) {

        return livre.titre == titre;
    })

}










function supprimerLivrePrompt() {
    // Récupère le titre du livre à supprimer
    let titre = document.querySelector('#titre2').value.trim(); // Utilise .trim() pour supprimer les espaces

    // Vérifie si un titre a été entré
    if (titre) {
        // Sauvegarde la longueur initiale de la bibliothèque
        let initialLength = bibliotheque.length;

        // Supprime le livre dont le titre correspond (insensible à la casse)
        bibliotheque = bibliotheque.filter(livre => livre.titre.toLowerCase() !== titre.toLowerCase());

        // Vérifie si le livre a été supprimé
        if (bibliotheque.length < initialLength) {
            console.log("Livre supprimé :", titre);
        } else {
            console.log("Aucun livre trouvé avec ce titre.");
        }
    } else {
        console.log("Entrez un titre pour supprimer.");
    }
}











function listerLivresTries() {

    bibliotheque.sort(function (a, b) {
        return a.annee - b.annee;
    });

}









function listerLivresPrompt() {
    document.getElementById('')

let livresTries = bibliotheque.sort((a, b) => a.annee - b.annee);
console.log("Livres triés :", livresTries);

}







console.log(bibliotheque);

