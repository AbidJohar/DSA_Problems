



function binarySearch(arr, n) {

    let start = 0;
    let end = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {

        let mid = parseInt((start + end) / 2);
            
        if (arr[mid] === n) {
            return mid;

        } else if (arr[mid] > n) {
          end = mid;
        } else {
            start = mid;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 8, 9], 8));
