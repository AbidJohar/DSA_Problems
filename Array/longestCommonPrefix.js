

function longestCommonPrefix(strs) {

    let prefix = strs[0];
    let commonPrefix;

    for (let i = 0; i < strs.length; i++) {
        let j = 0;
        commonPrefix = "";
        while (j < strs[i].length) {

            if (prefix[j] === strs[i][j]) {
                commonPrefix += prefix[j];

            } else {
                break;
            }
            j++;
        }
         prefix = commonPrefix
    }
     
    return   prefix;

};

console.log(longestCommonPrefix(["aaa", "aa", "aaa"]));


