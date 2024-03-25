// // // class DlinkedList {
// // //   constructor() {
// // //     this.head = null;
// // //     this.tail = null;
// // //   }

// // //   appendNode(newNode) {
// // //     if (this.head == null) {
// // //       this.head = newNode;
// // //     } else {
// // //       this.tail.next = newNode;
// // //       newNode.prev = this.tail;
// // //     }
// // //     this.tail = newNode;
// // //   }

// // //   displayReverse(){
// // //     let temp = this.tail
// // //     while(temp!=null){
// // //       console.log(temp.data);
// // //       temp = temp.prev
// // //     }
// // //   }

// // //   display() {
// // //     let temp = this.head;
// // //     while (temp) {
// // //       console.log(temp.data);
// // //       temp = temp.next;
// // //     }
// // //   }
// // // }

// // // class Node {
// // //   constructor(data) {
// // //     this.prev = null;
// // //     this.data = data;
// // //     this.next = null;
// // //   }
// // // }

// // // let list = new DlinkedList();
// // // let Node1 = new Node(4);
// // // list.appendNode(Node1);
// // // list.appendNode(new Node(3));
// // // list.appendNode(new Node(6));
// // // list.display();
// // // list.displayReverse();

// // // function BinarySearch(array,target){
// // //   let leftIndex = 0;
// // //   let rightIndex = array.length - 1;

// // //   while(rightIndex>=leftIndex){
// // //     let middleIndex =Math.floor(rightIndex+leftIndex/2)
// // //     if(array[middleIndex] == target){
// // //       return middleIndex
// // //     }
// // //     if(target < middleIndex){
// // //       rightIndex = middleIndex -1
// // //     }else{
// // //       leftIndex = middleIndex + 1
// // //     }
// // //   }
// // //   return -1
// // // }

// // // console.log(BinarySearch([3,4,5],5));


// // // class Node{
// // //   constructor(data){
// // //     this.data = data
// // //     this.next = null
// // //     this.prev = null
// // //   }
// // // }

// // // class DoublyLinkedList{
// // //   constructor(){
// // //     this.head = null
// // //     this.tail = null
// // //     this.size = null
// // //   }

// // //   addNode(newNode){
// // //     if(this.head == null){
// // //       this.head = newNode
// // //       this.tail = newNode
// // //       this.size++
// // //     }else{
// // //       let temp = this.head
// // //       while(temp.next){
// // //         temp = temp.next
// // //       }
// // //       temp.next = newNode
// // //       this.tail = newNode
// // //       this.size++
// // //     }
// // //   }

// // //   delete(value){
// // //     if(this.isEmpty()){
// // //       console.log("This linked list is empty");
// // //       return;
// // //     }
    
// // //     let temp = this.head;
  
// // //     if(temp.data == value){
// // //       this.head = temp.next;
// // //       if(this.head){
// // //         this.head.prev = null;
// // //       } else {
// // //         this.tail = null;
// // //       }
// // //       this.size--;
// // //     } else {
// // //       while(temp && temp.data != value){
// // //         temp = temp.next;
// // //       }
  
// // //       if(!temp){
// // //         console.log("Not found");
// // //         return;
// // //       }
  
// // //       temp.prev.next = temp.next;
// // //       if(temp.next){
// // //         temp.next.prev = temp.prev;
// // //       } else {
// // //         this.tail = temp.prev;
// // //       }
// // //       this.size--;
// // //     }
// // //   }



// // //   getSize(){
// // //     return this.size
// // //   }

// // //   isEmpty(){
// // //     return this.size==null
// // //   }

// // //   display(){
// // //     let temp = this.head
// // //     while(temp){
// // //       console.log(temp.data);
// // //       temp = temp.next
// // //     }
// // //   }
// // // }

// // // const list = new DoublyLinkedList()
// // // list.addNode(new Node(7))
// // // list.addNode(new Node(5))
// // // list.addNode(new Node(2))
// // // list.delete(6)
// // // list.delete(7)
// // // console.log(list.getSize(),"size of the double linked list")
// // // list.display()

// // // class Node{
// // //   constructor(data){
// // //     this.prev = null
// // //     this.data = data
// // //     this.next = null
// // //   }
// // // }

