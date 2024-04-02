class heap {
  constructor() {
    this.root = null
  }

  heapifyDown(currentIdx) {
    let minHeap = this.root
    let endIdx = minHeap.length - 1
    let leftChild = this.leftChild(currentIdx)
    let rightChild = this.rightChild(currentIdx)

    while (leftChild <= endIdx) {
      let valueToShift = leftChild
      if (minHeap[rightChild] < minHeap[leftChild]) {
        valueToShift = rightChild
      }
      if (minHeap[valueToShift] < minHeap[currentIdx]) {
        this.swap(currentIdx, valueToShift)
        currentIdx = valueToShift
        leftChild = this.leftChild(currentIdx)
        rightChild = this.rightChild(currentIdx)
      } else {
        return
      }
    }
  }

  heapifyUp(currentIdx) {
    let minHeap = this.root
    let parentIdx = this.parent(currentIdx)
    while (currentIdx > 0 && minHeap[parentIdx] < minHeap[currentIdx]) {
      this.swap(currentIdx, parentIdx)
      currentIdx = parentIdx
      parentIdx = this.parent(currentIdx)
    }
  }

  extractMin() {
    let minHeap = this.root
    return minHeap.pop()
  }

  remove() {
    let minHeap = this.root
    this.swap(0, minHeap.length - 1)
    minHeap.pop()
    this.heapifyDown(0)
  }

  sort(array) {
    this.build(array)
    let sort = [];
    while (this.root.length > 0) {
      let max = this.peek()
      sort.unshift(max)
      this.remove()
    }
    return sort
  }

  insert(val) {
    let minHeap = this.root
    minHeap.push(val)
    this.heapifyUp(minHeap.length - 1)
  }

  swap(current, valueToShift) {
    let minHeap = this.root
    let temp = minHeap[current]
    minHeap[current] = minHeap[valueToShift]
    minHeap[valueToShift] = temp
  }

  build(array) {
    this.root = array
    let lastParent = this.leftChild(array.length - 1)
    for (let i = lastParent; i >= 0; i--) {
      this.heapifyDown(i)
    }
  }

  peek() {
    return this.root[0]
  }

  leftChild(i) {
    return 2 * i + 1
  }

  rightChild(i) {
    return 2 * i + 2
  }

  parent(i) {
    return Math.floor((i - 1) / 2)
  }

  display() {
    console.log(this.root);
  }
}

let mh = new heap()
console.log(mh.sort([4, 2, 6, 8, 5]))
