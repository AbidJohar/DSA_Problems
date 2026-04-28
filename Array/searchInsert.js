/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

    let start = 0;
    let end = nums.length - 1;

    while(start <= end){
           var mid = Math.round((start + end)/2);
           if(nums[mid] === target) return mid;
        console.log("value of mid:",nums[mid]);
        
           if(target > nums[mid]){
               start = mid + 1;
           } else {
              end = mid - 1;
           }

    }
   return start;

};

console.log(searchInsert([1,3,5,6], 2));
