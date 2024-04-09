/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    const stack = [this.root];
    let sum = 0;

    while (stack.length) {
      const curr = stack.pop();
      if (curr) {
        sum += curr.val;
        for(let child of curr.children){
          stack.push(child);
        }
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    const stack = [this.root];
    let evens = 0;

    while (stack.length) {
      const curr = stack.pop();
      if (curr) {
        if (curr.val % 2 == 0) {
          evens += 1
          for(let child of curr.children){
            stack.push(child);
          }
        } else {
          for (let child of curr.children){
            stack.push(child);
          }
        }
      }
    }
    return evens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    const stack = [this.root];
    let answer = 0;

    while (stack.length) {
      const curr = stack.pop();
      if (curr) {
        if (curr.val > lowerBound) {
          answer += 1
          for(let child of curr.children){
            stack.push(child);
          }
        } else {
          for(let child of curr.children){
            stack.push(child);
          }
        }
      }
    }
    return answer;
  }
}

module.exports = { Tree, TreeNode };
