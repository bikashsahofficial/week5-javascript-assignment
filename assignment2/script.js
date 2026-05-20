// Assignment 2: Calculate distance between two points

const x1 = Number(prompt("Enter x coordinate for point 1:"));
const y1 = Number(prompt("Enter y coordinate for point 1:"));
const x2 = Number(prompt("Enter x coordinate for point 2:"));
const y2 = Number(prompt("Enter y coordinate for point 2:"));

const result = document.getElementById("result");

if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
  result.innerHTML = "Please enter valid numbers for all coordinates.";
} else {
  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  result.innerHTML = `
    <h2>Distance Result</h2>
    <p>Point 1: (${x1}, ${y1})</p>
    <p>Point 2: (${x2}, ${y2})</p>
    <p><strong>Distance:</strong> ${distance.toFixed(2)}</p>
  `;
}
