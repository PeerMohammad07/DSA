// // // class Node{
// // //   constructor(data){
// // //     this.data = data
// // //     this.next = null
// // //   }
// // // }

// // const { text } = require("express")
// // const nodemon = require("nodemon")

// // // class SingleLinkedList{
// // //   constructor(){
// // //     this.head = null
// // //   }

// // //   appendNode(newNode){
// // //     if(this.head==null){
// // //       this.head = newNode
// // //       return
// // //     }

// // //     let current = this.head
// // //     while(current.next){
// // //       current = current.next
// // //     }
// // //     current.next = newNode
// // //   }

// // //   display(){
// // //     let current = this.head
// // //     while(current.next){
// // //       console.log(current.data);
// // //       current = current.next
// // //     }
// // //   }
// // // }

// // // const list = new SingleLinkedList()

// // // list.appendNode(new Node(3))
// // // list.appendNode(new Node(6))
// // // list.appendNode(new Node(5))
// // // list.appendNode(new Node(7))
// // // list.appendNode(new Node(2))
// // // list.display()

// // ////////////////////////////////////////////////////////////////////////////////////////////

// // // class Node{
// // //   constructor(data){
// // //     this.data = data
// // //     this.next = null
// // //   }
// // // }

// // // class SingleLinkedList{
// // //   constructor(){
// // //     this.head = null
// // //     this.tail = null
// // //   }

// // //   appendNode(newNode){
// // //     if(this.head == null){
// // //       this.head = newNode
// // //     }else{
// // //       this.tail.next = newNode
// // //     }
// // //     this.tail = newNode
// // //   }

// // //   display(){
// // //     let temp = this.head
// // //     while(temp !=null){
// // //       console.log(temp.data);
// // //       temp = temp.next
// // //     }
// // //   }
// // // }

// // // const list = new SingleLinkedList()
// // // list.appendNode(new Node(4))
// // // list.appendNode(new Node(1))
// // // list.appendNode(new Node(9))
// // // list.appendNode(new Node(6))
// // // list.display()

// // /////////////////////////////////////////////////////////////////////////////////

// // // class Node{
// // //   constructor(data){
// // //     this.data = data
// // //     this.next = null
// // //   }
// // // }

// // // class SingleLinkedList {
// // //   constructor(){
// // //     this.head = null
// // //     this.size = null
// // //     this.tail = null
// // //   }

// // //   appendNode(newNode){
// // //     if(this.head == null){
// // //       this.head = newNode
// // //       this.size++
// // //     }else{
// // //       this.tail.next = newNode
// // //       this.size++
// // //     }
// // //     this.tail = newNode
// // //   }

// // //   display(){
// // //     let temp =  this.head
// // //     while(temp != null){
// // //       console.log(temp.data);
// // //       temp = temp.next
// // //     }
// // //   }

// // //   empty(){
// // //     return this.size == null
// // //   }

// // //   getSize(){
// // //     return this.size
// // //   }


// // //   delete(data){
// // //     let temp = this.head
// // //     if(temp == null){
// // //       console.log("there is no data in this linked List");
// // //       return
// // //     }else if(temp.data == data){
// // //       this.head = temp.next
// // //       this.size--
// // //       return
// // //     }
// // //     let previous = null

// // //     while(temp !=null && temp.data != data){
// // //       previous = temp
// // //       temp = temp.next
// // //     }
// // //     if(temp == null){
// // //       console.log(`not found ${data}`);
// // //       return
// // //     }
// // //     if(temp == this.tail){
// // //       this.tail = previous
// // //       this.tail.next = null
// // //       this.size--
// // //       return
// // //     }
// // //     previous.next = temp.next
// // //   }

// // // }

// // // const list = new SingleLinkedList()
// // // list.appendNode(new Node(4))
// // // list.appendNode(new Node(10))
// // // list.appendNode(new Node(3))
// // // list.appendNode(new Node(9))
// // // list.delete(9)
// // // list.display()
// // // console.log(list.getSize());


