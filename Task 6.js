  function maxOfThree(x, y, z) {
       maxVal = 0; 
       if (x > y) {
       maxVal = x; 
       
       } else { maxVal = y; } 
       if (z > maxVal) { maxVal = z; } 
       return maxVal; 
       
} 

console.log(maxOfThree(10,0,1));
console.log(maxOfThree(0,-100,0.5)); 
