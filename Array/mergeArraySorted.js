

// var merge = function(nums1, m, nums2, n) {

//    let index = 0;

//    for(let i = 0 ; i< n; i++){
//        nums1[m + index++] = nums2[i]
//    }
//    nums1.sort((a,b) => a - b);

//  return nums1;   
// };



var merge = function (nums1, m, nums2, n) {

    let i = m - 1;
    let j = n - 1;
    let index1 = 0

    while (i >= 0 && j >= 0) {
        console.log("value of nums1 and nums2:", nums1[i], " ", nums2[j]);
        

        if (nums1[i] === nums2[j]) {
            console.log("its running");

            nums1[index1++] = nums1[i];
            i--;
        }
        if (nums1[i] > nums2[j]) {
            nums1[index1++] = nums1[i]
            i--;
        } else {
            nums1[index1++] = nums2[j];
            j--;
        }

    }
    return nums1
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));