// // /////////////////////////////////////////////////////////////////////////////////

// // // class Node{
// // //   constructor(data){
// // //     this.data = data
// // //     this.next = null
// // //   }
// // // }

// // // class SingleLinkedList{
// // //   constructor(){
// // //     this.head = null
// // //     this.tail = null
// // //     this.size = null
// // //   }

// // //   getSize(){
// // //     return this.size
// // //   }

// // //   empty(){
// // //     return this.size == null
// // //   }

// // //   addNode(newNode){
// // //     if(this.head == null){
// // //       this.head = newNode
// // //     }else{
// // //       this.tail.next = newNode
// // //     }
// // //     this.tail = newNode
// // //     this.size++
// // //   }

// // //   addAtEnd(newNode){
// // //     if(this.head==null){
// // //       this.head = newNode
// // //     }else{
// // //       let temp = this.head
// // //       while(temp.next != null){
// // //         temp = temp.next
// // //       }
// // //       temp.next = newNode
// // //       this.tail = newNode
// // //     }
// // //     this.size++
// // //   }

// // //   insertAtIndex(newNode,index){
// // //     if(index < 0 || index > this.size ){
// // //       console.log(" not valid index");
// // //       return
// // //     }else if(index === 0){
// // //       newNode.next = this.head
// // //       this.head = newNode
// // //       this.size++
// // //     }else{
// // //       let prev = this.head
// // //       for(let i=0;i< index-1;i++){
// // //         prev = prev.next
// // //       }
// // //       newNode.next = prev.next
// // //       prev.next = newNode
// // //       this.size++
// // //     }
// // //   }


// // //   removeFrom(index){
// // //     let removeNode;
// // //     if(index < 0 || index > this.size){
// // //       console.log("not valid index");
// // //       return
// // //     }else if(index == 0){
// // //       removeNode = this.head
// // //       this.head = removeNode.next
// // //       this.size--
// // //     }else{
// // //       let prev = this.head
// // //       for(let i=0;i<index-1;i++){
// // //         prev= prev.next
// // //       }
// // //       removeNode = prev.next
// // //       prev.next  = removeNode.next
// // //       this.size--
// // //     }

// // //   }

// // //   delete(value){
// // //     let removedData;
// // //     let temp = this.head;
// // //     if(temp.data == value){
// // //       this.head = temp.next
// // //       this.size--
// // //     }else{
// // //       while(temp.next != null && temp.next.data != value){
// // //         temp = temp.next
// // //       }
// // //       if(temp.next){
// // //         removedData = temp.next
// // //         temp.next = removedData.next
// // //         this.size--
// // //       }else{
// // //         return null
// // //       }
// // //     }
// // //   }

// // //   linearSearch(value){
// // //     if(this.head == null){
// // //       return -1
// // //     }
// // //     let i =0;
// // //     let curr = this.head
// // //     while(curr){
// // //       if(curr.data == value){
// // //         return i
// // //       }else{
// // //         curr = curr.next
// // //         i++
// // //       }
// // //     }
// // //      return -1
// // //   }

// // //   reverse(){
    
// // //   }

// // //   display(){
// // //     let temp = this.head
// // //     while(temp != null){
// // //       console.log(temp.data);
// // //       temp = temp.next
// // //     }
// // //   }
// // // }

// // // const list = new SingleLinkedList()
// // // list.addNode(new Node(3))
// // // list.addNode(new Node(0))
// // // list.addNode(new Node(8))
// // // const result = list.linearSearch(8)
// // // console.log(result,'index');
// // // list.display()



// // // class Node {
// // //   constructor(data){
// // //     this.data = data
// // //     this.next = null
// // //   }
// // // }

// // // class SingleLinkedList{
// // //   constructor(){
// // //     this.head = null
// // //     this.tail = null
// // //     this.size = null
// // //   }

// // //   getSize(){
// // //     return this.size
// // //   }

// // //   isEmpty(){
// // //     return this.size == null
// // //   }


