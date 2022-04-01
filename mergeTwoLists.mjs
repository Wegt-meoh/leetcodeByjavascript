function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    let t1=l1,t2=l2,res=new ListNode(1),aux=res
    while(t1!==null||t2!==null){
        if(t1!==null&&t2!==null){
            if(t1.val<t2.val){
                aux.next=new ListNode(t1.val)
                t1=t1.next
            }else{
                aux.next=new ListNode(t2.val)
                t2=t2.next
            }            
        }else if(t1!==null){
            aux.next=new ListNode(t1.val)
            t1=t1.next
        }else{
            aux.next=new ListNode(t2.val)
            t2=t2.next
        }
        aux=aux.next
    }
    return res.next
};

let l1=new ListNode(1)
l1.next=new ListNode(2)
l1.next.next=new ListNode(4)
let l2=new ListNode(3)
l2.next=new ListNode(5)
l2.next.next=new ListNode(7)

console.log(mergeTwoLists(l1,l2))