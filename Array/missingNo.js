
//____________________( Brute force approach )______________________

// function missingNum (nums){
//     let n = nums.length;
//     let sortedNums = nums.sort();
//     let mValue = 0;
    
//     for(let i = 0; i< n; i++){
        
//         if(sortedNums[i+1] - sortedNums[i] === 1){
//             continue;
//         } else{
//              mValue = sortedNums[i] + 1;
//              break;
//         }
        
//     }

// return  mValue;

// }

// console.log(missingNum([3,0,8,4,1,2,5,6,9]));

//____________________( Optimal approach )______________________
 

function missingNum (nums){

    let n = nums.length;
 
    let totalSum = (n * (n + 1))/2;
    let arrSum = 0;

    for(let i of nums){
      
        arrSum += i;

    }
    
     
  return  totalSum - arrSum;

}

console.log(missingNum([0,1,2,3,5]));