// // //   addNode(newNode){
// // //     let temp = this.head
// // //     if(temp == null){
// // //       this.head = newNode
// // //     }else{
// // //       this.tail.next = newNode
// // //     }
// // //     this.tail = newNode
// // //     this.size++
// // //   }

// // //   addAtIndex(newNode,index){
// // //     if(this.head == null){
// // //       console.log("empty list");
// // //       return
// // //     }else if(index<0||index>this.size){
// // //       console.log("not valid index");
// // //       return
// // //     }

// // //     if(index == 0){
// // //      let temp = this.head
// // //      newNode.next = temp
// // //      this.head = newNode
// // //     }else{
// // //       let temp = this.head
// // //       for(let i=0;i<index-1;i++){
// // //         temp = temp.next
// // //       }
// // //       newNode.next = temp.next
// // //       temp.next = newNode
// // //       this.size++
// // //     }
// // //   }

// // //   removeValue(value){
// // //     let temp = this.head
// // //     let removeNode;
// // //     if(temp.data == value){
// // //       this.head = temp.next 
// // //       temp.next = null
// // //       this.size--
// // //     }else{
// // //       while(temp.next!=null &&temp.next.data != value){
// // //         temp = temp.next
// // //       }
// // //       if(temp.next){
// // //       removeNode = temp.next
// // //       temp.next = removeNode.next
// // //       this.size--
// // //       }else{
// // //         console.log("invalid value");
// // //       }
// // //     }
// // //   }

// // //   removeValueAtIndex(index){
// // //     if(index<0||index>this.size){
// // //       console.log("incalid index");
// // //       return
// // //     }
// // //     let removedData;
// // //     let temp = this.head
// // //     if(index == 0){
// // //       this.head = temp.next  
// // //     }else{
// // //       for(let i=0;i<index-1;i++){
// // //         temp = temp.next
// // //       }
// // //       removedData = temp.next
// // //       temp.next = removedData.next
// // //     }
// // //     this.size--
// // //   }

// // //   linearSearch(value){
// // //     if(this.head==null){
// // //       console.log("empty list");
// // //       return
// // //     }
// // //     let temp = this.head
// // //     let i =0;
// // //     if(temp.data == value){
// // //       return i
// // //     }else{
// // //       while(temp.data != value && temp.next != null){
// // //         temp= temp.next
// // //         i++
// // //       }
// // //         return i
// // //     }

// // //   }

// // //   reverse(){
// // //     let prev = null
// // //     let curr = this.head
// // //     while(curr){
// // //       let next = curr.next
// // //       curr.next = prev
// // //       prev = curr
// // //       curr = next
// // //     }
// // //     this.head = prev
// // //   }

// // //   display(){
// // //     // console.log(this.head);
// // //     let temp = this.head
// // //     while(temp){
// // //       console.log(temp.data);
// // //       temp = temp.next
// // //     }
// // //   }
// // // }
// // // const list = new SingleLinkedList()
// // // list.addNode(new Node(4))
// // // list.addNode(new Node(3))
// // // list.addNode(new Node(9))
// // // list.addNode(new Node(0))
// // // list.addAtIndex(new Node(5),3)
// // // list.removeValue(0)
// // // list.removeValueAtIndex(0)
// // // list.reverse()
// // // list.display()
// // // list.isEmpty()
// // // console.log(list.linearSearch(0));

// // ////////<  "Single linked list with head and tail"   >/////////

// // // class Node{
// // //   constructor(data){
// // //     this.data = data
// // //     this.next = null
// // //   }
// // // }

// // // class SingleLinkedList{
// // //   constructor(){
// // //     this.head = null
// // //     this.tail = null
// // //     this.size = 0;
// // //   }

// // //   isEmpty(){
// // //     return this.size== null
// // //   }

// // //   getSize(){
// // //     return this.size
// // //   }

// // //   prepend(newNode){
// // //     if(this.head == null){
// // //       this.head = newNode
// // //     }else{
// // //       newNode.next = this.head
// // //       this.head = newNode
// // //     }
// // //     this.size++
// // //   }

