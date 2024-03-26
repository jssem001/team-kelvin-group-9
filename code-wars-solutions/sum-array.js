// Sum Numbers solution
function sum (numbers) {
    "use strict";
  let total = 0;
  for(let i of numbers){
    total += i;
  };
  return total;  
};