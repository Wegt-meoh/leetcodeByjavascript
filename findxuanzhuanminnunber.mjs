/**
 * @param {number[]} numbers
 * @return {number}
 */

function min(a, b) {
    if (a <= b) return a
    return b
}

var minArray = function (numbers) {
    if(numbers.length===0) return undefined
    if(numbers.length===1) return numbers[0]
    if(numbers[0]<numbers[numbers.length-1]) return numbers[0]
    let l=0,r=numbers.length-1,mid,high=numbers.length-1
    //following code is bad
    // while(numbers[high]===numbers[0]&&high>0){
    //     if(numbers[high]>=numbers[high-1]){
    //         high--
    //     }else{
    //         return numbers[high]
    //     }
    // }
    while(l<r){
        mid=Math.trunc((l+r)/2)
        if(numbers[mid]<numbers[high]){
            r=mid
        }else if(numbers[mid]>numbers[high]){
            l=mid+1
        }else{
            while(high>mid&&numbers[high]===numbers[mid]){
                if(numbers[high-1]>numbers[high]){
                    return numbers[high]
                }else{
                    high--
                }
            }
            r=high
        }
    }
    return numbers[l]
};

let a = [3,1]
let c=[2,2,2,3,2]
let b = [1,2,3,4,5]
console.log(minArray(a),minArray(b),minArray(c))