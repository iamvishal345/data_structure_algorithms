class LinkedNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
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
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = new LinkedNode(value);
    this.head.prev = newNode;
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
      newNode.prev = targetNode;
      newNode.next = targetNode.next;
      targetNode.next.prev = newNode;
      targetNode.next = newNode;
      this.length++;
    }
  }
  remove(index) {
    if (index > this.length) return "Invalid Index Value";
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return;
    }
    let targetNode = this.traverseToIndex(index);
    targetNode.next = targetNode.next.next;
    targetNode.next.prev = targetNode;
    this.length--;
  }
  traverseToIndex(index) {
    let currNode = this.head;
    for (let i = 1; i < index; i++) {
      currNode = currNode.next;
    }
    return currNode;
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
sampleList.remove(0);
// sampleList.printList();
console.log(sampleList);
