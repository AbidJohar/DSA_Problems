

// function removeDuplicate(nums) {
//     let index = 0;

//     for (let i = 0; i < nums.length; i++) {
//         //  console.log("value of i:",i);

//         if (nums[i] == nums[i + 1]) {
//             nums[index] = nums[i++];
//             index++;
//         } else {
//             nums[index] = nums[i];
//             index++;
//         }

//     }

//     for(let i=index; i< nums.length; i++){
//          nums[i] = "_";
//     }


//     return { k: index, nums }

// }

// console.log(removeDuplicate([1, 2, 2, 4, 5, 6, 6]));



var removeDuplicates = function (nums) {

    if (nums.length <= 0) return 0;
    let k = 0;
    let j = 0;
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] !== nums[i + 1]) {
            nums[j++] = nums[i];
            k++;
        }

    }
    
    for (let i = j; i < nums.length; i++) {
        nums[j] = "_";
    }


    console.log("nums and k:", nums, " ", k);

};
removeDuplicates([1, 1, 2])



