import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from "./css/style.css";

const credits = document.getElementsByClassName('credits');
const grades = document.getElementsByClassName('grades');
const submitBtn = document.getElementById('submitbtn');

//Calculates GPA
function calculate() {
  let totalGradePoints = 0;
  let totalCredits = 0;
  let gpa = 0;

  const displayGpa = () => {
    const displayGpaDiv = document.createElement('div');
    displayGpaDiv.classList.add('gpadisplay');

    const displayHeaderText = document.createElement('h1');
    displayHeaderText.innerText = "Your Semester GPA is";

    const displayGpaText = document.createElement('h2');
    displayGpaText.innerText = gpa.toFixed(2);

    if(gpa.toFixed(2) >= 3.5){
      displayGpaDiv.style.backgroundColor = '#54b726';
    } else if(gpa.toFixed(2) >= 3.2){
      displayGpaDiv.style.backgroundColor = '#44ff00';
    } else if(gpa.toFixed(2) >= 2.6){
      displayGpaDiv.style.backgroundColor = '#b6b400';
    } else if(gpa.toFixed(2) >= 2.0){
      displayGpaDiv.style.backgroundColor = '#87100f';
    } else if(gpa.toFixed(2) < 2.0){
      displayGpaDiv.style.backgroundColor = '#450000';
    } 

    document.getElementById("gpacontainer").innerHTML = "";
    displayGpaDiv.append(displayHeaderText);
    displayGpaDiv.append(displayGpaText);
    document.getElementById("gpacontainer").append(displayGpaDiv);
  }
  
  const totalgrades = () => {
    for (let i = 0; i < grades.length; i++) {
      let grade = grades[i].value;
      let credit = parseFloat(credits[i].value);

      let myGrades;

      switch (grade) {
        case '1': //A
          myGrades = 4.0;
          break;
        case '2': //B
          myGrades = 3.0;
          break;
        case '3': //C
          myGrades = 2.0;
          break;
        case '4': //F
          myGrades = 0.0;
          break;
        default:
          myGrades = 0.0; // Default to 0.0 if grade is not recognized
      }

      if (!isNaN(credit)) { // Check if credit is a valid number
        let gradePoints = myGrades * credit; //Multiply Grades by Credits

        totalGradePoints += gradePoints; //Add total number of grade points togeher
        totalCredits += credit; //Add total number of credits together

        gpa = totalGradePoints/totalCredits; //Divide the total number of grade points by the total number of credits
      
        displayGpa();
      } else {
        console.log("Invalid credits value");
      }
    }
  }
  totalgrades();
};

submitBtn.addEventListener('click', calculate);