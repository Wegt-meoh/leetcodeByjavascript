function strRev(s){
    let res=''
    for(let i=s.length-1;i>=0;i--) res+=s[i]
    return res
}

var kthPalindrome = function(queries, intLength) {
    let ans=[],startNum=1,maxNum=1
    if(intLength%2===0){
        for(let i=0;i<intLength/2-1;i++) startNum*=10
    }else{
        for(let i=0;i<(intLength+2)/2-1;i++) startNum*=10
    }
    maxNum=startNum*10
    for(let i=0;i<queries.length;i++){
        let t=startNum+queries[i]-1
        if(t>=maxNum){
            ans.push(-1)
        }else{
            let c
            if(intLength%2===1){
                if(intLength===1){
                    c=''
                }else{
                    c=t+''
                    c=c.substring(0,c.length-1)
                    c=strRev(c)
                }
            }else{
                c=t+''
                c=c.strRev(c)
            }
            ans.push(parseInt(t+c))
        }
    }
    return ans
}

// console.log('safd'.substring(0,1))
console.log(kthPalindrome([492605370,206710368,19,985427531,55,13,979243001,831564215,83],15))