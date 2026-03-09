

var sortArray = function (nums) {

    if (nums.length <= 1) return nums;
    let mid = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, mid)); 
    let right = sortArray(nums.slice(mid));

    return merge(left, right);
};

function merge(left, right) {

    console.log("left and right:",left , right);
    
    let sortedArray = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {

        if (left[i] > right[j]) {

            sortedArray.push(right[j++]);
        } else {

            sortedArray.push(left[i++]);
        }
       console.log("value of i and j:",i , j);  
    }
    
    while( i< left.length)  sortedArray.push(left[i++]);
    while( j< left.length)  sortedArray.push(right[j++]);

    console.log("sorted Array:", sortedArray);
    
    return sortedArray
        
}

console.log(sortArray([2, 9, 1, 5]));
