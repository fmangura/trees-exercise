/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    const stack = [this.root]
    let depth = 0;

    while (stack.length) {
      const curr = stack.shift()
      if (!curr) {
        return depth;
      }
      depth += 1;
      if (curr.left == null || curr.right == null){
        return depth;
      } else {
        stack.push(curr.left);
        stack.push(curr.right);
      }
    }
    return depth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    function depthMax(node) {
      if (node === null) return 0;
      return Math.max(depthMax(node.left), depthMax(node.right)) + 1
    }
    return depthMax(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let max = 0
    function maxFind(node) {
      if (node == null) return 0;
      let lmax = maxFind(node.left);
      let rmax = maxFind(node.right);
      max = Math.max(max, node.val + lmax + rmax);
      return Math.max(0, lmax + node.val, rmax + node.val);
    }

    maxFind(this.root);
    return max;
  }
  

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    let queue = [this.root];
    let closest = null;

    while (queue.length) {
      let curr = queue.shift();
      if (curr){
        let val = Math.max(curr.val, lowerBound);
        if(val > lowerBound) {
          if (val < closest || closest === null) {
            closest = val
          }
        }
      }
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    return closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}


module.exports = { BinaryTree, BinaryTreeNode };
