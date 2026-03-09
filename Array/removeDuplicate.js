

function removeDuplicate(nums) {
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        //  console.log("value of i:",i);

        if (nums[i] == nums[i + 1]) {
            nums[index] = nums[i++];
            index++;
        } else {
            nums[index] = nums[i];
            index++;
        }

    }

    for(let i=index; i< nums.length; i++){
         nums[i] = "_";
    }


    return { k: index, nums }

}

console.log(removeDuplicate([1, 2, 2, 4, 5, 6, 6]));
