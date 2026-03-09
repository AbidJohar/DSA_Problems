function secondLargest(arr) {
    var n = arr.length;
    var l = -Infinity;
    var sl = -Infinity;
    if (n < 2) {
        return "Array is Too short";
    }
    for (var i of arr) {  

        if (i > l) {
            sl = l;
            l = i;   
        }
        else if (sl < l && i !== l ) {
            sl = i;
            return sl 
        }
    }
    return "no second largest";
}
var array = [2,2,2,2,2];

console.log( secondLargest(array));
