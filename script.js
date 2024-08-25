function toFahrenheit(celsius) {
    // Formula to convert Celsius to Fahrenheit
    return (celsius * 9/5) + 32;
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
