// les Structures Conditionnelles

console.log("les Structures Conditionnelles");

// L'instruction if ( Si.... Alors) else (Sinon...)

let compte = 1500;

// Avec plusieurs vérifications

if (compte > 0)
    console.log("Votre compte est créditeur"); // si ma condition est True


if (compte < 0) {
    console.log("Votre compte est débiteur")
}

// Avec plusieurs instructions

if (compte > 0) {
    console.log("Votre compte est créditeur");
    console.log(`Vous avez ${compte} euros`);
}
else {
    console.log("Votre compte est débiteur ou null")
    console.log(`Vous avez ${compte} euros`);
}

// Avec un Booléen
let estCrediteur = (compte > 0)
if (estCrediteur)
    console.log("Votre compte est créditeur (Avec un bool)")
else
    console.log("Votre compte est débiteur (Avec un bool)")

// Avec une récupération de saisie utilisateur
let age = 0;
//age = Number(prompt("Veuillez saisir votre age : "))
console.log(typeof (age)) // verifie le type de ma variable age

if (age < 13) {
    console.log("Vous êtes un enfant")
}
else if (age >= 18) {
    console.log("Vous êtes un adulte")
}
else {
    console.log("Vous êtes un ado")
}

// SWITCH CASE

const civilite = "rien";
switch (civilite) {
    case 'Mr.':
        console.log("Bonjour Monsieur");
        break;
    case 'Mme':
        console.log("Bonjour Madame");
        break;
    default:
        console.log("Bonjour Mademoiselle");
        break;
}

const cond = "autre";
switch (cond) {
    case 'Oranges':
        console.log("Les oranges sont à 2.99€/kg");
        break;
    case 'Mangues':
    case 'Papayes':
        console.log("Les Mangues et les Papayes sont à 9.99€/kg");
        break;
    default:
        console.log(`Désole, nous sommes à cour de ${cond}`);
        break;

}

// Switch avec Range de valeurs

age = 15;
let message = "";
switch (true) {
    case age <= 6:
        message = 'Votre enfant est dans la catégorie "BABY" ';
        break;
    case age <= 8:
        message = 'Votre enfant est dans la catégorie "Poussin" ';
        break;
    case age <= 10:
        message = 'Votre enfant est dans la catégorie "Pupille" ';
        break;
    case age <= 12:
        message = 'Votre enfant est dans la catégorie "Minime" ';
        break;
    default:
        message = 'Votre enfant est dans la catégorie "Cadet" ';
        break;
}

console.log(message);


