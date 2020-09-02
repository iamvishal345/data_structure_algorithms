class TreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let curr = this.root;
    while (curr) {
      if (value <= curr.value) {
        if (curr.left) {
          curr = curr.left;
        } else {
          curr.left = newNode;
          break;
        }
      } else {
        if (curr.right) {
          curr = curr.right;
        } else {
          curr.right = newNode;
          break;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) return "Empty Array";
    let curr = this.root;
    while (curr) {
      if (value === curr.value) {
        return curr;
      } else if (value < curr.value) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return "Not Found";
  }
  remove(value) {
    if (!this.root) return "Empty Array";
    let curr = this.root;
    let parentNode = null;
    while (curr) {
      if (value < curr.value) {
        parentNode = curr;
        curr = curr.left;
      } else if (value > curr.value) {
        parentNode = curr;
        curr = curr.right;
      } else {
        if (!curr.right) {
          if (!parentNode) {
            this.root = curr.left;
          } else {
            if (curr.value < parentNode.value) {
              parentNode.left = curr.left;
            } else if (curr.value > parentNode.value) {
              parentNode.right = curr.left;
            }
          }
        } else if (!curr.right.left) {
          if (!parentNode) {
            this.root = curr.left;
          } else {
            curr.right.left = curr.left;
            if (curr.value < parentNode.value) {
              parentNode.left = curr.right;
            } else if (curr.value > parentNode.value) {
              parentNode.right = curr.right;
            }
          }
        } else {
          let leftmost = curr.right.left;
          let leftmostParent = curr.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          leftmostParent.left = leftmost.right;
          leftmost.left = curr.left;
          leftmost.right = curr.right;
          if (!parentNode) {
            this.root = leftmost;
          } else {
            if (curr.value < parentNode.value) {
              parentNode.left = leftmost;
            } else {
              parentNode.right = leftmost;
            }
          }
        }
      }
    }
  }
  //Left-->Root-->Right
  DFSInorder() {
    return traverseInOrder(this.root, []);
  }
  //Root-->Left-->Right
  DFSPreorder() {
    return traversePreOrder(this.root, []);
  }
  DFSPostorder() {
    return traversePostOrder(this.root, []);
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(tree.DFSInorder());
// console.log(tree.DFSPreorder());
// console.log(tree.DFSPostorder());
console.log(isValidBST(tree.root))
//   console.log(tree.lookup(20));
//   console.log(tree.lookup(150));
// console.log(JSON.stringify(traverse(tree.root)))

//     9
//  4     20
//1  6  15  170
function isValidBST(root) {
    
    let arrQ = [root]
    let node
    while(arrQ.length>0){
        console.log(arrQ)
        node = arrQ.shift()
        if(node.left){
            if(node.left.value<=node.value){
                if(node.left.left || node.left.right)
                    arrQ.push(node.left)
            }else{
                return false;
            }
        }
        if(node.right){
            if(node.right.value>=node.value){
                if(node.right.left || node.right.right)
                    arrQ.push(node.right)
            }else{
                return false;
            }
        }
    }
    return true;
};

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}