// // //   addnodeatend(newNode){
// // //     if(this.head == null){
// // //       this.head = newNode
// // //     }else{
// // //      let temp = this.head
// // //       while(temp.next != null){
// // //         temp = temp.next
// // //       }
// // //       temp.next = newNode
// // //       this.tail = temp.next
// // //     }
// // //   }

// // //   removeFromFront(){
// // //     let removedData;
// // //     if(this.isEmpty()){
// // //       return null
// // //     }else{
// // //       removedData = this.head
// // //       this.head = removedData.next
// // //     }
    
// // //   }

// // //   removeFromEnd(){
// // //     if(this.isEmpty()){
// // //       return null
// // //     }
// // //     if(this.size == 1){
// // //       this.head = null
// // //       this.tail = null
// // //     }else{
// // //       let temp = this.head
// // //       while(temp.next!= this.tail){
// // //         temp = temp.next
// // //       }
// // //       this.tail = temp
// // //       this.tail.next = null
// // //     }
// // //   }

// // //   display(){
// // //     let temp = this.head
// // //     while(temp){
// // //       console.log(temp.data);
// // //       temp= temp.next
// // //     }
// // //   }
// // // }

// // // const list = new SingleLinkedList()
// // // list.prepend(new Node(4))
// // // list.addnodeatend(new Node(9))
// // // list.prepend(new Node(4))
// // // list.prepend(new Node(0))
// // // list.prepend(new Node(2))
// // // list.removeFromFront()
// // // list.removeFromEnd()
// // // list.display()

// // // module.exports =  SingleLinkedList




// // // class Node{
// // //   constructor(data){
// // //     this.data=data
// // //     this.next=null
// // //   }
// // // }

// // // class SingleLinkedList{
// // //   constructor(){
// // //     this.head = null
// // //     this.tail = null
// // //     this.size = null
// // //   }

// // //   isEmpty(){
// // //     return this.size == null
// // //   }

// // //   addAtFirst(newNode){
// // //     if(this.head == null){
// // //       this.head = newNode
// // //       this.tail = newNode
// // //       this.size++
// // //     }else{
// // //       newNode.next = this.head
// // //       this.head = newNode
// // //       this.size++
// // //     }
// // //   }

// // //   addAtEnd(newNode){
// // //     if(this.head==null){
// // //       this.head = newNode
// // //       this.tail = newNode
// // //       this.size++
// // //     }else{
// // //       let temp = this.head
// // //       while(temp.next!=null){
// // //         temp = temp.next
// // //       }
// // //       temp.next = newNode
// // //       this.tail = newNode
// // //       this.size++
// // //     }
// // //   }

// // //   addValueAfterValue(value,newNode){
// // //     if(list.isEmpty()){
// // //       console.log("this list is empty");
// // //     }
// // //     let temp = this.head
// // //     if(temp.data==value){
// // //       let next = temp.next
// // //       temp.next = newNode
// // //       newNode.next = next
// // //     }else{
// // //       while(temp!=null&&temp.data!=value){
// // //         temp = temp.next
// // //       }
// // //       if(temp==null){
// // //         console.log("invalid value");
// // //         return
// // //       }
// // //       let next = temp.next
// // //       temp.next = newNode
// // //       newNode.next = next

// // //       if(!newNode.next){
// // //         this.tail = newNode
// // //       }
// // //     }
// // //     this.size++
// // //   }

// // //   addValueBeforeValue(value,newNode){
// // //       if(this.isEmpty()){
// // //         console.log("this list is empty");
// // //         return
// // //       }
// // //       let temp = this.head;
// // //       if(temp.data == value){
// // //         let value = temp
// // //         this.head = newNode
// // //         this.head.next = value
// // //       }else{
// // //         let prev = null;
// // //         while(temp!=null&&temp.data != value){
// // //           prev = temp
// // //           temp = temp.next
// // //         }
// // //         if(temp==null){
// // //           console.log("value not found");
// // //           return
// // //         }else{
// // //           newNode.next = prev.next
// // //           prev.next = newNode
// // //         }
// // //       }
// // //       this.size++
// // //   }

