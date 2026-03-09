

function mergeSortedArray (nums1, value1, nums2, value2) {

let index = 0;

  for(let i=0; i < value2; i++){
    
      nums1[value1  + index++] = nums2[i];

  }
     nums1.sort();
   
}

mergeSortedArray([2,4,6,9],2,[2,3,4,6,7,8], 2);