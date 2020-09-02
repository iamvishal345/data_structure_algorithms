class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
      return this.bottom.value
  }
  push(value) {
    let newNode = new StackNode(value)
    if (!this.top) {
        this.top = newNode;
        this.bottom = newNode
    }else{
        newNode.next = this.top
        this.top = newNode
    }
    this.length++
    return this
  }
  pop() {
    if(!this.top) return null;
    let value = this.top.value
    if(this.length===1){
        this.bottom = null
    }
    this.top = this.top.next
    this.length--
    return value
  }
}
const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack)
