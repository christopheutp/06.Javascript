let myDogs =[
    {
        name : "Bernie",
        breed : "German Shepard",
        age : 8
    },
    {
        name : "Rex",
        breed : "Doberman",
        age : 4
    }
]

const select = document.getElementById('dog-select');
//const select = document.querySelector("#dog-select");
const btn = document.getElementById('btn-submit');
const output = document.getElementById("selectOutput");

// console.log(select);
// console.log(btn);
// console.log(output);


myDogs.forEach(chien => {
    console.log(chien.name);
    select.innerHTML += `<option value ="${myDogs.indexOf(chien)+1}">${chien.name}</option>`;
})

select.addEventListener("change", () => {
    let dogId = select.value;
    if(dogId != 0){
        output.textContent = `Vous avez sélétionné le chien avec l'ID : ${dogId}`
    }else {
        output.textContent="";
    }
    
})


