import Person from "./js/Person.js";

/* PERSON */



// Création d'un tableau de personnes
let persons = new Array();

let p1 = new Person("John","Martin")
persons.push(p1);
p1.Display();

let p2 =new Person("José","Garcia");
persons.push(p2);

for(let person of persons){
    person.Display();
}