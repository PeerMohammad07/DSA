class Stack{
  constructor(){
    this.top = null
  }

  push(newNode){
      newNode.next = this.top
      this.top = newNode
  }

  pop(){
    if(!this.top){
      return null
    }else{
      this.top = this.top.next
    }
  }

  display(){
    let temp = this.top
    while(temp){
      console.log(temp.data);
      temp = temp.next
    }
  }
}

class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}

let stack = new Stack
stack.push(new Node(4))
stack.push(new Node(2))
stack.pop()
stack.display()