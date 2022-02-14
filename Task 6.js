
 function maximum(num1, num2, num3)
{
  let max = [];

  if (num1 > max)
  {
      max = num1;
  }

  if (num2 > max)
  {
      max = num2;
  }

  if (num3 > max)
  {
      max = num3;
  }
  return max;

}

console.log(maximum(10,0,1));
console.log(maximum(0,-100,0.5)); 
