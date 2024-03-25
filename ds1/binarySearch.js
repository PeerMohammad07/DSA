// class BinarySearch {  
//   findAValue(array,target){
//     let start =0;
//     let end = array.length-1
//     while(start<=end){
//       let middleIndex = start+(end-start)/2
//       if(array[middleIndex]==target){
//         return middleIndex
//       }else if(array[middleIndex]>target){
//         end = middleIndex-1
//       }else if(array[middleIndex]<target){
//         start = middleIndex+1
//       }
//     }
//     return -1
//   }
// }
// let list = new BinarySearch()
// console.log(list.findAValue([1, 2, 3, 4, 5, 6, 7], 1))

///////////linear search 
// class LinearSearch{
//   search(array,target){
//     for(let index=0;index<array.length;index++){
//       if(array[index] == target){
//         return index
//       }
//     }
//     return -1
//   }

//   findMin(array){
//     let min =array[0];
//     for(let i=0;i<array.length;i++){
//       if(array[i]<min){
//         min = array[i]
//       }
//     }
//     return min
//   }
// }

// let search = new LinearSearch()
// // console.log(search.search([1, 2, 3, 4, 5, 6, 7], 3))
// console.log(search.findMin([3,4,5,6,2,4,6,7]));

// class BinarySearch{
//   findValue(array,value){
//   let start = 0
//   let end = array.length-1
//   while(start<=end){
//     let middleIndex = Math.floor(start+(end-start)/2)
//     if(array[middleIndex]==value){
//       return middleIndex
//     }else if(array[middleIndex]>value){
//       end = middleIndex-1
//     }else if(array[middleIndex]<value){
//       start = middleIndex+1
//     }
//   }
//   return -1
//   }

//   findTheOccurenaceOFAValue(array,value){
//     let start = 0;
//     let end = array.length -1
//     let count =0;
//     while(start<=end){
//       let middleIndex = Math.floor(start +(end-start)/2)
//       if(array[middleIndex]==value){
//         count++
//       }else if(array[middleIndex]>value){
//         end = middleIndex-1
//       }else if(array[middleIndex]<value){
//         start = middleIndex+1
//       }
//     }
//     return count
//   }
// }

// let search = new BinarySearch()
// console.log(search.findTheOccurenaceOFAValue([1,2,2,2,2,2,3,4,5,6,6],2))


// class BinarySearch{
//   findINdex(arr,value){
//     let array = arr.sort((a,b)=>a-b)
//     let start = 0
//     let end = arr.length-1
//     while(start<=end){
//       let middleIndex = Math.floor(start +(end-start)/2)
//       if(array[middleIndex]==value){
//         return middleIndex
//       }else if(array[middleIndex]>value){
//         end = middleIndex-1
//       }else if(array[middleIndex]<value){
//         start = middleIndex+1
//       }
//     }
//     return -1
//   }
// }

// let search =  new BinarySearch()
// console.log(search.findINdex([1,2,3,4],4))


// function BinarySearch(array,value){
//   let left = 0
//   let right = array.length-1
//   while(left<=right){
//     let middleIndex = Math.floor(left+(right-left)/2)
//     if(array[middleIndex]==value){
//       return middleIndex
//     }else if (array[middleIndex]>value){
//       right = middleIndex-1
//     }else if(array[middleIndex]<value){
//       left = middleIndex+1
//     }
//   }
//   return -1
// }



// function linearSearch(arr,val){
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]==val){
//       return i
//     }
//   }
//   return -1
// }

// console.log(linearSearch([1,2,3,4,5],5));


// class Person{
//   constructor(name,age){
//     this.name = name
//     this.age = age
//   }
// }

//  function linear(collection,target){
//     for(let i=0;i<collection.length;i++){
//       if(collection[i].name==target){
//         return collection[i]
//       }
//     }
//   }

//   const people = [
//     new Person("PeerMOhammad",18),
//     new Person("Sahad",19),
//     new Person("Kevin",25)
//   ]


// let ans = linear(people,"Kevin")
// console.log(ans);



// function BinarySearch(arr,val){
//   let start =0;
//   let end = arr.length -1

//   while(start<=end){
//     let mid = Math.floor(start+(end-start)/2)
//     if(arr[mid]==val){
//       return mid
//     }else if(arr[mid]>val){
//       end = mid -1
//     }else{
//       start = mid +1
//     }
//   }
//   return -1
// }
// console.log(BinarySearch([1,2,3,4],3));

// function isPalindrome(string){
//   if(string.length == 0||string.length ==1){
//     return true
//   }
//   if(string[0]==string[string.length-1]){
//    return isPalindrome(string.slice(1,-1))
//   }
//   return false
// }

//

// function isPalindrome(str){
//   let start = 0;
//   let end = str.length -1

//   while(start < end){
//     if(str[start]!=str[end]){
//       return false
//     }
//     start++
//     end--
//   }
//   return true
// }

// console.log(isPalindrome("mlalm"));

// function BinarySearch(arr, target, start =0,end = arr.length -1){
//   if(start>end){
//     return -1
//   }
//     let middleIndex = Math.floor(start+(end-start)/2)
//     if(arr[middleIndex]==target){
//       return middleIndex
//     }else if(arr[middleIndex]>target){
//      return BinarySearch(arr,target,start,middleIndex-1)
//     }else if(arr[middleIndex]<target){
//      return BinarySearch(arr,target,middleIndex+1,end)
//     }

// }

// console.log(BinarySearch([1,2,3,4,5],5));

// function BinarySearch(arr,target,start =0,end=arr.length -1){
//   let mid = Math.floor(start+(end-start)/2)
//   if(arr[mid]==target){
//     return mid
//   }else if(arr[mid]>target){
//    return BinarySearch(arr,target,start,mid-1)
//   }else if(arr[mid]<target){
//     return BinarySearch(arr,target,mid+1,end)
//    }
// }

// console.log(BinarySearch([1,2,3,4,5],3))

