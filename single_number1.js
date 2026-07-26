/**
 * @param {number[]} nums
 * @return {number}
 */
// https://leetcode.com/problems/single-number/submissions/2050446000   
var singleNumber = function(nums) {
    nums.sort()
    for(i=0;i<nums.length;i=i+2){
        // if(i == nums.length){
        // }
        if(nums[i]!=nums[i+1]){
            return nums[i]
        }
        // else if(i == nums.length)return nums[i]
    }
};