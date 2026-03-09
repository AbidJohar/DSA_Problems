


function countNegative(arr) {

let count = 0;

 for(let i of arr){
     
    if(i < 0){
        count++;
    }
    
 }
 return count;   
}


console.log(countNegative([3,-2,4,2,5,-6,8]));
