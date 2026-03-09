 

function isPalindrome (num) {
  
  let result = 0;
  let orignalValue = num;
  while(num > 0){
    let remainder = num % 10;
    let quotion = parseInt(num / 10);
    num = quotion
    result = result * 10 + remainder;
    
    if(orignalValue === result){
      return true;
    }
  }
  return false;
  
}

 console.log(isPalindrome(121));
 