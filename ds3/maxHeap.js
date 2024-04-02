class maxHeap{
  constructor(){
    this.root = null
  }

  heapifyDown(currentIdx){
    let maxHeap = this.root
    let endIdx = maxHeap.length -1
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

  heapifyup(currentIdx){
    let maxHeap = this.root
    let parentIdx = this.parent(currentIdx)
    while(currentIdx>0&&maxHeap[currentIdx]>maxHeap[parentIdx]){
      this.swap(currentIdx,parentIdx)
      currentIdx = parentIdx
      parentIdx = this.parent(currentIdx) 
     }
  }

  build(array){
    this.root = array
    let lastParent = this.parent(array.length-1)
    for(let i=lastParent;i>=0;i--){
      this.heapifyDown(i)
    }
  }

  remove(){
    let maxHeap = this.root
    this.swap(0,maxHeap.length-1)
    maxHeap.pop()
    this.heapifyDown(0)
  }
  
  insert(val){
    let array = this.root
    array.push(val)
    this.heapifyup(array.length-1)
  }

  swap(currentIdx,valueToShift){
    let maxHeap = this.root
    let temp = maxHeap[currentIdx]
    maxHeap[currentIdx] = maxHeap[valueToShift]
    maxHeap[valueToShift] = temp
  }

  peek(){
    return this.root[0]
  }

  leftChild(i){
    return 2*i+1
  }

  parent(i){
    return Math.floor((i-1)/2)
  }

  rightChild(i){
    return 2*i+2
  }

  sort(array){
    this.build(array)
    let sort = [];
    while(this.root.length>0){
      let max = this.peek()
      sort.unshift(max)
      this.remove()
    }
    return sort
  }

  display(){
    let maxHeap = this.root
    for(let i=0;i<maxHeap.length;i++){
      console.log(maxHeap[i]);
    }
  }
}

let h = new maxHeap()
console.log(h.sort([4,2,6,8,5]))
