//< "reverse the array" >////
let array = [1,2,3,4,5,6]
let n = array.length-1
for(let i=0;i<n/2;i++){
 let temp = array[i]
 array[i] =  array[n-i]
 array[n-i]= temp
}
console.log(array);


// find all duplicates in a array

let out = [];
for(let i=0;i<array.length;i++){
  for(let j=i+1;j<array.length;j++){
    if(array[i]==array[j]){
      out.push(array[i])
    }
  }
}



var productExceptSelf = function(nums) {
  let output = [];
  for(let i=0;i<nums.length;i++){
    let sum = 1;
      for(let j=0;j<nums.length;j++){
          if(j!=i){
              sum = sum * nums[j]
          }
      }
          output.push(sum)
  }
  return output
};

var numberOfSteps = function(num) {
  let count =0
  while(num>0){
      if(num%2==0){
        num = num/2
          count++
      }else{
          num--
          count++
      }
  }
  return count
};


let arra = [1,2,3,4,2,3,4]
for(let i=0;i<arra.length;i++){
  for(let j=i+1;j<arra.length;j++){
    if(arra[i]==arra[j]){
      arra.splice(j,1)
    }
  }
}
console.log(arra);



function reverseArray(arr){
  if(arr.length<=0){
    return arr
  }
  return reverseArray(arr.slice(1)).concat(arr[0])
}
 


let arr = [2,3,4,5,6]
let temp = 0;
for(let i=arr.length;i>=0;i--){
    temp = arr[i]
    arr[i] = arr[arr.length-1]
    arr[arr.length-1]=temp
}
console.log(arr);

