class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  insert(node) {
    if (!this.root) {
      this.root = node
      return
    }
    let temp = this.root
    while (true) {
      if (node.data < temp.data) {
        if (temp.left == null) {
          temp.left = node
          break;
        } else {
          temp = temp.left
        }
      } else {
        if (temp.right == null) {
          temp.right = node
          break;
        } else {
          temp = temp.right
        }
      }
    }
  }

  contains(node) {
    let temp = this.root
    if (node.data == this.root.data) {
      return true
    }

    while (temp != null) {
      if (node.data < temp.data) {
        temp = temp.left
      } else if (node.data > temp.data) {
        temp = temp.right
      } else {
        return true
      }
    }
    return false
  }

  remove(value) {
    if (this.contains(new Node(value))) {
      this.root = this.removeNode(this.root, value)
    } else {
      return "invalid value"
    }
  }

  removeNode(current, value) {
    if (current == null) {
      return
    }

    if (current.data == value) {
      if (current.left == null && current.right == null) {
        return null
      } else if (current.right == null) {
        return current.left
      } else if (current.left == null) {
        return current.right
      } else {
        let temp = this.smallestValue(current.right)
        current.data = temp.data
        current.right = this.removeNode(current.right, temp.data)
        return current
      }
    } else if (value < current.data) {
      current.left = this.removeNode(current.left, value)
      return current
    } else {
      current.right = this.removeNode(current.right, value)
      return current
    }
  }

  smallestValue(node) {
    while (node.left != null) {
      node = node.left
    }
    return node
  }

  inOrder(node) {
    if (node == null) {
      return node
    }
    this.inOrder(node.left)
    console.log(node.data);
    this.inOrder(node.right)
  }

  posteOrder(node) {
    if(node == null){
    return node
    }
    this.inOrder(node.left)
    this.inOrder(node.right)
    console.log(node.data);
  }

  preOrder(node){
    if(node == null){
      return node
    }
      console.log(node.data);
      this.inOrder(node.left)
      this.inOrder(node.right)
  }

  depth(){
   return this.maxDepthHelper(this.root)
  }

  maxDepthHelper(node){
    if(node == null){
      return node
    }
    return Math.max(1+this.maxDepthHelper(node.left),1+this.maxDepthHelper(node.right))
  }
}

let tree = new BinaryTree()

tree.insert(new Node(15))
tree.insert(new Node(8))
tree.insert(new Node(17))
console.log(tree.depth(),"depth");
tree.posteOrder(tree.root)