// // // class DoublyLinkedList{
// // //   constructor(){
// // //     this.head = null
// // //     this.tail = null
// // //     this.size = null
// // //   }

// // //   isEmpty(){
// // //     return this.size==null
// // //   }

// // //   getSize(){
// // //     return this.size
// // //   }

// // //   addAtEnd(newNode){
// // //     if(this.head==null){
// // //       this.head = newNode
// // //       this.tail = newNode
// // //     }else{
// // //       let temp = this.head
// // //       while(temp.next){
// // //         temp = temp.next
// // //       }
// // //       temp.next = newNode
// // //       newNode.prev = temp
// // //       this.tail = newNode
// // //     }
// // //     this.size++
// // //   }

// // //   addAtFirst(newNode){
// // //     if(this.isEmpty()){
// // //       console.log("this list is empty");
// // //       return
// // //     }
// // //     if(this.head == null){
// // //       this.head = this.tail = newNode
// // //     }else{
// // //       let temp = this.head
// // //       newNode.next = temp
// // //       this.head = newNode
// // //     }
// // //     this.size++
// // //   }

// // //   addAfterValue(value,newNode){
// // //     if(this.isEmpty()){
// // //       console.log("list is empty");
// // //       return
// // //     }
// // //     let temp = this.head
// // //     if(temp.data == value){
// // //       newNode.next = temp
// // //       newNode.prev = temp.prev
// // //       this.head =  newNode
// // //     }else{
// // //       while(temp!=null&&temp.data!=value){
// // //         temp = temp.next
// // //       }
// // //       if(temp){
// // //       newNode.next = temp.next
// // //       temp.next = newNode
// // //       newNode.prev = temp
// // //       }else{
// // //         console.log("value not found");
// // //         return
// // //       }
// // //     }
// // //   }

// // //  addBeforeValue(value,newNode){
// // //   if(this.isEmpty()){
// // //     return 
// // //   }
// // //   let temp = this.head
// // //   if(value == temp.data){
// // //     newNode.next = temp
// // //     temp.prev = newNode
// // //     newNode.prev = null
// // //     this.head = newNode
// // //   }else{
// // //     while(temp!=null&&temp.data!=value){
// // //       prev = temp
// // //       temp =temp.next
// // //     }
// // //     if(temp){
// // //     newNode.prev = temp.prev
// // //     newNode.next = temp
// // //     }else{
// // //       console.log("value not found");
// // //       return
// // //     }
// // //   }
// // //   this.size++
// // //  }

// // //  delteFromFirst(){
// // //   if(this.isEmpty()){
// // //     return 
// // //   }
// // //   let temp = this.head
// // //   this.head = temp.next
// // //   temp.next = null
// // //  }

// // //  delteFromEnd(){
// // //   if (this.isEmpty()) {
// // //     return;
// // // }
// // // if (this.head === this.tail) {
// // //     this.head = this.tail = null;
// // //     return;
// // // }
// // // let temp = this.tail;
// // // this.tail = temp.prev;
// // // this.tail.next = null;
// // //  }

// // //  arrayToLL(array){
// // //   for(let i=0;i<array.length;i++){
// // //     this.addAtEnd(new Node(array[i]))
// // //   }
// // //  }

// // //  llToArry(head){
// // //   let result =[]
// // //   let curr = head
// // //   while(curr){
// // //     result.push(curr.data)
// // //     curr = curr.next
// // //   }
// // //   return result
// // // }

// // //   display(){
// // //     let temp = this.head
// // //     while(temp){
// // //       console.log(temp.data);
// // //       temp=temp.next
// // //     }
// // //   }

// // //   reverse(){
// // //     let temp = this.tail
// // //     while(temp){
// // //       console.log(temp.data);
// // //       temp = temp.prev
// // //     }
// // //   }
// // // }

// // // const list = new DoublyLinkedList()
// // // let head = {data:5,next:{data:6,next:{data:7,next:{data:8,next:null}}}}
// // // console.log(list.llToArry(head))
// // // console.log(list.reverseString("peeru"));
// // // list.display()

// // // class Node{
// // //   constructor(data){
// // //     this.data = data
// // //     this.prev = null
// // //     this.next = null
// // //   }
// // // }

// // // class DoublyLinkedList{
// // //   constructor(){
// // //     this.head =null
// // //     this.tail =null
// // //   }

