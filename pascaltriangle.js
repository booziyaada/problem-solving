/**
 * @param {number} numRows
 * @return {number[][]}
 */
// https://leetcode.com/problems/pascals-triangle/submissions/2043364373
var generate = function (numRows) {
    let arr = [[1],[1,1]]
    if(numRows == 1) return [arr[0]]
    if(numRows == 2) return [arr[0],arr[1]]
    for (let i = 2; i < numRows; i++) {
        arr[i] = []
        arr[i][0] = 1
        arr[i][i] = 1
        for (let j = 1; j < i; j++) {
            arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
        }
    }
    return arr
};