// // // // function arrayOfSum(arr){
// // // //    if(arr.length === 0){
// // // //     return 0
// // // //    }

// // // //    return arr[0] + arrayOfSum(arr.slice(1))
// // // // }
// // // // console.log(arrayOfSum([1,2,3,4,5]));

// // // // function factorial(n){
// // // //    if(n<=1){
// // // //       return 1
// // // //    }
// // // //    return n*factorial(n-1)
// // // // }

// // // // console.log(factorial(5))

// // // // function fib(n){
// // // //    if(n<=1){
// // // //       return n
// // // //    }
// // // //    return fib(n-1)+fib(n-2)
// // // // }
// // // // console.log(fib(4));

// // // // function arrayOfSum(arr,n){
// // // //    if(n<=0){
// // // //       return 0
// // // //    }
// // // //    return arr[n-1] + arrayOfSum(arr, n-1)
// // // // }
// // // // arrayOfSum([1,2,3,4,5],5)

// // // // function revString(str){
// // // //    if(str == ''){
// // // //       return ''
// // // //    }
// // // //    return revString(str.substring(1))+str.charAt(0)
// // // // }

// // // // console.log(revString('hello'));

// // // // function sumOFnElements(n){
// // // //    if(n<=1){
// // // //       return n
// // // //    }
// // // //   return  n+sumOFnElements(n-1)
// // // // }

// // // // console.log(sumOFnElements(5));


// // // // function listPrint(head){
// // // //    let temp = head
// // // //    if(!temp){
// // // //       return 
// // // //    }
// // // //    console.log(temp.data);
// // // //    return  listPrint(temp.next)
// // // // }

// // // // class Node{
// // // //    constructor(data){
// // // //       this.data = data
// // // //       this.next = null      
// // // //    }
// // // // }

// // // // let head = new Node(1)
// // // // head.next = new Node(5)
// // // // head.next.next = new Node(4)
// // // // listPrint(head)

// // // function arrayOfSum(arr){
// // //    if(arr.length<=0){
// // //       return 0
// // //    }
// // //    return arr[0] + arrayOfSum(arr.splice(1))
// // // }

// // // function fib(n){
// // //    if(n<=1){
// // //       return n
// // //    }
// // //    return fib(n-1)+fib(n-2)
// // // }

// // // function factorial(n){
// // //    if(n<=1){
// // //       return n
// // //    }
// // //    return n*factorial(n-1)
// // // }

// // // function binary(array,val,start=0,end = array.length-1){
// // //    if(!array||!array.length){
// // //       console.log("no elements in this array ");
// // //    }

// // //    if(start>end){
// // //       return 'no value'
// // //    }

// // //    let middleIndex = Math.floor(start +(end-start)/2)
// // //    if(array[middleIndex]==val){
// // //       return middleIndex
// // //    }else if(array[middleIndex]>val){
// // //      return binary(array,val,start,middleIndex-1)
// // //    }else if(array[middleIndex]<val){
// // //     return  binary(array,val,middleIndex+1,end)
// // //    }
// // //   return -1
// // // }

// // // console.log(binary([1,2,3,4,5],7));

// // // function arrayOfSum(arr){
// // //    if(arr.length<=0){
// // //       return 0
// // //    }
// // //    return arr[0] + arrayOfSum(arr.splice(1))
// // // }

// // // let array =[2,3,4,5,6]


// // // function factorial(n){
// // //    if(n<=1){
// // //       return n
// // //    }
// // //    return n*factorial(n-1)
// // // }

// // // ;

// // // function llPrint(head){
// // //    let temp = head
// // //    if(temp){
// // //       console.log(temp.data);
// // //    }else{
// // //       return
// // //    }
// // //    return llPrint(temp.next)
// // // }

// // // function findM(head){
// // //    let slow = head
// // //    let fast = head
// // //    while(fast && fast.next){
// // //       slow= slow.next
// // //       fast =fast.next.next
// // //    }
// // //    return slow.data
// // // }

// // // console.log(findM({data:5,next:{data:4,next:{data:3,next:null}}}))


// // // function fib(n){
// // //    if(n<=1){
// // //       return n
// // //    }

// // //    return fib(n-1)+fib(n-2)
// // // }

// // // console.log(fib(5))

// // //  function sumOFnElements(n){
// // //    if(n<=1){
// // //       return n
// // //    }
// // //   return  n+sumOFnElements(n-1)
// // // }

// // // console.log(sumOFnElements(5));

// // // function factorial(n){
// // //    if(n<=1){
// // //       return 1
// // //    }
// // //    return n*factorial(n-1)
// // // }

// // // console.log(factorial(5))

// // // function SumOfArray(array){
// // //    if(array.length<=0){
// // //       return 0
// // //    }
// // //    return array[0] + SumOfArray(array.slice(1))
// // // }

// // // console.log(SumOfArray([1,2,3]));


// // // function reverseString(str){
// // //    if(str.length<=0){
// // //       return str
// // //    }
// // //    return reverseString(str.slice(1))+str.charAt(0)
// // // }

