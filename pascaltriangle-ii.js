/**
 * @param {number} rowIndex
 * @return {number[]}
 */
//  https://leetcode.com/problems/pascals-triangle-ii/submissions/2044712175
var getRow = function (rowIndex) {
    let arr = [[1], [1, 1]]
    if (rowIndex == 0) return arr[0]
    if (rowIndex == 1) return arr[0], arr[1]
    for (let i = 2; i <= rowIndex; i++) {
        arr[i] = []
        arr[i][0] = 1
        arr[i][i] = 1
        for (let j = 1; j < i; j++) {
            arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
        }
    }
    return arr[rowIndex]
};