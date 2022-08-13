const nodeFactory = (data = null, next = null) => ({
  data,
  next
})

const LinkedListFactory = () => {

  const list = {
    head: null,
    size: 0,
    append: (data) => {
      const newNode = nodeFactory(data);
      if (list.head === null) {
        list.head = newNode
      }
      else {
        let current = list.head
        while (current.next) {
          current = current.next
        }
        current.next = newNode
      }
      list.size++
    },
    prepend: (data) => {
      const newNode = nodeFactory(data, list.head);
      list.head = newNode
      list.size++
    },
    getSize: () => {
      return list.size
    },

    getHeadNode: () => {
      return list.head
    },

    getTailNode: () => {
      if (!list.size) return
      let current = list.head
      while (current.next) {
        current = current.next
      }
      return current
    },

    at: (index) => {
      if (!list.size) return
      else {
        let current = list.head;
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
    },

    shift: () => {
      let current = list.head
      list.head = current.next
      list.size--
    },

    pop: () => {
      if (!list.size) return
      if (list.size === 1) {
        list.head = null
      } else {
        let current = list.head
        while (current.next.next) {
          current = current.next
        }
        current.next = null
      }
      list.size--
    },

    contains: (value) => {
      let current = list.head
      while (current) {
        if (current.data === value) {
          return current
        }
        else {
          current = current.next
        }
      }
      return false
    },

    findIndex: (value) => {
      if (!list.size) return
      let current = list.head
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
    },

    toString: () => {
      let value = ""
      let current = list.head
      while (current) {
        value += `(${current.data})${current.next === null ? "" : " -> "}`
        current = current.next
      }
      console.log(value);
      return value
    },

    insertAt: (value, index) => {
      if (index < 0 || index > list.size) return
      if (index === 0) {
        list.prepend(value)
      }
      else if (index === list.size) {
        list.append(value)
      }
      else {
        let prev = list.at(index - 1)
        let newNode = nodeFactory(value, prev.next)
        prev.next = newNode
        list.size++
      }
    },

    removeAt: (index) => {
      if (index < 0 || index >= list.size) return
      if (index === 0) {
        list.shift()
      }
      else {
        let prev = list.at(index - 1)
        prev.next = prev.next.next
        list.size--
      }
    }
  }
  return list
}

const list = LinkedListFactory()
list.append(10)
list.append(20)
list.append(30)
list.prepend(0)
console.log(list);
// console.log(list.getSize());
// console.log(list.getHeadNode());
// console.log(list.getTailNode());
// console.log(list.at(2));
// list.shift()
// list.pop()
// console.log(list.contains(20));
// console.log(list.contains(5));
// console.log(list.findIndex(30));
// list.insertAt(15, 2)
// list.removeAt(3, list)
list.toString()








// const LinkedListFactory = () => {
//   const list = {
//     head: null,
//     size: 0
//   }

//   const append = (data) => {
//     const newNode = nodeFactory(data);
//     if (list.head === null) {
//       list.head = newNode
//     }
//     else {
//       let current = list.head
//       while (current.next) {
//         current = current.next
//       }
//       current.next = newNode
//     }
//     list.size++
//   }
//   const prepend = (data) => {
//     const newNode = nodeFactory(data, list.head);
//     list.head = newNode
//     list.size++
//   }
//   const getSize = () => {
//     return list.size
//   }
//   const getHeadNode = () => {
//     return list.head
//   }
//   const getTailNode = () => {
//     if (!list.size) return
//     let current = list.head
//     while (current.next) {
//       current = current.next
//     }
//     return current
//   }
//   const at = (index) => {
//     if (!list.size) return
//     else {
//       let current = list.head;
//       let pos = 0
//       while (current) {
//         if (pos === index) {
//           return current
//         }
//         else {
//           current = current.next
//           pos++
//         }
//       }
//       return null
//     }
//   }
//   const shift = () => {
//     let current = list.head
//     list.head = current.next
//     list.size--
//   }
//   const pop = () => {
//     if (!list.size) return
//     if (list.size === 1) {
//       list.head = null
//     } else {
//       let current = list.head
//       while (current.next.next) {
//         current = current.next
//       }
//       current.next = null
//     }
//     list.size--
//   }
//   const contains = (value) => {
//     let current = list.head
//     while (current) {
//       if (current.data === value) {
//         return current
//       }
//       else {
//         current = current.next
//       }
//     }
//     return false
//   }
//   const findIndex = (value) => {
//     if (!list.size) return
//     let current = list.head
//     let index = 0
//     while (current) {
//       if (current.data === value) {
//         return index
//       }
//       else {
//         current = current.next
//         index++
//       }
//     }
//     return null
//   }
//   const toString = () => {
//     let value = ""
//     let current = list.head
//     while (current) {
//       value += `(${current.data})${current.next === null ? "" : " -> "}`
//       current = current.next
//     }
//     console.log(value);
//     return value
//   }

//   const increaseSize = () => {
//     list.size++
//   }

//   const decreaseSize = () => {
//     list.size--
//   }

//   const insertAt = (value, index, list) => {
//     const size = list.getSize()
//     if (index < 0 || index > size) return
//     if (index === 0) {
//       list.prepend(value)
//     }
//     else if (index === size) {
//       list.append(value)
//     }
//     else {
//       let prev = list.at(index - 1)
//       let newNode = nodeFactory(value, prev.next)
//       console.log("prev     :", prev);
//       console.log("new      :", newNode);
//       prev.next = newNode
//       list.increaseSize()
//     }
//   }

//   const removeAt = (index, list) => {
//     const size = list.getSize()
//     if (index < 0 || index >= size) return
//     if (index === 0) {
//       list.shift()
//     }
//     else {
//       let prev = list.at(index - 1)
//       prev.next = prev.next.next
//       list.decreaseSize()
//     }
//   }

//   return {
//     list,
//     append,
//     prepend,
//     getSize,
//     getHeadNode,
//     getTailNode,
//     at,
//     shift,
//     pop,
//     contains,
//     findIndex,
//     toString,
//     increaseSize,
//     decreaseSize,
//     insertAt,
//     removeAt
//   }
// }