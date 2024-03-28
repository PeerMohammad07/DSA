class hashTable{
  constructor(size){
    this.table = new Array(size)
    this.size = 0;
  }



  hash(key){
    let hash = 0;
    for(let i=0;i<key.length;i++){
      hash += key.charCodeAt(i)
    }
    return hash % this.table.length
  }

  set(key,value){
    let index = this.hash(key)
    this.table[index]=[key,value]
    this.size++
  }

  get(key){
    let index = this.hash(key)
    return this.table[index]
  }

  delete(key){
    let index = this.hash(key)
    if(this.table.length&&this.table[index]){
      delete this.table[index] 
      this.size--
      return true
    }else{
      return false
    }
  }

  getSize(){
    return this.size
  }
  
  display(){
    console.log(this.table);
  }
}



class hashTable{
  constructor(size){
    this.table = new Array(size)
    this.size = size
  }

  hashing(key){
    let hash =0;
    for(let i=0;i<key.length;i++){
      hash+=key.charCodeAt(i)
    }
    return hash % this.size
  }

  set(key,value){
    let index = this.hashing(key)
    if(!this.table[index]){
      this.table[index] = []
    }
    let bucket = this.table[index]
    for(let i=0;i<bucket.length;i++){
      if(bucket[i][0]==key){
        bucket[i][1] = value
        return
      }
    }
    bucket.push([key,value])
  }

  get(key){
    let index = this.hashing(key)
    let bucket = this.table[index]
    if(!bucket){
      return "invalid key"
    }
    for(let i=0;i<bucket.length;i++){
      if(bucket[i][0]==key){
        return bucket[i][1]
      }
    }
    return "invalid key"
  }

  remove(key){
  let index = this.hashing(key)
  let bucket = this.table[index]
  if(!bucket){
    return "invalid key"
  }
  for(let i=0;i<bucket.length;i++){
    if(bucket[i][0]==key){
       bucket.splice(i,1)
    }
  }
  return "invalid key"
  }

  display(){
    for(let i=0;i<this.table.length;i++){
      if(this.table[i]){
        console.log(this.table[i]);
      }
    }
  }
}

let table = new hashTable(5)
table.set('namee','peeru')
console.log(table.remove('place'))
console.log(table.get('namee'))
table.set('pin',200204)
table.display()


class hashTable{
  constructor(size){
    this.value = new Array(size)
    this.key = new Array(size)
    this.size = size
  }

  hashing(key){
    let hash = 0;
    for(let i=0;i<key.length;i++){
      hash += key.charCodeAt(i)
    }
    return hash % this.size
  }

  set(key,value){
    let index = this.hashing(key)

    while(this.key[index]!==undefined&&this.key[index]!==key){
      index = (index+1)%this.size
    }

    if(this.key[index]==undefined||this.key[index]==key){
      this.key[index] = key
      this.value[index] = value
    }
  }
  get(key){
    let index = this.hashing(key)

    while(this.key[index]!==undefined){
      if(this.key[index]==key){
      return this.value[index]
      }
      index = (index+1)%this.size
    }
    return null
  }

  remove(key){
    let index = this.hashing(key)
    while(this.key[index]!=undefined){
      if(this.key[index]==key){
        this.key[index] = null
        this.value[index] = null
        return
      }
      index = (index+1)%this.size
    }
    return "key not valid"
  }
}


 class hashTable{
  constructor(size){
    this.keys= new Array(size)
    this.values = new Array(size)
    this.size = size
  }

  hashing(key){
    let hash = 0;
    for(let i=0;i<key.length;i++){
      hash+=key.charCodeAt(i)
    }
    return hash % this.size
  }

  set(key,value){
    let index = this.hashing(key)

    while(this.keys[index]!=undefined&&this.keys[index]!=key){
      index = (index+1)%this.size
    }

    if(this.keys[index]==undefined||this.keys[index]==key){
      this.keys[index] = key
      this.values[index] = value
    }

  }
  get(key){
    let index = this.hashing(key)
    while(this.keys[index]!==undefined){
      if(this.keys[index]==key){
        return this.values[index]
      }
    }
    return null
  }

  remove(key){
    let index = this.hashing(key)
    while(this.keys[index]!==undefined){
      if(this.keys[index]==key){
        this.keys[index] = null
        this.values[index] = null
        return
      }
    }
    return null
  }
 }