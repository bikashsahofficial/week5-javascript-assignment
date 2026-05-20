// Assignment 1: Convert Celsius to Fahrenheit and Kelvin

const celsius = Number(prompt("Enter temperature in Celsius:"));

const fahrenheit = (celsius * 9 / 5) + 32;
const kelvin = celsius + 273.15;

const result = document.getElementById("result");

if (isNaN(celsius)) {
  result.innerHTML = "Please enter a valid number.";
} else {
  result.innerHTML = `
    <h2>Conversion Result</h2>
    <p><strong>Celsius:</strong> ${celsius.toFixed(2)} °C</p>
    <p><strong>Fahrenheit:</strong> ${fahrenheit.toFixed(2)} °F</p>
    <p><strong>Kelvin:</strong> ${kelvin.toFixed(2)} K</p>
  `;
}
