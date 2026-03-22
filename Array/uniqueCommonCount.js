

function uniqueCommonCount(word1, word2){

    let set1 = new Set(word1);
    let set2 = new Set(word2);
    let count = 0;
    
    for(let ch of set1){
     
        if(set2.has(ch)){
            count++;
        }

    }
    return count;

}

console.log(uniqueCommonCount("aabbccd","abcddee"));
