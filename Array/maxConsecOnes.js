


function maxConsecutiveOnce (arr){

   let hash = {};

    for(let i of arr){
       if(!hash[i]){
         hash[i] = 1;
       } else {
          hash[i] += 1;
       }
    }
    
    var max = -Infinity;
    Object.values(hash).map((value)=> {
     
    if(value > max){  
        max = value 
    }
  });

  return max;
  
  
}

console.log(maxConsecutiveOnce([2,2,2,2,2,2,2,3,3,3,4,5,6,6]));

