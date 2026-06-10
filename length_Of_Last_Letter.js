/**
 * @param {string} s
 * @return {number}
 */
// Problem link - https://leetcode.com/problems/length-of-last-word/
var lengthOfLastWord = function(s) {
    count = 0
    for(i = s.length -1; i >= 0; i--){
        if(count === 0){
            if(s[i] === " ") {
                continue
            }else{
                count = 1
            }
        }
        if(count >= 1){
            if(s[i] !== " "){
            count++
        } else{
             break
            }
        }
    }
    return count-1
};