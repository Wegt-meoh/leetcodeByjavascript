/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

 function min(a,b){
    if(a<=b) return a
    return b
}

function max(a,b){
    if(a>=b) return a
    return b
}

var merge = function(intervals) {
    let res=[]
    while(intervals.length>0){
        let t=intervals.pop()
        for(let i=0;i<intervals.length;i++){
            let y=intervals[i]
            if(t[0]>=y[0]&&t[1]<=y[1]){
                t=null
                break
            }else if(y[0]>=t[0]&&y[1]<=t[1]){
                y[0]=t[0]
                y[1]=t[1]
                t=null
                break
            }else if(t[0]>y[1]||t[1]<y[0]){
                continue
            }else{
                y[0]=min(y[0],t[0])
                y[1]=max(y[1],t[1])
                t=null
                break
            }
        }
        if(t!==null){
            res.push(t)
        }
    }
    return res
};
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))