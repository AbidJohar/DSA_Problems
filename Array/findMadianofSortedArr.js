


var findMedianSortedArrays = function (nums1, nums2) {

    let mergeArr = [...nums1, ...nums2];
    let sortedArr = mergeArr.sort((a, b) => a - b);
    let n = mergeArr.length;
    let medain;
    let mid;

    if (mergeArr.length <= 1) return mergeArr[0];
    mid = Math.round((0 + (n - 1)) / 2);
    console.log("mid", mid);

    if (mergeArr.length % 2 !== 0) {
        console.log("if part");
        medain = sortedArr[mid];
        return medain;
    } else {
        console.log("if else");

        medain = parseFloat((sortedArr[mid] + sortedArr[mid - 1]) / 2);

        if (medain > 0) {
            return medain
        } else {
            return 0;
        }
    }
};

console.log(findMedianSortedArrays([1, 3], [2]));
