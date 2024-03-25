class BinarySearch {  
  findAValue(array,target){
    let start =0;
    let end = array.length-1
    while(start<=end){
      let middleIndex = start+(end-start)/2
      if(array[middleIndex]==target){
        return middleIndex
      }else if(array[middleIndex]>target){
        end = middleIndex-1
      }else if(array[middleIndex]<target){
        start = middleIndex+1
      }
    }
    return -1
  }
}
let list = new BinarySearch()
console.log(list.findAValue([1, 2, 3, 4, 5, 6, 7], 1))

///////////linear search 
class LinearSearch{
  search(array,target){
    for(let index=0;index<array.length;index++){
      if(array[index] == target){
        return index
      }
    }
    return -1
  }

  findMin(array){
    let min =array[0];
    for(let i=0;i<array.length;i++){
      if(array[i]<min){
        min = array[i]
      }
    }
    return min
  }
}

