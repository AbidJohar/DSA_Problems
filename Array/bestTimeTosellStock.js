
//_______________( Brute force solution O (n^2) )___________

// function sellTheStock (arr){
    
//  var maxProfit = 0;

//     for(let i = 0; i < arr.length; i++){
    
//          for(let  j = i + 1;  j < arr.length;  j++){
    //            let value =  arr[j] - arr[i];
    //                 // console.log("value:",value);
    
    //           if( maxProfit < value ){{
//             maxProfit = value;
//           }

//           }  
//     }
     
//     }
//     return maxProfit < 0 ? 0 : maxProfit;

// }

// console.log(sellTheStock([7,4,4,2]));


//_______________( Two pointer solution  O (n))___________

function sellTheStock (arr){
 
    let maxProfit = 0;
    let i = 0;
    let j=1;

 while ( i < arr.length && j < arr.length ){
       let value = arr[j] - arr[i];

    //    console.log("value:",value);
    
       if(value > maxProfit ){
        maxProfit = value;
       }
       j++;

       if(j === arr.length - 1){
         i++;
         j = i + 1; 
       }

 }
  
 return maxProfit;
 
}

console.log(sellTheStock([4,3,]));
