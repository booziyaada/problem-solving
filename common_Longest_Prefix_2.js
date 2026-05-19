/**
 * @param {string[]} strs
 * @return {string}
 */
// Problem Link - Problem Link - https://leetcode.com/problems/longest-common-prefix/description/
var longestCommonPrefix = function(strs) {
    let shortestSt = strs[0];
    for(let i = 1; i < strs.length; i++){
        if(strs[i].length < shortestSt )
            shortestSt = strs[i]
    }

    // ["c","acc","ccc"]

    let comparePosition = 0;
    while(shortestSt != "" && comparePosition < strs.length ){
        if(!strs[comparePosition].startsWith(shortestSt))
            shortestSt = shortestSt.slice(0, shortestSt.length - 1)
        else 
            comparePosition++;
    }

    return shortestSt;
 
};