


function smallestNo(arr){

let largestDigit = -Infinity;

for(let i of arr){
     
     
  if(i > largestDigit) {
     largestDigit = i;
  }
    
}
   return largestDigit;
}

console.log(smallestNo([8,4,2,6,9,3,1,-2,2,4,5]));
