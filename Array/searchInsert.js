


var searchInsert = function(nums, target) {
   let n = nums.length;
   let left = 0;
   let right = n-1;

   while(left <= right){
        
        mid = Math.round((left + right)/2);
        if(nums[mid] == target){
            return mid
        } if(nums[mid] > target){
              right = mid - 1;
        } else {
            left = mid +1;
        }

   }
   return left; 
};

console.log(searchInsert([1,3,5,6],0));
