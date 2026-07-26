/**
 * @param {string} s
 * @return {boolean}
 */
// https://leetcode.com/problems/valid-palindrome/submissions/2050244435
var isPalindrome = function (s) {
    if (s == " ") {
        return true
    }
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    for (i = 0; i <= s.length / 2; i++) {
        j = s.length - 1 - i
        if (s[i] !== s[j]) {
            return false
        }
    }
    return true
};