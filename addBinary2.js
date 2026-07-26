/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// Problem link -  https://leetcode.com/problems/add-binary/description/
var addBinary = function (a, b) {
    function addThreeBits(p, q, r) {
    if (p == "1" && q == "1") return [r, "1"];
    if ((p == "0") && (q == "0")) return [r, "0"];
    if (r == "0") return ["1", "0"];
    return ["0", "1"];
}
    let res = ""
    let carry = "0"
    let i = a.length - 1
    let j = b.length - 1
    while (i >= 0 || j >= 0 || carry == "1") {
        let bitA = i >= 0 ? a[i] : "0";
        let bitB = j >= 0 ? b[j] : "0";
        let sum
        [sum,carry] = addThreeBits(bitA,bitB,carry)
        res += sum 
        i--;
        j--;
    }
    return res.split("").reverse().join("")
};