// Problem link - https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
var strStr = function(haystack, needle) {

    for (let i = 0; i <= haystack.length; i++) {
        if (haystack.startsWith(needle, i)) {
            return i;
        }
    }
    return -1;
};
