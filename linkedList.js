class LinkedNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new LinkedNode(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new LinkedNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = new LinkedNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  insert(index, value) {
    //check params
    if (index >= this.length) {
      this.append(value);
    } else {
      let targetNode = this.traverseToIndex(index);
      const newNode = new LinkedNode(value);
      newNode.next = targetNode.next;
      targetNode.next = newNode;
      this.length++;
    }
  }
  remove(index) {
      if(index>this.length)return "Invalid Index Value"
      if(index===0){
          this.head = this.head.next
          this.length--
          return
      }
      let targetNode = this.traverseToIndex(index)
      targetNode.next = targetNode.next.next
      this.length--
  }
  traverseToIndex(index) {
    let currNode = this.head;
    for (let i = 1; i < index; i++) {
      currNode = currNode.next;
    }
    return currNode
  }
  reverse(){
    if(!this.head.next)return
    // Method 1
    // let curr = this.head
    // this.head = null
    // while(curr){
    //   this.prependNode(curr)
    //   curr = curr.next
    // }

    
    //method 2
    let first = this.head
    let second = first.next
    while(second){
      let temp = second.next
      second.next = first
      first = second
      second = temp
    }
    this.head.next = null
    this.head = first
  }
  prependNode(node) {
    let newNode = new LinkedNode(node.value)
    newNode.next = this.head;
    this.head = newNode;
  }
  printList() {
    const array = [];
    let currNode = this.head;
    while (currNode !== null) {
      array.push(currNode.value);
      currNode = currNode.next;
    }
    console.log(array);
  }
}

const sampleList = new LinkedList(10);
sampleList.append(20);
sampleList.append(30);
sampleList.prepend(5);
sampleList.prepend(15);
sampleList.insert(3, 56);
sampleList.printList();
sampleList.reverse()
sampleList.printList()
