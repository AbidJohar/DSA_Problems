

const moveZero = (arr) => {


    let start = 0;
    let end = arr.length - 1;
     
    while ( start < end ){
     
        if(arr[start] === 0 && arr[end] !== 0){
            let temp = arr[end];
            arr[end] = arr[start];
            arr[start] = temp;
            start++;
            end--;

        } else if(arr[start] !== 0 && arr[end] !== 0){
               start++;
        } else if(arr[start] === 0 && arr[end] === 0){
               end--;
        } else {
            start++;
            end--;
        }
    
    }
   console.log("Array:",arr);
   

}

moveZero([2,0, 3, 0, 2, 0, 0]);
