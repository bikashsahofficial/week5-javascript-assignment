// Assignment 4: Determine grade from score

const score = Number(prompt("Enter your course score from 0 to 100:"));

const result = document.getElementById("result");
let grade;

if (isNaN(score) || score < 0 || score > 100) {
  result.innerHTML = "Please enter a valid score between 0 and 100.";
} else {
  if (score <= 39) {
    grade = 0;
  } else if (score <= 51) {
    grade = 1;
  } else if (score <= 63) {
    grade = 2;
  } else if (score <= 75) {
    grade = 3;
  } else if (score <= 87) {
    grade = 4;
  } else {
    grade = 5;
  }

  result.innerHTML = `
    <h2>Grade Result</h2>
    <p>Your score is ${score}.</p>
    <p><strong>Your grade is:</strong> ${grade}</p>
  `;
}
