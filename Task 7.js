function converCelciusToFahrenheit(celsius) {
     var cTemp = celsius;
      var cToFahr = cTemp * 9 / 5 +32; 
      return cToFahr;
    } 
console.log(converCelciusToFahrenheit(10)); 
//fahrenheit to celcius
function convertFahrenheitToCelcius(temp) {
   var sum = ((temp - 32) * (5/9));
   return sum;
} 
   
console.log(convertFahrenheitToCelcius(50));
