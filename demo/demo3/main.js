//  Les Boucles Itératives

//let i ;
// for (let i = 1 ;i <= 10 ; i++) {
//     console.log(`La boucle for s'est executée ${i} fois`)
// }

// let j =11;
// while(j <= 10) {
//     console.log(`La boucle while s'est executée ${j} fois`);
//     j++;
// }

// let k = 11;

// do {
//     console.log(`La boucle do while s'est executée ${k} fois`);
//     k++;
// }while(k <= 10)


let jourSem = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];

// Itération du tableau par la boucle for

for(let i = 0; i< jourSem.length; i++){
    console.log(jourSem[i]);
  // if(jourSem[i] == "Lundi"){
//     if(i == 0){
//     console.log("Bon début de semaine");
//    }
    if(i >= 1 && i <5){
        console.log("Bon début de semaine");
    }
}