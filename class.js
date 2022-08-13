class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.size === 0) {
      this.head = newNode
    }
    else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.size++
  }

  prepend(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode
    this.size++
  }

  getSize() {
    return this.size
  }

  headNode() {
    return this.head
  }

  tailNode() {
    if (!this.size) return
    let current = this.head
    while (current.next) {
      current = current.next
    }
    return current
  }

  at(index) {
    if (!this.size) return
    else {
      let current = this.head;
      let pos = 0
      while (current) {
        if (pos === index) {
          return current
        }
        else {
          current = current.next
          pos++
        }
      }
      return null
    }
  }

  shift() {
    if (!this.size) return
    let current = this.head
    this.head = current.next
    this.size--
  }

  pop() {
    if (!this.size) return
    if (this.size === 1) {
      this.head = null
    } else {
      let current = this.head
      while (current.next.next) {
        current = current.next
      }
      current.next = null
    }
    this.size--
  }

  contains(value) {
    let current = this.head
    while (current) {
      if (current.data === value) {
        return current
      }
      else {
        current = current.next
      }
    }
    return false
  }

  findIndex(value) {
    if (!this.size) return
    let current = this.head
    let index = 0
    while (current) {
      if (current.data === value) {
        return index
      }
      else {
        current = current.next
        index++
      }
    }
    return null
  }

  toString() {
    let value = ""
    let current = this.head
    while (current) {
      value += `(${current.data})${current.next === null ? "" : " -> "}`
      current = current.next
    }
    console.log(value);
    return value
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) return
    if (index === 0) {
      this.prepend(value)
    }
    else if (index === this.size) {
      this.append(value)
    }
    else {
      let current = this.head
      let prev = null
      let pos = 0
      const newNode = new Node(value)
      while (pos < index) {
        prev = current
        current = current.next
        pos++
      }
      newNode.next = current
      prev.next = newNode
      this.size++
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) return
    if (index === 0) {
      this.shift()
    }
    else {
      let prev = this.at(index - 1)
      prev.next = prev.next.next
      this.size--
    }
  }
}

const list = new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.prepend(0)
// console.log("head:", list.headNode());
// console.log("tail:", list.tailNode());
// console.log("size:", list.getSize());
// console.log(list.at(3));
// list.pop()
// console.log(list.contains(20));
// console.log(list.contains(5));
// console.log(list.findIndex(40));
// list.toString()
// list.insertAt(15, 2)
// list.removeAt(5)