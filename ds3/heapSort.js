class minHeap{
  constructor(){
    this.root = null
  }

  heapifyDown(currentIdx){
    let minHeap = this.root
    let endIdx = minHeap.length-1
    let leftChild = this.leftChild(currentIdx)
    let rightChild = this.rightChild(currentIdx)

    while(leftChild<=endIdx){
      let valueToShift = leftChild
      if(minHeap[rightChild] < minHeap[leftChild]){
        valueToShift = rightChild
      }

      if(minHeap[valueToShift]<minHeap[currentIdx]){
          this.swap(currentIdx,valueToShift)
          currentIdx = valueToShift
          leftChild = this.leftChild(currentIdx)
          rightChild = this.rightChild(currentIdx)
      }else{
        return 
      }
    }
  }

  heapifyUp(currentIdx){
    let minHeap = this.root
    let parentIdx = this.parent(currentIdx)
    while(currentIdx>0&&minHeap[currentIdx]<minHeap[parentIdx]){
      this.swap(currentIdx,parentIdx)
      currentIdx = parentIdx
      parentIdx = this.parent(currentIdx)
    }
  }

  remove(){
    let minHeap = this.root
    this.swap(0,minHeap.length-1)
    minHeap.pop()
    this.heapifyDown(0)
  }

  build(array){
    this.root = array
    let endIdx = array.length -1
    let lastParent = this.parent(endIdx)
    for(let i=lastParent;i>=0;i--){
      this.heapifyDown(i)
    }
  }
  peek(){
    return this.root[0]
  }

  sort(array){
    this.build(array)
    let sort = []
    while(this.root.length>0){
      let max = this.peek()
      sort.push(max)
      this.remove()
    }
    return sort
  }

  insert(value){
    let minHeap = this.root
    minHeap.push(value)
    this.heapifyUp(minHeap.length-1)
  }

 
  swap(current,valueToShift){
    let minHeap = this.root
    let temp = minHeap[current]
    minHeap[current] = minHeap[valueToShift]
    minHeap[valueToShift] =temp
  }


  leftChild(i){
    return 2*i+1
  }

  rightChild(i){
    return 2*i+2
  }

  parent(i){
    return Math.floor((i-1)/2)
  }

  display(){
    console.log(this.root);
  }
}


let mh = new minHeap()
console.log(mh.sort([4,2,7,9,5]))

class HeapSort{
  constructor(){
    this.root = null
  }

  heapifyDown(currentIdx){
    let maxHeap = this.root
    let endIdx = maxHeap.length-1
    let leftChild = this.leftChild(currentIdx)
    let rightChild = this.rightChild(currentIdx)

    while(leftChild<=endIdx){
      let valueToShift = leftChild
      if(rightChild>leftChild&&maxHeap[rightChild]>maxHeap[leftChild]){
        valueToShift = rightChild
      }
      
      if(maxHeap[valueToShift]>maxHeap[currentIdx]){
        this.swap(currentIdx,valueToShift)
        currentIdx = valueToShift
        leftChild = this.leftChild(currentIdx)
        rightChild = this.rightChild(currentIdx)
      }else{
        return
      }
    }
  }
  
  build(array){
    this.root = array
    let endIdx = array.length-1
    let parent = this.parent(endIdx)
    for(let i=parent;i>=0;i--){
      this.heapifyDown(i)
    }
  }

  peek(){
    return this.root[0]
  }

  sort(array){
    this.build(array)
    let sort = [];
    while(this.root.length>0){
      let min = this.peek()
      sort.unshift(min)
      this.remove()
    }
    return sort
  }

  remove(){
    let minHeap = this.root
    this.swap(0,minHeap.length-1)
    minHeap.pop()
    this.heapifyDown(0)
  }


  swap(current,valueToShift){
    let minHeap = this.root
    let temp = minHeap[current]
    minHeap[current]= minHeap[valueToShift]
    minHeap[valueToShift]= temp
  }

  leftChild(i){
    return 2*i+1
  }

  rightChild(i){
    return 2*i+2
  }

  parent(i){
    return Math.floor((i-1)/2)
  }

}

let hs = new HeapSort()
console.log(hs.sort([3,8,1,4,6]))