import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from "./css/style.css";

const credits = document.getElementsByClassName('credits');
const grades = document.getElementsByClassName('grades');
const submitBtn = document.getElementById('submitbtn');

function calculate() {
  const totalGpa = (grades) => {
    let gpa;

    switch (grades) {
      case 'a':
        gpa = 4.0;
        break;
      case 'b':
        gpa = 3.0;
        break;
      case 'c':
        gpa = 2.0;
        break;
      case 'f':
        gpa = 0.0;
        break;
      default:
        gpa = 0.0; // Default to 0.0 if grade is not recognized
    }

    const creditsValue = parseFloat(credits.value);

    if (!isNaN(creditsValue)) { // Check if credits.value is a valid number
      let add = gpa * creditsValue;
      console.log(add);
    } else {
      console.log("Invalid credits value");
    }
  }

  totalGpa(grades.value);
}

submitBtn.addEventListener('click', calculate);