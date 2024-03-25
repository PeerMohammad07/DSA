class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}

class SingleLinkedList{
  constructor(){
    this.head = null
    this.tail = null
  }

  addAtEnd(newNode){
    if(!this.head){
     this.tail = this.head = newNode
     return
    }

    let temp = this.head
    while(temp.next){
      temp = temp.next
    }
    temp.next = newNode
    this.tail = newNode
  }

  addAtFirst(newNode){
    if(!this.head){
      this.tail = this.head = newNode
    }

    let temp = this.head
    newNode.next = temp
    this.head = newNode
  }

  arrayToLL(array){
    for(let i=0;i<array.length;i++){
      this.addAtEnd(new Node(array[i]))
    }
  }

  deleteFromFirst(){
    let temp = this.head
    this.head = temp.next
  }

  delSpecValue(val){
    if(this.head.data == val){
      let temp = this.head
      this.head = temp.next
      return
    }

    let temp = this.head
    let prev = null
    while(temp.data!=val){
      prev = temp
      temp = temp.next
    }
    prev.next = temp.next
    if(!prev.next){
      this.tail = prev
    }
  }

  reverse(){
    let temp = this.head
    let prev = null
    while(temp){
      let next = temp.next
      temp.next = prev
      prev = temp
      temp = next
    }
    this.head = prev
  }

  removeDup(){
    if(!this.head){
      console.log("no values");
      return
    }
    let temp = this.head
    while(temp&&temp.next){
      if(temp.data==temp.next.data){
        temp.next = temp.next.next
      }
        temp = temp.next
      
    }
  }

  middleValue(){
    let slow = this.head
    let fast = this.head
    let prev = null
    while(fast&&fast.next){
      prev = slow
      slow = slow.next
      fast = fast.next.next
    }
    prev.next = slow.next
  }

  isPalindrome(){
    let slow = this.head
    let fast = this.head
    while(fast&&fast.next){
      slow = slow.next
      fast = fast.next.next
    }

    let temp = slow
    let prev = null
    while(temp){
      let next = temp.next
      temp.next = prev
      prev = temp
      temp = next
    }

    let p1 = prev
    let p2 = this.head
    while(p1&&p2){
      if(p1.data != p2.data){
        return false
      }
      p1 = p1.next
      p2 = p2.next
    }
    return true
  }
  
  isCircular(){
    let slow = this.head
    let fast = this.head.next
    while(fast&&fast.next){
      if(slow == fast){
        return true
      }else{
        fast = fast.next.next
        slow = slow.next
      }
    }
    return false
  }

  display(){
    let temp = this.head
    while(temp){
      console.log(temp.data);
      temp = temp.next
    }
  }
}

let list = new SingleLinkedList()
list.addAtEnd(new Node(5))
list.addAtEnd(new Node(2))
list.addAtEnd(new Node(1))
list.addAtEnd(new Node(2))
list.addAtEnd(new Node(5))
console.log(list.isCircular());
list.display()
