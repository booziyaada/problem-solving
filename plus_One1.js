// Problem link - https://leetcode.com/problems/plus-one/description/
var plusOne = function(digits) {
    let digitsStr = "";
// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
    for(let i = 0; i < digits.length; i++) {
        digitsStr = digitsStr + digits[i];
    }

    let result = String(BigInt(digitsStr) + 1n);

    return result.split("").map(Number);
};
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))