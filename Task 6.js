  function max_of_three(x, y, z) { max_val = 0; 
  if (x > y) {
       max_val = x; 
       
       } else { max_val = y; } 
       if (z > max_val) { max_val = z; } 
       return max_val; 
       
} 

console.log(max_of_three(10,0,1)); console.log(max_of_three(0,-100,0.5)); 
