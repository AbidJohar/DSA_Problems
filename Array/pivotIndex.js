
//_____________( Brute force solution )__________________

// var pivotIndex = function(nums) {

// let leftSum = 0;
// let rightSum = 0;
// let midIndex = 0

// for(let i = 0; i< nums.length; i++){

//     for(let j = 0; j<nums.length; j++){


//         if(j < midIndex){
//          leftSum += nums[j];
//       } else if(j === midIndex){
//             continue;
//       } else  {
//           rightSum += nums[j];
//       }

//     }
//       console.log("value of leftsum and rightsum:",leftSum, rightSum);
      
//       if(leftSum === rightSum) {
//         return midIndex
//       }
//       leftSum = 0
//       rightSum = 0;
//       midIndex++;

// }

// return -1;
    
// };

// console.log(pivotIndex([2,1,-1]));

//_____________( Optimal solution )__________________


var pivotIndex = function(nums) {

let leftSumArr = new Array(nums.length).fill(0);
let rightSumArr = new Array(nums.length).fill(0);
 
for(let i = 1; i < nums.length; i++){
 
    leftSumArr[i] = leftSumArr[i - 1] + nums[i - 1];

}

for(let i = nums.length - 2; i >= 0; i--){
 
    rightSumArr[i] = rightSumArr[i + 1] + nums[i + 1];

}

 for(let i = 0; i< nums.length; i++){
    if(rightSumArr[i] === leftSumArr[i]){
        return i;
    }
 }
    
 return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]));

 

 

