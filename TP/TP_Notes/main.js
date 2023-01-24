

const addStudentToogleButton = document.querySelector("#add-student-visibility");
const addLessonFieldToogleButton = document.querySelector("#add-lessonfield-visibility");
const addGradeToogleButton = document.querySelector("#add-grade-visibility");

const addStudentForm = document.querySelector("#add-student-form");
const addLessonFieldForm = document.querySelector("#add-lessonfield-form");
const addGradeForm = document.querySelector("#add-grade-form");

//let bool = true;

addStudentToogleButton.addEventListener("click", () => {
    console.log("clique bouton etudiant")
   // if(bool){
    if(addStudentToogleButton.textContent == "OFF"){
        addStudentForm.classList.remove("hidden");
        addStudentToogleButton.textContent = "ON";
      //  bool = false;
    }else {
        addStudentForm.classList.add("hidden");
        addStudentToogleButton.textContent = "OFF";
       // bool = true;
    }
    
});

addLessonFieldToogleButton.addEventListener("click", () => {
    console.log("clique bouton matiere")
    if(addLessonFieldToogleButton.textContent == "OFF"){
        addLessonFieldForm.classList.remove("hidden");
        addLessonFieldToogleButton.textContent = "ON";
    }else {
        addLessonFieldForm.classList.add("hidden");
        addLessonFieldToogleButton.textContent = "OFF";
    }
});

addGradeToogleButton.addEventListener("click", () => {
    console.log("clique bouton note")
    if(addGradeToogleButton.textContent == "OFF"){
        addGradeForm.classList.remove("hidden");
        addGradeToogleButton.textContent = "ON";
    }else {
        addGradeForm.classList.add("hidden");
        addGradeToogleButton.textContent = "OFF";
    }
});