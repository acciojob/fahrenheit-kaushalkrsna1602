function toFahrenheit(celsius) {
    // Convert Celsius to Fahrenheit using the formula and round to two decimal places
    return ((celsius * 9/5) + 32).toFixed(2);
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
