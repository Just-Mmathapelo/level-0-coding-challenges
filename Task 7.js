
function converCelciusToFahrenheit(celsius) {
     const cTemp = celsius;
      const cToFahr = cTemp * 9 / 5 +32; 
      return cToFahr;
    } 
console.log(converCelciusToFahrenheit(10)); 
//fahrenheit to celcius
function convertFahrenheitToCelcius(temp) {
   const sum = ((temp - 32) * (5/9));
   return sum;
} 
   
console.log(convertFahrenheitToCelcius(50));
