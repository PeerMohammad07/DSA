function arrayOfSum(arr){
   if(arr.length === 0){
    return 0
   }
   return arr[0] + arrayOfSum(arr.slice(1))
}


function factorial(n){
   if(n<=1){
      return 1
   }
   return n*factorial(n-1)
}


function fib(n){
   if(n<=1){
      return n
   }
   return fib(n-1)+fib(n-2)
}


function revString(str){
   if(str == ''){
      return ''
   }
   return revString(str.substring(1))+str.charAt(0)
}


function sumOFnElements(n){
   if(n<=1){
      return n
   }
  return  n+sumOFnElements(n-1)
}


function BinarySearch(arr,target,start =0,end=arr.length -1){
  let mid = Math.floor(start+(end-start)/2)
  if(arr[mid]==target){
    return mid
  }else if(arr[mid]>target){
   return BinarySearch(arr,target,start,mid-1)
  }else if(arr[mid]<target){
    return BinarySearch(arr,target,mid+1,end)
   }
}
