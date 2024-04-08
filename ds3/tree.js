class Node{
  constructor(data){
    this.data = data
    this.right = null
    this.left = null
    this.mid = null
  }
}

class ternaryTree{
  constructor(){
    this.root = null
  }

  insert(val){
    this.root = this.insertHelper(this.root,val)
  }

  insertHelper(node,val){
    if(node == null){
      return new Node(val)
    }
    if(val<node.data){
      node.left = this.insertHelper(node.left,val)
    }else if(val>node.data){
      node.right = this.insertHelper(node.right,val)
    }else{
      node.mid = this.insertHelper(node.mid,val)
    }
    return node
  }

  contains(val){
    let node = this.root
    while(node){
      if(node.data == val){
        return true
      }else if(val<node.data){
        node = node.left
      }else if(val>node.data){
        node = node.right
      }else{
        node = node.mid
      }
    }
    return false
  }

  display(){
    console.log(this.root);
  }
}

let tt = new ternaryTree()
tt.insert(3)
tt.insert(3)
tt.insert(1)
tt.insert(9)
tt.display()
console.log(tt.contains(2));