// // //   deleteFromBegining(){
// // //     if(this.isEmpty()){
// // //       console.log("list is enpty");
// // //       return
// // //     }else{
// // //       let temp = this.head.next
// // //       this.head = temp
// // //     }
// // //   }

// // //   arrayToList(array){
// // //     for(let i=0;i<array.length;i++){
// // //       this.addAtEnd(new Node(array[i]))
// // //     }
// // //   }

// // //   deleteFromEnd(){
// // //     if(this.isEmpty()){
// // //       console.log("this list is empty");
// // //       return
// // //     }
// // //     if(this.size == 1){
// // //       this.head = this.tail = null
// // //       return
// // //     }else{
// // //     let temp = this.head
// // //     let prev = null
// // //     while(temp.next){
// // //       prev = temp
// // //       temp = temp.next
// // //     }
// // //     prev.next = null
// // //     this.tail = prev
// // //   }
// // //     this.size--
// // //   }

// // //   deleteNodeWithSpecificValue(value){
// // //     if(this.isEmpty()){
// // //       console.log("list is enpty");
// // //       return
// // //     }
// // //     let temp = this.head
// // //     if(temp.data==value){
// // //       this.head = temp.next
// // //       temp.next = null
// // //     }else{
// // //       let prev;
// // //       while(temp!=null&&temp.data!=value){
// // //         prev = temp
// // //         temp=temp.next
// // //       }
// // //       prev.next = temp.next
// // //     }
// // //     this.size--
// // //   }

// // //   checkCircularlist(head){
// // //     let slow = head
// // //     let fast = head.next
// // //     while(fast!=null&&fast.next!=null){
// // //       if(fast == slow){
// // //         return true
// // //       }
// // //       slow = slow.next
// // //       fast = fast.next.next
// // //     }
// // //     return false
// // //   }

// // //   reverse(){
// // //     let prev = null
// // //     let curr = this.head
// // //     while(curr){
// // //       let next = curr.next
// // //       curr.next = prev
// // //       prev = curr
// // //       curr = next
// // //     }
// // //     this.head = prev
// // //   }

// // //   removeDuplicates(){
// // //     let curr = this.head
// // //     while(curr&&curr.next){
// // //       if(curr.data == curr.next.data){
// // //         curr.next = curr.next.next
// // //         this.size--
// // //       }else{
// // //         curr = curr.next
// // //       }
// // //     }
// // //   }

// // //   middleValue(){
// // //     let slow = this.head
// // //     let fast = this.head
// // //     while(fast&&fast.next){
// // //       slow = slow.next
// // //       fast = fast.next.next
// // //     }
// // //     return slow.data;
// // //   }

// // //   llToArray(head){
// // //     let result = [];
// // //     let curr = head
// // //     while(curr){
// // //       result.push(curr.data)
// // //       curr = curr.next
// // //     }
// // //     return result
// // //   }

// // //   display(){
// // //     let temp = this.head
// // //     while(temp){
// // //       console.log(temp.data);
// // //       temp = temp.next
// // //     }
// // //   }
// // // }

// // // let list = new SingleLinkedList()
// // // list.addAtEnd(new Node(4))
// // // list.addAtEnd(new Node(4))
// // // list.addAtEnd(new Node(5))
// // // list.addAtEnd(new Node(6))
// // // list.addAtEnd(new Node(7))
// // // list.removeDuplicates()
// // // list.display()

// // // class Node{
// // //   constructor(data){
// // //     this.data = data
// // //     this.next = null
// // //   }
// // // }

// // // class SingleLinkedList{
// // //   constructor(){
// // //     this.size = null
// // //     this.head = null
// // //     this.tail = null
// // //   }

// // //   isEmpty(){
// // //     return this.size == null
// // //   }


