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

  remove(value){
    this.root = this.helperRemove(this.root,value)
  }

  helperRemove(current,value){
    if(current == null){
      return null
    }

    if(current.data == value){
        if(current.left ==null && current.right == null){
          return null
        }else if(current.left ==  null){
          return current.right
        }else if(current.right == null){
          return current.left
        }else{
          let temp = this.smallestValue(current.left)
          current.data = temp.data

          current.right = this.helperRemove(current.right,temp.data)
          return current
        }
    }else if(value < current.data){
      current.left =  this.helperRemove(current.left,value)
      return current
    }else if(value>current.data){
      current.right = this.helperRemove(current.right,value)
      return current
    }
   }


   smallestValue(node){
    while(node.right!=null){
      node = node.right
    }
    return node
   }


  display() {
    console.log(this.root);
  }
}

let tree = new BinaryTree()

tree.insert(new Node(15))
tree.insert(new Node(8))
tree.insert(new Node(17))
tree.insert(new Node(11))
tree.insert(new Node(20))
tree.insert(new Node(4))
tree.insert(new Node(6))
tree.remove(4)
tree.display()