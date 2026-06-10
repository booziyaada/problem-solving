// Problem link -  https://leetcode.com/problems/add-binary/description/
var addBinary = function(a, b) {
    let res = ""
    let carry = 0
    let i = a.length - 1
    let j = b.length - 1
    while (i >= 0 || j >= 0 || carry) {
        let bitA = i >= 0 ? Number(a[i]) : 0;
        let bitB = j >= 0 ? Number(b[j]) : 0;
        let tem = bitA + bitB + carry;
        // let tem = Number(a[i]) + Number(b[j])
        if (tem == 2) {
            carry = 1
            tem = 0
        } else if (tem == 3) {
            tem = 1
        } else {
            carry = 0
        }
        res += tem 
        i--;
        j--;
    }
    return res.split("").reverse().join("")
};

console.log(addBinary(11,1))