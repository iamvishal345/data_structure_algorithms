class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first.value;
  }
  enqueue(value) {
    let newNode = new QueueNode(value)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    }
    this.last.next = newNode;
    this.last = newNode
    this.length++

  }
  dequeue() {
      if(!this.first) return null
      if(this.first === this.last) this.last =null;
      let value = this.first.value
      this.first = this.first.next
      this.length--
      return value
      
  }
}
const myQ= new Queue();
myQ.enqueue("Joy");
myQ.enqueue("Matt");
myQ.enqueue("Pav");
myQ.enqueue("Sam");
// console.log(myQ)
console.log(myQ.dequeue())
console.log(myQ.dequeue())