// // // function reverseString(str){
// // //    if(str.length<=0){
// // //       return str
// // //    }
// // //    return reverseString(str.slice(1))+str[0]
// // // }

// // // function isPalindrome(string){
// // //    if(string.length == 0||string.length==1){
// // //       return true
// // //    }
// // //    if(string[0]==string[string.length-1]){
// // //       return isPalindrome(string.slice(1,-1))
// // //    }else{
// // //       return false
// // //    }
// // // }
// // // console.log(isPalindrome(""));

// // class Node {
// //    constructor(data) {
// //       this.data = data;
// //       this.next = null;
// //    }
// // }

// // // function isPalindrome(head) {
// // //    let temp = head;

// // //    function checkPalindrome(node) {
// // //       if (node !== null) {
// // //          if (!checkPalindrome(node.next)) {
// // //             return false;
// // //          }
// // //          if (node.data !== temp.data) { // Corrected from node.value to node.data
// // //             return false;
// // //          }
// // //          temp = temp.next;
// // //       }
// // //       return true;
// // //    }

// // //    return checkPalindrome(head);
// // // }

// // // function palindrome(head){
// // //    let temp = head
// // //    function checkPalindrome(node){
// // //       if(!node){
// // //          return true
// // //       }
// // //          if(!checkPalindrome(node.next)){
// // //             return false
// // //          }
// // //          if(node.data !== temp.data){
// // //             return false
// // //          }
// // //          temp = temp.next
      
// // //       return true
// // //    }
// // //    return checkPalindrome(head)
// // // }
// // // let head = new Node(1)
// // // head.next = new Node(3)
// // // head.next.next = new Node(1)

// // // console.log(palindrome(head));

// function palindrome(str){
//    if(str.length == 0 || str.length == 1){
//       return true
//    }

//    if(str[0] == str[str.length-1]){
//       return palindrome(str.slice(1,-1))
//    }else{
//       return false
//    }
// }

// // // console.log(palindrome("MALAYALAM"));


// class recursion{
//    binarySerch(array,val,start,end){
//       if(start>end){
//          return -1
//       }
//       let middleIndex = Math.floor(start+(end-start)/2)
//       if(array[middleIndex]==val){
//          return middleIndex
//       }
//       else if(array[middleIndex]>val){
//          return this.binarySerch(array,val,start,middleIndex - 1)
//       }else{
//          return this.binarySerch(array,val,middleIndex+1,end)
//       }
//    }

//    isPalindrome(str){
//       if(str.length === 0||str.length === 1){
//          return true
//       }
//       if(str[0]==str[str.length-1]){
//          return this.isPalindrome(str.slice(1,-1))
//       }
//       return false
//    }

//    arrayOfSum(arr){
//       if(arr.length<=0){
//          return 0
//       }
//       return arr[0]+this.arrayOfSum(arr.slice(1))
//    }

//    reverseStirng(str){
//       if(str.length<=0){
//          return str
//       }
//       return this.reverseStirng(str.slice(1))+str[0]
//    }

//    factorial(n){
//       if(n<=0){
//          return 1
//       }
//       return n*this.factorial(n-1)
//    }

//    fibanocci(n){
//       if(n<=2){
//          return 1
//       }
//       return this.fibanocci(n-1)+this.fibanocci(n-2)
//    }

//    sumOfn(n){
//       if(n<=0){
//          return n
//       }
//       return n + this.sumOfn(n-1)
//    }

//    strCon(str1,str2){
//       if(str1.length == ''){
//          return str2
//       }
//       return str1[0] + this.strCon(str1.slice(1),str2)
//    }

//    powerOfn(x,n){
//       if(n==0){
//          return 1
//       }
//       return x*this.powerOfn(x,n-1)
//    }
// }

// let recursionn = new recursion()
// let array = [1,2,3,4]
// console.log(recursionn.isPalindrome("MALAYALAM"))


// function SumOfArray(arr){
//    if(arr.length<=0){
//       return 0
//    }
//    return SumOfArray(arr.slice(1)) + arr[0]
// }

// console.log(SumOfArray([1,2,3,4,5]));


// function reverse(arr){
//    if(arr.length<=0){
//       return arr
//    }
//    return reverse(arr.slice(1)).concat(arr[0])
// }

// console.log(reverse([1,2,3,4,5]));

// function reverseString(str){
//    if(str.length<=0){
//       return str
//    }
//    return reverseString(str.slice(1)) + str[0]
// }

// console.log(reverseString("HELLO"));

// function BinarySearch(arr,val,start = 0,end = arr.length -1){
//    if(start>end){
//       return -1
//    }
//    let mid = Math.floor(start+(end-start)/2)
//    if(arr[mid]==val){
//       return mid
//    }else if(arr[mid]>val){
//       return BinarySearch(arr,val,start,mid-1)
//    }else{
//       return BinarySearch(arr,val,mid+1,end)
//    }
// }

// console.log(BinarySearch([1,2,3,4,5],3));