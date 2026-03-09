 

// function isPowerTwo (num){

//     if(num % 2 !== 0) return false;
//     let div = parseInt(num/2);
//     if( div == 1) return true

//   return  isPowerTwo(div);

// }

// console.log(isPowerTwo(16));

function isPowerThree (num){

    if(num % 2 === 0) return false;
    let div = Math.round(num/3);
    if( div == 1) return true

  return  isPowerThree(div);

}

console.log(isPowerThree(31));
