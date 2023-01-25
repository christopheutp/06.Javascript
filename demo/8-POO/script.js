console.warn("Démo THIS");

const car = {
    model: "Fiesta",
    manufacturer: "Ford",
    fullName: function () {
        return `${this.manufacturer} ${this.model}`
    }
}

console.warn("This dans une fonction (fonction ())");
console.log(car.fullName());


const carArrow = {
    model: "Fiesta",
    manufacturer: "Ford",
    fullName: () => {
        return `${this.manufacturer} ${this.model}`
    }
}

console.warn("This dans une fonction Arrow (() => )");
console.log(carArrow.fullName());

console.warn("THIS avec les élements du DOM");

const link = document.querySelector("#link");
link.addEventListener('click', () => {
    // this === window
    console.warn("This dans une fonction Arrow (() => )");
    console.log(this);
    
})

link.addEventListener('click', function () {
    // this === link
    console.warn("This dans une fonction (fonction ())");
    console.log(this);
})



