// Les events en javascript


function myButtonClick(){
    alert("Vous avez cliqué sur le bouton");
   
}


function myMouseOver(){
    alert("Vous avez survolé le bouton");
}


function myDblClick(){
    alert("Vous avez double cliqué sur le bouton");
}

function myFunctionAlert(arg){
    switch(arg){
        case 1 : alert("Vous avez cliqué sur le bouton 1");
        break;
        case 2 : alert("Vous avez survolé le bouton 2");
        break;
        case 3 : alert("Vous avez double cliqué sur le bouton 3");
        break;
        case 4 : alert("Vous n'avez plus le focus sur le bouton 4");
        break;
        case 5 : alert("Vous n'avez plus le focus sur le bouton 5");
        break;
    }
}

function radioButton () {
  //  console.log("clique sur le bouton");
     //1ere solution avec document.querySelector('input[name=choix]:checked').value
     let affichage= "<ul><li> 1ere solution : "+document.querySelector('input[name=choix]:checked').value + "</li></ul>";
     console.log(document.querySelector('input[name=choix]:checked').value);
 
 
     result.innerHTML = affichage;

}


const touches = [...document.querySelectorAll('.bouton')];
console.log(touches);
const listKeyCode = touches.map(touche => touche.dataset.name);
console.log(listKeyCode);


const btnvalider = document.querySelector('#btnValider');
const result = document.querySelector('#result');


console.log(document.getElementById("choix1").checked);

btnvalider.onclick = () => {
    radioButton();
}