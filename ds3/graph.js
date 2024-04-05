class Graph{
  constructor(){
    this.adjacentList = {}
  }
  addVertix(vertix){
    this.adjacentList[vertix] = new Array()
  }

  insert(vertix,edge,isBi){
    if(vertix == undefined||edge == undefined){
      throw new Error("invalid vertix or edge")
    }
    const graph = this.adjacentList
    if(!graph[vertix]){
      this.addVertix(vertix)
    }
    if(!graph[edge]){
      this.addVertix(edge)
    }

    if(graph[vertix].indexOf(edge)==-1){
      graph[vertix].push(edge)
    }

    if(isBi){
      graph[edge].push(vertix)
    }
  }

  deleteEdge(vertex,edge){
    if(vertex == undefined||edge == undefined){
      return console.log("vertex or edge is not defined");
    }

    this.adjacentList[vertex] = this.adjacentList[vertex].filter((el)=> el!=edge)
    if(this.adjacentList[edge]){
    this.adjacentList[edge] = this.adjacentList[edge].filter((el)=> el!=vertex)
    }
  }

  deleteVertex(vertex){
    if (!this.adjacentList[vertex]) {
      return console.log("Vertex not found");
    }

    for(let key in this.adjacentList){
      let index = this.adjacentList[key].indexOf(vertex)
      if(index!==-1){
        this.adjacentList[key].splice(index,1)
      }
    }
    delete this.adjacentList[vertex]
  } 

  display(){
  console.log(this.adjacentList);
  }
}
let graph = new Graph()
graph.insert(5,3)
graph.insert(3,2)
graph.display()

