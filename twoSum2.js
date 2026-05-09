// This code is Time Complecity of O(n^2)
function twoSum(arr,target){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]==target){
                return [i , j]
            }
        }
    }
      console.log("This Number is Not Found")
}
console.log(twoSum([2,4,10,8,7],9))