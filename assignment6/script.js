// Assignment 6: Multiplication table using nested for loops

const number = Number(prompt("Enter a positive integer for the multiplication table:"));

const result = document.getElementById("result");

if (isNaN(number) || number <= 0 || !Number.isInteger(number)) {
  result.innerHTML = "Please enter a positive integer.";
} else {
  let tableHTML = "<h2>Multiplication Table</h2>";
  tableHTML += "<table>";

  for (let row = 1; row <= number; row++) {
    tableHTML += "<tr>";

    for (let column = 1; column <= number; column++) {
      tableHTML += `<td>${row * column}</td>`;
    }

    tableHTML += "</tr>";
  }

  tableHTML += "</table>";
  result.innerHTML = tableHTML;
}
