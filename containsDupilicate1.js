// Problem Link - https://leetcode.com/problems/contains-duplicate/submissions/2073741213/
var containsDuplicate = function(nums) {
    let map = new Set();
    for (let num of nums) {
        map.add(num);
    }
    if(map.size != nums.length){
        return true
    } else {
        return false
    }
};