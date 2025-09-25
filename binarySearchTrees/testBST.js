import { prettyPrint, Tree } from "./binarySrchTrees.js";

function randomArr(size) {
	let newArr = new Array(size).fill(1)
		.map((val) => val * Math.floor(Math.random() * 100));
	return newArr;
}

function logValue(value) {
	return console.log(value);
}

let array = randomArr(6);

let tree = Tree(array);
prettyPrint(tree.root);
console.log('Tree is balanced?: ', tree.isBalanced());

console.log('Level Order Traversal');
tree.levelOrder(logValue);

console.log('Pre Order Traversal')
tree.preOrder(logValue);

console.log('Post Order Traversal')
tree.postOrder(logValue);

console.log('In Order Traversal')
tree.inOrder(logValue);

tree.insert(101);
tree.insert(190);
tree.insert(420);
tree.insert(333);
prettyPrint(tree.root);

console.log('Tree is balanced?: ', tree.isBalanced());
console.log('Rebalance tree...')
tree.rebalance();
console.log('Tree is balanced?: ', tree.isBalanced());

console.log('Level Order Traversal');
tree.levelOrder(logValue);

console.log('Pre Order Traversal')
tree.preOrder(logValue);

console.log('Post Order Traversal')
tree.postOrder(logValue);

console.log('In Order Traversal')
tree.inOrder(logValue);
