class DlinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  appendNode(newNode) {
    if (this.head == null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
  }

  displayReverse(){
    let temp = this.tail
    while(temp!=null){
      console.log(temp.data);
      temp = temp.prev
    }
  }

  display() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

let list = new DlinkedList();
let Node1 = new Node(4);
list.appendNode(Node1);
list.appendNode(new Node(3));
list.appendNode(new Node(6));
list.display();
list.displayReverse();