// // //   addAtEnd(newNode){
// // //     if(this.head==null){
// // //      this.tail = this.head = newNode
// // //     }else{
// // //       let temp = this.head
// // //       while(temp.next){
// // //         temp = temp.next
// // //       }
// // //       temp.next = newNode
// // //       newNode.prev = temp
// // //       this.tail = newNode
// // //     }
// // //   }

// // //   reverse(){
// // //     if(this.head == this.tail){
// // //       return this.head.data
// // //     }else{
// // //       // console.log(this.tail);
// // //      let temp = this.tail
// // //      while(temp){
// // //       console.log(temp.data);
// // //       temp = temp.prev
// // //      }
// // //     }
// // //   }

// // //   display(){
// // //     let temp = this.head
// // //     while(temp){
// // //       console.log(temp.data);
// // //       temp = temp.next
// // //     }
// // //   }
// // // }
// // // const list = new DoublyLinkedList()
// // // list.addAtEnd(new Node(4))
// // // list.addAtEnd(new Node(5))
// // // list.reverse()
// // // // list.display()


// // class Node{
// //   constructor(data){
// //     this.prev = null
// //     this.data = data
// //     this.next = null
// //   }
// // }

// // class DoublyLinkedList{
// //   constructor(){
// //     this.head= null
// //     this.tail = null
// //   }

// //   addAValue(newNode){
// //     if(this.head==null){
// //       this.head = this.tail = newNode
// //     }else{
// //       let temp = this.head
// //       while(temp.next){
// //         temp = temp.next
// //       }
// //       temp.next = newNode
// //       newNode.prev = temp
// //       this.tail = newNode
// //     }
// //   }

// //   lltoArray(){
// //     let result = [];
// //     let temp = this.head
// //     while(temp){
// //       result.push(temp.data)
// //       temp = temp.next
// //     }
// //     return result
// //   }

// //   delete(value){
// //     if(value == 'first'){
// //       this.head = this.head.next
// //       this.head.prev = null
// //     }else if(value == 'end'){
// //       this.tail = this.tail.prev
// //       this.tail.next = null
// //     }
    
// //   }

// //   reverse(){
// //     let temp =this.tail
// //     while(temp){
// //       console.log(temp.data);
// //       temp= temp.prev
// //     }
// //   }
// //   display(){
// //     let temp = this.head
// //     while(temp){
// //       console.log(temp.data);
// //       temp = temp.next
// //     }
// //   }
// // }

// // const list = new DoublyLinkedList()
// // list.addAValue(new Node(1))
// // list.addAValue(new Node(3))
// // list.addAValue(new Node(6))
// // console.log(list.lltoArray())

// class Node{
//   constructor(data){
//     this.data = data
//     this.next = null
//     this.prev = null
//   }
// }


// class DoublyLinkedList{
//   constructor(){
//     this.head = null
//     this.tail = null
//   }

//   addAtEnd(newNode){
//     if(this.head==null){
//       this.tail = this.head = newNode
//       return
//     }
//     let temp = this.head
//     while(temp.next){
//       temp = temp.next
//     }
//     temp.next = newNode
//     newNode.prev = temp
//     this.tail = newNode
//   }

//   deleteFromFirst(){
//     if(this.head==null){
//       console.log("empty list ");
//       return
//     }

//     let temp =  this.head
//     temp.next.prev = null
//     this.head = temp.next
//   }

//   reverse(){
//     let temp = this.head
//     let prev = null
//     while(temp){
//       let next = temp.next
//       temp.next = temp.prev
//       temp.prev = next
//       prev = temp
//       temp = next
//     }
//       this.tail = this.head
//       this.head = prev
    
//   }
//   everse() {
//     let temp = this.head;
//     let prev = null;

//     while(temp){
//       let next = temp.next
//       temp.next = temp.prev
//       temp.prev = next
//       prev = temp
//       temp = next
//     }
//     this.tail = this.head;
//     this.head = prev;
//   }


//   display(){
//     let temp = this.head
//     while(temp){
//       console.log(temp.data);
//       temp = temp.next
//     }
  
//   }
// }

// let list = new DoublyLinkedList()

// list.addAtEnd(new Node(4))
// list.addAtEnd(new Node(5))
// list.addAtEnd(new Node(8))
// list.reverse()
// list.display()