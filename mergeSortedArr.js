/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// Problem Link - https://leetcode.com/problems/merge-sorted-array/ 
var merge = function(nums1, m, nums2, n) {
	i = m-1
	j = n-1
	k = (m + n) - 1
	while(j>=0){
		if(i < 0){
			nums1[k] = nums2[j]
			j--
		}
		else if(nums2[j] > nums1[i] ){
			nums1[k] = nums2[j]
			j--
		}
		else {
			nums1[k] = nums1[i]
			i--
		}
        k--
	}
};
