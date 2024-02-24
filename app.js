// The forecast today in kelvin
const kelvin = 293;

// Conversion from kelvin to celsius
const celsius = kelvin - 273;

// Conversion from celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Ensuring that we get a non decimal number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


