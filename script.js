const kelvin = 283;
const celsius = kelvin - 273;
const fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`${kelvin} K = ${celsius} °C = ${fahrenheit} °F`);