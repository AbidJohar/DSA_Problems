

function BinarySearch(nums, target) {

    let n = nums.length;
    let first = 0;
    let last = n - 1;

    for (let i = 0; i < nums.length; i++) {
        sum = first + last;
        mid = parseInt(sum / 2);
        if (nums[mid] === target) {
            if (nums[mid] !== nums[mid + 1]) {
                mid = mid + 1;
                console.log("value of index:", mid)
            } else if (nums[mid] !== nums[mid - 1]) {
                mid = mid - 1;
                console.log("value of index:", mid)
            } else {
                console.log("value of index:", mid)

            }
            break;

        } else if (target > nums[mid]) {
            first = mid;
            console.log("value else if:", nums[mid]);

        } else {
            last = mid
            console.log("value else:", nums[mid]);
        }
        console.log("loop runs ");

    }

}

BinarySearch([1, 3, 5, 6], 2);