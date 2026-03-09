


function smallestNo(arr){

let smallestDigit = Infinity;

for(let i of arr){
     
     
  if(i < smallestDigit) {
     smallestDigit = i;
  }
    
}
   return smallestDigit;
}

console.log(smallestNo([8,4,2,6,9,3,1,-2,2,4,5]));
