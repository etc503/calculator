function temp(farenh) {
  return ((farenh - 32)*5)/9;
}

const farenh = parseInt(prompt("Enter a temperature in Farenheit"));
const celsius = temp(farenh).toFixed(2);
alert("That temperature in Celsius is " + celsius +"degrees");