// // //   addAtEnd(newNode){
// // //     if(this.isEmpty()){
// // //        this.head = this.tail = newNode  
// // //     }else{
// // //       let temp =  this.head
// // //       while(temp.next){
// // //         temp = temp.next
// // //       }
// // //       temp.next = newNode
// // //       this.tail = newNode
// // //     }
// // //     this.size++
// // //   }

// // //   reverse(){
// // //    let temp = this.head
// // //    let prev = null
// // //    while(temp){
// // //     let next  = temp.next
// // //     temp.next = prev
// // //     prev = temp
// // //     temp = next
// // //    }
// // //    this.head = prev
// // //   }

// // //   removeDup(){
// // //     let curr = this.head
// // //     let temp ;
// // //     while(curr!=null&&curr.next!=null){
// // //       temp = curr
// // //       while(temp.next!= null){
// // //         if(temp.data == temp.next.data){
// // //           temp.next = temp.next.next
// // //         }else{
// // //           temp = temp.next
// // //         }
// // //       }
// // //       curr = curr.next
// // //     }
// // //   }

// // //   middleValue(){
// // //     let slow = this.head
// // //     let fast = this.head
// // //     while(fast!=null&&fast.next!=null){
// // //       fast = fast.next.next
// // //       slow = slow.next
// // //     }
// // //     return slow.data
// // //   }

// // //   display(){
// // //     let curr = this.head
// // //     while(curr){
// // //       console.log(curr.data);
// // //       curr = curr.next
// // //     }
// // //   }
// // // }

// // // let list = new SingleLinkedList()
// // // list.addAtEnd(new Node(1))
// // // list.addAtEnd(new Node(1))
// // // list.addAtEnd(new Node(2))
// // // list.addAtEnd(new Node(3))
// // // list.addAtEnd(new Node(4))
// // // list.addAtEnd(new Node(4))
// // // list.removeDup()
// // // list.reverse()
// // // list.display()


// // // function palindrome(head){
// // //   if(!head||!head.next){
// // //     return true
// // //   }

// // //   let slow = head;
// // //   let fast = head;
// // //   while (fast.next && fast.next.next) {
// // //       slow = slow.next;
// // //       fast = fast.next.next;
// // //   }

// // //   let prev = null
// // //   let temp = slow.next
// // //   while(temp){
// // //     let next = temp.next
// // //     temp.next = prev
// // //     prev = temp
// // //     temp = next
// // //   }
// // //   slow.next = null


// // //   let p1 = head
// // //   let p2 = prev

// // //   while(p1&&p2){
// // //     if(p1.val!=p2.val){
// // //       return false
// // //     }
// // //     p1 = p1.next
// // //     p2 = p2.next
// // //   }
// // //   return true
// // // }

// // // let head = {
// // //   val:1,
// // //   next:{
// // //     val:2,
// // //     next:{
// // //       val:2,
// // //       next:{
// // //         val:1,
// // //         next:null
// // //       }
// // //     }
// // //   }
// // // }

// // // console.log(palindrome(head))


// // // function reverse(head){
// // //   let temp = head
// // //   let prev = null
// // //   while(temp){
// // //     let next = temp.next
// // //     temp.next = prev
// // //     prev = temp
// // //     temp = next
// // //   }
// // //  return head = prev
// // // }

// // // function middleValue(head){
// // //   if(head == null){
// // //     return head
// // //   }
// // //   let slow = head
// // //   let fast = head
// // //   while(fast&&fast.next){
// // //     slow = slow.next
// // //     fast = fast.next.next
// // //   }
// // //   return slow.data
// // // }

// // // function deletee(head,Val){
// // //   if(head.data == Val){
// // //     head = head.next
// // // }else{
// // //   let temp = head
// // //   let prev = null
// // //   while(temp!=null&&temp.data!=Val){
// // //     prev = temp
// // //     temp = temp.next
// // //   }
// // //   if(temp){
// // //     prev.next = temp.next
// // //   }else{
// // //     console.log(`${Val} not found`);
// // //   }
// // // }
// // // return head
// // // }


