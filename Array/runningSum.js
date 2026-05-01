

//__________( Brute force Solution )________________

// var runningSum = function(nums) {

// let resultArr = [];

//  for(let i=0; i< nums.length; i++){
//     let sum = 0;
//     for(let j=0; j<=i; j++){
        
//         sum += nums[j];
 
//     }
//     resultArr.push(sum);
//  }
//  return resultArr;
// };

// console.log(runningSum([1,2,3,4]));

//_____________( Optimal Solution )_______________

// var runningSum = function(nums) {

// let sum=0;
//  for(let i=0; i< nums.length; i++){
//      sum += nums[i];
//      nums[i] = sum;
    
//  }
//   return nums;
// };

// runningSum([1,2,3,4]);

//________________( Much Optimal solution )_____________

var runningSum = function(nums) {

 for(let i=1; i< nums.length; i++){
     nums[i] = nums[i] + nums[i - 1];
   
 }
  return nums;
};

runningSum([1,2,3,4]);

