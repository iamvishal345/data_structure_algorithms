/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if(!l1 && !l2)return null
  let num1 =""
  let num2 = ""
    while(l1 || l2){
      if(l1){
        num1 = l1.val+num1
        l1 = l1.next
      }
      if(l2){
        num2 = l2.val+num2
        l2 = l2.next
      }
    }
    
    let num3 = +num1 + +num2
    let head = new ListNode(num3%10)
    let curr = head
    num3 = Math.floor(num3/10)
    while(num3>0){
      console.log(num3%10)
      curr.next = new ListNode(num3%10)
      num3 = Math.floor(num3/10)
      curr = curr.next
    }
    return head
};