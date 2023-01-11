// Déclaration de deux tableaux
let legumes = ["Carottes","Choux","Haricots"];
let fruits = ["Raisin","Bananes","Abricots"];

//Affichage des deux tableaux
console.table(legumes);
console.table(fruits);


//Création d'un tableau à 2 dimensions depuis nos deux tableaux
let primeur = [legumes,fruits];
// let primeur = new Array(legumes,fruits); // Equivalent

// Affichage d'un tableau à deux dimensions dans la console
console.table(primeur);

//Affichage d'un élement à un index preci
 console.log(primeur[0][0]);//Carottes
 console.log(primeur[1][2]);//Abricots