

//____________( 1st solution )___________________

// var majorityElement = function (nums) {

//     let n = nums.length;
//     let map = {};
//     let majElement = 0;
//     let result;

//     for (let i = 0; i < n; i++) {

//         if (map[nums[i]]) {
//             map[nums[i]] += 1;
//         } else {
//             map[nums[i]] = 1;
//         }
//     }


//     for (let key in map) {
//         if (map[key] > majElement) {

//             majElement = map[key];
//             result = parseFloat(key)

//         }
//     }
//     return result;
// };

// console.log(majorityElement([3, 2, 3]));

//____________( Optimal solution )___________________

var majorityElement = function (nums) {

    let count = 0;
    let majEle = null;

    for (let i = 0; i < nums.length; i++) {

        if (count === 0) {
            majEle = nums[i];
        }
        if (nums[i] === majEle) {
            count++;
        } else {
            count--;
        }

    }
return majEle

};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

