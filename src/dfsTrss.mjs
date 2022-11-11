import { Queue } from "@datastructures-js/queue";

function TreeNode () {
  this.val;
  this.left = null;
  this.right = null;
}

const inputData = [21, 123, 34, 21345343, 12343, 67878, 4565456, null, null, 2543, 345, 34545, 34545345, 345455];

function createTree (inputData) {
  let index = 0;
  let root;
  if (inputData[index] !== null) {
    root = new TreeNode();
    root.val = inputData[index];
  } else {
    root = null;
  }
  index++;

  const nodeQueue = new Queue();
  nodeQueue.enqueue(root);
  while (!nodeQueue.isEmpty() && index < inputData.length) {
    const t = nodeQueue.dequeue();
    if (t === null) continue;
    if (inputData[index] !== null && index < inputData.length) {
      t.left = new TreeNode();
      t.left.val = inputData[index];
      nodeQueue.enqueue(t.left);
    }
    index++;
    if (inputData[index] !== null && index < inputData.length) {
      t.right = new TreeNode();
      t.right.val = inputData[index];
      nodeQueue.enqueue(t.right);
    }
    index++;
  }
  return root;
}

function dfs (root) {
  const path = [];
  const auxPath = [];
  function solve (root) {
    if (root.left === null && root.right === null) {
      path.push([...auxPath]);
    }
    if (root.left !== null) {
      auxPath.push(root.left.val);
      solve(root.left);
      auxPath.pop();
    }
    if (root.right !== null) {
      auxPath.push(root.right.val);
      solve(root.right);
      auxPath.pop();
    }
  }
  if (root !== null) {
    auxPath.push(root.val);
    solve(root);
  }
  return path;
}
const root = createTree(inputData);
console.log(dfs(root));
