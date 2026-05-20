// Assignment 3: Determine triangle type

const sideA = Number(prompt("Enter the first side of the triangle:"));
const sideB = Number(prompt("Enter the second side of the triangle:"));
const sideC = Number(prompt("Enter the third side of the triangle:"));

const result = document.getElementById("result");

if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
  result.innerHTML = "Please enter three positive numbers.";
} else if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
  result.innerHTML = "These side lengths do not form a valid triangle.";
} else {
  let triangleType;

  if (sideA === sideB && sideB === sideC) {
    triangleType = "Equilateral triangle";
  } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
    triangleType = "Isosceles triangle";
  } else {
    triangleType = "Scalene triangle";
  }

  result.innerHTML = `
    <h2>Triangle Result</h2>
    <p>Sides: ${sideA}, ${sideB}, ${sideC}</p>
    <p><strong>Type:</strong> ${triangleType}</p>
  `;
}
