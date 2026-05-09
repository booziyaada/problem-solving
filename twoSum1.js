// This code is Time Complecity of O(n)
function twoSum(arr,target){
    let map = new Map()
    for(let i = 0; i < arr.length; i++){
        let complement = target - arr[i];
        if(map.has(complement)){
            return [map.get(complement),i]
        }
        else{
            map.set(arr[i],i)
        }
    }
    console.log("This Number is Not Found")
}
console.log(twoSum([2,8,9],9))

