//Problem Link - https://leetcode.com/problems/contains-duplicate/submissions/2073731862
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map();
    for (let num of nums) {
        if (map.has(num)) {
            return true;
        }
        map.set(num);
    }
    return false;
};