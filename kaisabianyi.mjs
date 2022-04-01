const s='afZ_r9VYfScOeO_UL^RWUc'
const t='flag'
let res=''
let index=5
for(let i =0;i<s.length;i++){
    res=res+(String.fromCharCode(s[i].charCodeAt()+index))
    index++
}
console.log(res)
