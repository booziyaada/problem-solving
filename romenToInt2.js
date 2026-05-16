/**
 * @param {string} s
 * @return {number}
 */
// Problem link - https://leetcode.com/problems/roman-to-integer/description/
var romanToInt = function (s) {
    const obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    total = 0;
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] < obj[s[i + 1]]) {
            total += obj[s[i + 1]] - obj[s[i]];
            i++;
        }
        else {
            total += obj[s[i]];
        }
    }
    return total;
};
console.log(romanToInt("MCMXCIV"));
