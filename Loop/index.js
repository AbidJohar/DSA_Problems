


// function findEvenOdd(num){

//     if(num%2 == 0){
//         console.log(`Number ${num} is even `);

//     } else {

//         console.log(`Number ${num} is odd `);
//     }

// }


// findEvenOdd(275628327572);
function count(){
    let count
}

function pattern(row, col) {
    count = 9;
 console.log("count", count);
 
    for (let i = 0; i < row; i++) {
        let rowShape = "";
        for (let j = i; j < col; j++) {

            rowShape += "* ";
          
        }
        console.log(rowShape);

    }


}

pattern(20, 20)