/**
 * 给出前序和中序建树
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
  function solve (preorder, inorderIndex) {
    if (preorder.length === 0) return null;
    if (inorderIndex[1] - inorderIndex[0] < 0) return null;
    const root = new TreeNode(preorder.shift());
    const index = treeMap[root.val];
    const leftIndex = [inorderIndex[0], index - 1]; const rightIndex = [index + 1, inorderIndex[1]];
    root.left = solve(preorder, leftIndex);
    root.right = solve(preorder, rightIndex);
    return root;
  }
  const treeMap = {};
  for (let i = 0; i < inorder.length; i++) {
    treeMap[inorder[i]] = i;
  }
  return solve([...preorder], [0, inorder.length - 1]);
};
const a = [3, 9, 20, 15, 7];
const b = [9, 3, 15, 20, 7];
console.log(buildTree(a, b));
console.log(a, b);
