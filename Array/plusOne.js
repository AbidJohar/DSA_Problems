


//_________________( Not much optimzed version )_____________
// var plusOne = function (digits) {
    //     let n = digits.length;
    //     let num = '';
    
    //     let concate =digits.reduce((acc, curr)=> acc + curr, "")
    
    //     let parseNum = BigInt(concate)
    
    //     let strNum = (parseNum + 1n).toString();
    
    //     console.log(strNum);
    
    
    //     let numArr = new Array();
    
    //     for (let i of strNum) {
        //         numArr.push(parseInt(i));
        //     }
        //     console.log(numArr);
        
        // return numArr;
        // };
        
        
//_________________( optimzed version )_____________

var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + 1 !== 10) {
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
        if (i === 0) {
            digits.unshift(1);
            return digits;
        }
    }    
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
 