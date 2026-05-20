// Assignment 5: Sum of natural numbers using a for loop

const number = Number(prompt("Enter a positive integer:"));

const result = document.getElementById("result");

if (isNaN(number) || number <= 0 || !Number.isInteger(number)) {
  result.innerHTML = "Please enter a positive integer.";
} else {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  result.innerHTML = `
    <h2>Sum Result</h2>
    <p>The sum of natural numbers from 1 to ${number} is:</p>
    <p><strong>${sum}</strong></p>
  `;
}