// // // class Node{
// // //   constructor(data){
// // //     this.data = data
// // //     this.next = null
// // //   }
// // // }
// // // let head = new Node(4)
// // // head.next = new Node(3)
// // // head.next.next = new Node(6)
// // // console.log(deletee(head,6))

// // class Node{
// //   constructor(data){
// //     this.data = data
// //     this.next = null
// //   }
// // }


// // class SingleLinkedList{
// //   constructor(){
// //     this.head = null
// //     this.tail = null
// //     this.size = null
// //   }

// //   getSize(){
// //     return this.size
// //   }

// //   isEmpty(){
// //     return this.size == null
// //   }

// //   addAtEnd(newNode){
// //     if(this.isEmpty()){
// //      this.tail = this.head = newNode
// //     }else{
// //       let temp = this.head
// //       while(temp.next){
// //         temp = temp.next
// //       }
// //       temp.next = newNode
// //       this.tail = newNode
// //     }
// //     this.size++
// //   }

// //   middleValue(){
// //     let slow = this.head
// //     let fast = this.head
// //     while(fast&&fast.next){
// //       slow = slow.next
// //       fast = fast.next.next
// //     }
// //     return slow.data+" middleValue"
// //   }

// //   reverse(){
// //     let temp = this.head
// //     let prev = null
// //     while(temp){
// //       let next = temp.next
// //       temp.next = prev
// //       prev = temp
// //       temp =next
// //     }
// //     this.head = prev
// //   }

// //   isPalindrome(){
// //     let slow = this.head
// //     let fast = this.head
// //     while(fast&&fast.next){
// //       fast = fast.next.next
// //       slow = slow.next
// //     }

// //     let temp = slow
// //     let prev = null
// //     while(temp){
// //       let next = temp.next
// //       temp.next = prev
// //       prev = temp
// //       temp = next
// //     }
// //     slow = prev

// //     let p1 = this.head
// //     let p2 = slow
// //     while(p1&&p2){
// //       if(p1.data != p2.data){
// //         return false
// //       }
// //       p1 = p1.next
// //       p2 = p2.next
// //     }
// //     return true
// //   }

// //   removeDup(){

// //   }

// //   toArray(){
// //     let result = []
// //     let temp = this.head
// //     while(temp){
// //       result.push(temp.data)
// //       temp = temp.next
// //     }
// //    return result
// //   }

// //   delete(val){
// //     if(this.isEmpty()){
// //       console.log('value is not found');
// //     }

// //     if(this.head.data == val){
// //      return this.head = this.head.next
// //     }else{
// //       let temp = this.head
// //       let prev = null
// //       while(temp.data != val){
// //         prev = temp
// //         temp = temp.next
// //       }
// //        prev.next = temp.next
// //     }
// //     this.size--
// //   }

// //   removeDup(){
// //     let temp = this.head
// //     while(temp){
// //       if(temp.data==temp.next.data){
// //         temp.next = temp.next.next
// //       }else{
// //         temp = temp.next
// //       }
// //     }
// //   }

// //   findPrev(node){
// //     if(this.head.data == node){
// //       console.log("no prev value for this data");
// //     }else{
// //       let temp= this.head
// //       let prev = null
// //       while(temp!=null&&temp.data != node){
// //         prev = temp
// //         temp = temp.next
// //       }
// //       if(temp){
// //       return prev.data
// //       }else{
// //         return "value not found"
// //       }
// //     }
// //   } 

// //   isCircular(){
// //     let slow = this.head
// //     let fast = this.head.next
// //     while(fast&&fast.next){
// //       if(slow == fast){
// //         return true
// //       }else{
// //         slow = slow.next
// //         fast = fast.next.next
// //       }
// //     }
// //     return false
// //   }

