var singleNumber = function(nums) {
    nums.sort()
    for(i=0;i<nums.length;i++){
        if(nums[i]!=nums[i+1]){
            return nums[i]
        }
    }
};
console.log(singleNumber([4,1,2,1,2]))