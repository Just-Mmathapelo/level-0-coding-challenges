function converTemperatureToFahrenheit(celsius){
  var cTemp = celsius;
//multiply the given celsius value by 9/5 then add 32 
  var cToFahr = cTemp * 9 / 5 + 32;
  return cToFahr;
}
console.log(cToF(36))

function FtoC(fahrenheit){
    let celcius = fahrenheit*5/9 -32;
    return celcius;
}
console.log(FtoC(20));
