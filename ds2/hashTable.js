// class hashTable{
//   constructor(size){
//     this.table = new Array(size)
//     this.size = 0;
//   }

//   hash(key){
//     let hash = 0;
//     for(let i=0;i<key.length;i++){
//       hash += key.charCodeAt(i)
//     }
//     return hash % this.table.length
//   }

//   set(key,value){
//     let index = this.hash(key)
//     this.table[index]=[key,value]
//     this.size++
//   }

//   get(key){
//     let index = this.hash(key)
//     return this.table[index]
//   }

//   delete(key){
//     let index = this.hash(key)
//     if(this.table.length&&this.table[index]){
//       delete this.table[index] 
//       this.size--
//       return true
//     }else{
//       return false
//     }
//   }

//   getSize(){
//     return this.size
//   }
  
//   display(){
//     console.log(this.table);
//   }
// }

// let table = new hashTable(5)
// table.set('namee','peeru')
// table.set('place','tvm')
// table.set('age','18')
// table.set('pin',200204)
// table.display()

class hashTable{
  constructor(size){
    this.table = new Array(size);
    this.size = size
  }

  hash(key){
    let hash=0;
    for(let i=0;i<key.length;i++){
      hash+=key.charCodeAt(i)
    }
    return hash%this.size
  }

  set(key,value){
    let index = this.hash(key)
    let bucket = this.table[index]
    if(!bucket){
      this.table[index] = []
    }
    this.table.push([key,value])
  }
  display(){
    console.log(this.table);
  }
}

let hash = new hashTable(5)
hash.set('name','peeru')
hash.display()