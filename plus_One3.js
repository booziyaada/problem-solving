/**
 * @param {number[]} digits
 * @return {number[]}
 */
// Problem Link - https://leetcode.com/problems/plus-one/
var plusOne = function(digits) {

    if(digits.length == 1){
        if(digits[0] == 9)
            return [1,0]
        else {
            digits[0]++
            return digits
        }
    }

    let i = digits.length - 1
    for(i; i >= 0; i--){
        if(digits[i] === 9){
            digits[i] = 0;
            continue;
        }
        else
            break;
    }

    if(i < 0){
        digits.unshift(1)
        return digits;
    }else {
        digits[i]++;
        return digits;
    }


        

};