function bubleSort(array){
  let n = array.length 
  for(let i=0;i<n;i++){
    for(let j=0;j<n-i-1;j++){
      if(array[j+1]<array[j]){
        [array[j],array[j+1]]=[array[j+1],array[j]]
      }
    }
  }
  return array
}

function selectionSort(array){
  let n = array.length
  for(let i=0;i<n-1;i++){
    let min = i
    for(let j=i+1;j<n;j++){
      if(array[j]<array[min]){
        min = j
      }
    }
    if(min!==i){
      [array[min],array[i]]= [array[i],array[min]]
    }
  }
  return array
}

function insertionSort(array){
  let n = array.length 
  for(let i=0;i<n;i++){
    let key = array[i]
    let j = i-1
    while(j>=0&&array[j]>key){
      array[j+1] = array[j]
      j--
    }
    array[j+1]= key
  }
  return array 
}

console.log(insertionSort([8,3,5]));