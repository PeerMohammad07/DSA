class TrieNode {
  constructor() {
    this.children = {}
    this.endOfWord = false
  }
}

class trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      let char = word[i]
      if (!node.children[char]) {
        node.children[char] = new TrieNode()
      }
      node = node.children[char];
    }
    node.endOfWord = true
  }

  search(word) {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      let char = word[i]
      if (!node.children[char]) {
        return false
      }
      node = node.children[char]
    }
    return node.endOfWord
  }

  delete(word) {
    this.deleteHelper(this.root, word)
  }

  deleteHelper(root, word) {
    if (word.length == 0) {
      if (root.endOfWord) {
        root.endOfWord = false
        return
      }

      if (Object.keys(root.children).length == 0) {
        root = null
        return root
      }
    } else {
      let char = word[0]
      root.children[char] = this.deleteHelper(root.children[char], word.slice(1))
      if (root.children[char] == null) {
        delete root.children[char]
      }
    }
  }

  findAllWords() {
    let word = []
    this.findAllWordsHelper(this.root, '', word)
    return word
  }

  findAllWordsHelper(root, prefix, word) {
    if (root.endOfWord) {
      word.push(prefix)
    }
    for (let letter in root.children) {
      this.findAllWordsHelper(root.children[letter], prefix + letter, word)
    }
  }
}

let tri = new trie()
tri.insert('helo')
console.log(tri.search('helo'))
tri.insert('peeru')
console.log(tri.findAllWords())
// console.log(tri.findAllWords());