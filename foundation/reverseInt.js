
function reverseInt(num) {

    let rm, qo, rNum = 0;
    let forNnum = 2**31;

     if(num > 2**31 || -forNnum > num  ) return 0;

    while (num !== 0) {

        rm = num % 10;
        qo = parseInt(num / 10);
        num = qo;
        rNum = rNum * 10 + rm

    }
    return rNum;
}

console.log(reverseInt(-23235233223329));
