// Les Tableaux Associatifs (On accède aux éléments par sa clé => key )


// déclaration d'un tableau associatif ( Objet literals )

let personne = {
    nom : "Dupont",
    prenom : "Jean",
    Age:25
};

// Affichage d'un objet
console.log(personne); 
console.table(personne); 
console.log(typeof personne);


// Affichage de la valeur à une clé
console.log(personne.prenom); // afficher le prenom
console.log(personne['nom']) // afficher le nom