// //  delMidlleValue(){
// //   let slow = this.head
// //   let fast = this.head
// //   let temp = null
// //   while(fast&&fast.next){
// //     temp = slow
// //     slow = slow.next
// //     fast = fast.next.next
// //   }
// //   temp.next = slow.next
// //  }

// //   arrToList(arr){
// //     for(let i=0;i<arr.length;i++){
// //       this.addAtEnd(new Node(arr[i]))
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


// // let list = new SingleLinkedList()
// // list.addAtEnd(new Node(1))
// // list.addAtEnd(new Node(2))
// // list.addAtEnd(new Node(2))
// // list.addAtEnd(new Node(2))
// // list.addAtEnd(new Node(1))
// // console.log(list.isPalindrome());


// class Node{
//   constructor(data){
//     this.data = data
//     this.next = null
//   }
// }

// class SingleLinkedList{
//   constructor(){
//     this.head = null
//     this.tail = null
//   }

//   addAtEnd(newNode){
//     if(!this.head){
//      this.tail = this.head = newNode
//      return
//     }

//     let temp = this.head
//     while(temp.next){
//       temp = temp.next
//     }
//     temp.next = newNode
//     this.tail = newNode
//   }

//   addAtFirst(newNode){
//     if(!this.head){
//       this.tail = this.head = newNode
//     }

//     let temp = this.head
//     newNode.next = temp
//     this.head = newNode
//   }

//   arrayToLL(array){
//     for(let i=0;i<array.length;i++){
//       this.addAtEnd(new Node(array[i]))
//     }
//   }

//   deleteFromFirst(){
//     let temp = this.head
//     this.head = temp.next
//   }

//   delSpecValue(val){
//     if(this.head.data == val){
//       let temp = this.head
//       this.head = temp.next
//       return
//     }

//     let temp = this.head
//     let prev = null
//     while(temp.data!=val){
//       prev = temp
//       temp = temp.next
//     }
//     prev.next = temp.next
//     if(!prev.next){
//       this.tail = prev
//     }
//   }

//   reverse(){
//     let temp = this.head
//     let prev = null
//     while(temp){
//       let next = temp.next
//       temp.next = prev
//       prev = temp
//       temp = next
//     }
//     this.head = prev
//   }

//   removeDup(){
//     if(!this.head){
//       console.log("no values");
//       return
//     }
//     let temp = this.head
//     while(temp&&temp.next){
//       if(temp.data==temp.next.data){
//         temp.next = temp.next.next
//       }
//         temp = temp.next
      
//     }
//   }

//   middleValue(){
//     let slow = this.head
//     let fast = this.head
//     let prev = null
//     while(fast&&fast.next){
//       prev = slow
//       slow = slow.next
//       fast = fast.next.next
//     }
//     prev.next = slow.next
//   }

//   isPalindrome(){
//     let slow = this.head
//     let fast = this.head
//     while(fast&&fast.next){
//       slow = slow.next
//       fast = fast.next.next
//     }

//     let temp = slow
//     let prev = null
//     while(temp){
//       let next = temp.next
//       temp.next = prev
//       prev = temp
//       temp = next
//     }

//     let p1 = prev
//     let p2 = this.head
//     while(p1&&p2){
//       if(p1.data != p2.data){
//         return false
//       }
//       p1 = p1.next
//       p2 = p2.next
//     }
//     return true
//   }
  
//   isCircular(){
//     let slow = this.head
//     let fast = this.head.next
//     while(fast&&fast.next){
//       if(slow == fast){
//         return true
//       }else{
//         fast = fast.next.next
//         slow = slow.next
//       }
//     }
//     return false
//   }

//   display(){
//     let temp = this.head
//     while(temp){
//       console.log(temp.data);
//       temp = temp.next
//     }
//   }
// }

// let list = new SingleLinkedList()
// list.addAtEnd(new Node(5))
// list.addAtEnd(new Node(2))
// list.addAtEnd(new Node(1))
// // list.addAtEnd(new Node(2))
// // list.addAtEnd(new Node(5))
// console.log(list.isCircular());
// list.display()
