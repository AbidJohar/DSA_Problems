

//________________(  Solution one )________________

// var singleNumber = function (nums) {

//     const hashMap = {};
    
//     for (let i = 0; i < nums.length; i++) {

//         if (hashMap[nums[i]]) {
//             hashMap[nums[i]] += 1;
//         } else {
//             hashMap[nums[i]] = 1;
//         }

//     }
    
//     const value = Object.entries(hashMap).find(value => value[1] === 1);
//     return value[0];

// };

// console.log(singleNumber([1]));

//________________(  Optimal Solution )________________


var singleNumber = function(nums) {

    let result = 0;

    for(let i = 0; i < nums.length; i++){

        result ^= nums[i]

    }
    return result;
};

console.log(singleNumber([1,1,2,3,2,5,3]));
