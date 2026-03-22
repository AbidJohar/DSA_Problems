


//_______________________( Brute force solution )__________________

// function singeNum(nums){
    
//     const hashMap = {};

//     for(let i of nums){
        
//         if(!hashMap[i]){
//              hashMap[i] = 1;
//             } else {
//             hashMap[i] += 1;
//         }
//     }
//     let findvalue;
//     Object.entries(hashMap).map((value) => value[1] === 1 ? findvalue = parseInt(value[0]) : null );
  
   
// return  findvalue;
// }

// console.log(singeNum([2,2,3,4,3,5,6,6,4]));



//_______________________( Optimal solution )__________________

function singleNum(nums){
    let xor = 0;

    for(let num of nums ){
         xor = xor ^ num;
        
    }
    return xor;
}
console.log(singleNum([2,2,3,4,3,5,6,6,4]));
// console.log(singleNum([1, 2, 4, 1, 2]));

  
  
 


 