// Problem Link - https://leetcode.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {


    const l = digits.length;

    if(l == 0)
        return [1]

    if(digits[l - 1] !== 9){
        digits[l-1]++
        return digits;
    }else {
        digits.pop()
        const result = plusOne(digits)
        result.push(0)
        return result;
    }
};