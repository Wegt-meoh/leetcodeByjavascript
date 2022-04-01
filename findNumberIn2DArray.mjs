/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var findNumberIn2DArray = function(matrix, target) {
    if(matrix.length===0||matrix[0].length===0) return false    
    let x=0
    let y=matrix[0].length-1
    let t
    while(x<matrix.length&&y>=0){
        t=matrix[x][y]
        console.log(t)
        if(t===target) return true
        else if(t>target) y--
        else x++
    }
    return false
};
let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
// 5,6,10,14
// 6,10,13,18
// 10,13,18,19

let target = 5
console.log(findNumberIn2DArray(matrix, target))