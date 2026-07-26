// Problem link - https://leetcode.com/problems/contains-duplicate/submissions/2073713119
var containsDuplicate = function (nums) {
    let count = 0;
    nums.sort()
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1] ) {
            count++;
            if (count > 0) {
                return true
            }
        }
    }
    return false
}
