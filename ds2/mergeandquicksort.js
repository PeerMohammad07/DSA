function quickSort(array){
  if(array.length <= 1){
    return array
  }

  let pivot = array[array.length-1]
  let left = [];
  let right = [];

  for(let i=0;i<array.length-1;i++){
    if(array[i]<=pivot){
      left.push(array[i])
    }else{
      right.push(array[i])
    }
  }
  return quickSort(left).concat(pivot,quickSort(right))
}
console.log(quickSort([2,8,3,74,9,44,7654,8,3,]));





function mergeSort(array){
  if(array.length <= 1){
    return array
  }

  let mid = Math.floor(array.length/2)
  let leftHalf = array.slice(0,mid)
  let rightHalf = array.slice(mid)

  let left = mergeSort(leftHalf)
  let right = mergeSort(rightHalf)

  return merge(left,right)
}

function merge(left,right){
  let result = [];
  let leftIndex =0;
  let rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex]<=right[rightIndex]){
      result.push(left[leftIndex])
      leftIndex++
    }else{
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
  return result
}

console.log(mergeSort([2,4,6,7,5,9,2,3]));