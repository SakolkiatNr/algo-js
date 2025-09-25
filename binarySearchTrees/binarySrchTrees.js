function Node(value) {
	return { left: null, data: value, right: null };
}

export function Tree(array) {

	let sortUniqueArr = [...new Set(array.sort((a, b) => a - b))];

	// build binary search tree
	const buildTree = (array) => {
		let start = 0;
		let end = array.length - 1;
		let mid = Math.floor(end / 2);

		if (start > end) return null;

		let leftNode = array.slice(start, mid);
		let rightNode = array.slice(mid + 1);

		let root = Node(array[mid]);
		root.left = buildTree(leftNode);
		root.right = buildTree(rightNode);

		return root;
	}

	const addItem = (root, key) => {
		if (root === null) return Node(key);

		if (root.data === key) return root;

		if (key < root.data) root.left = addItem(root.left, key);
		else if (key > root.data) root.right = addItem(root.right, key);

		return root;
	}

	const getSuccessor = (currentNode) => {
		currentNode = currentNode.right;
		while (currentNode !== null && currentNode.left !== null) {
			currentNode = currentNode.left;
		}
		return currentNode;
	}

	const deleteItem = (root, item) => {
		// base case
		if (root === null) return root;

		if (root.data > item) {
			root.left = deleteItem(root.left, item);
		} else if (root.data < item) {
			root.right = deleteItem(root.right, item);
		} else {
			// when root only have right children
			if (root.left === null) return root.right;

			// when root only have left children
			if (root.right === null) return root.left;

			// when root have both children
			let successor = getSuccessor(root);
			root.data = successor.data;
			root.right = deleteItem(root.right, successor.data);
		}
		return root;
	}

	const findItem = (root, key) => {
		if (root === null) return null;

		if (root.data > key) return findItem(root.left, key);
		else if (root.data < key) return findItem(root.right, key);
		else return root;
	}

	const levelOrderForEach = (root, callback) => {
		if (!callback) throw new Error("Callback function required!");

		if (!root) return;

		let que = [root];
		let index = 0;

		while (index < que.length) {
			let current = que[index++];
			callback(current.data);

			if (current.left) que.push(current.left);
			if (current.right) que.push(current.right);
		}
	}

	const inOrderForEach = (root, callback) => {
		if (!callback) throw new Error("Callback function required!");
		if (!root) return;

		inOrderForEach(root.left, callback);
		callback(root.data);
		inOrderForEach(root.right, callback);
	}

	const preOrderForEach = (root, callback) => {
		if (!callback) throw new Error("Callback function required!");
		if (!root) return;

		callback(root.data);
		preOrderForEach(root.left, callback);
		preOrderForEach(root.right, callback);
	}

	const postOrderForEach = (root, callback) => {
		if (!callback) throw new Error("Callback function required!");
		if (!root) return;

		postOrderForEach(root.left, callback);
		postOrderForEach(root.right, callback);
		callback(root.data);
	}

	const rootHeight = (root) => {
		if (root == null) return -1;

		let leftHeight = rootHeight(root.left);
		let rightHeight = rootHeight(root.right);

		return Math.max(leftHeight, rightHeight) + 1;
	}

	const valueHeight = (root, value) => {
		let item = findItem(root, value);
		if (!item) return null;

		return rootHeight(item);
	}

	const valueDepth = (root, value) => {
		if (root === null) return null;

		if (value < root.data) {
			const left = valueDepth(root.left, value);
			return left === null ? null : 1 + left;
		} else if (value > root.data) {
			const right = valueDepth(root.right, value);
			return right === null ? null : 1 + right;
		} else {
			// found value!
			return 0;
		}
	}

	const checkBalanced = (root) => {
		if (root === null) return true;
		const leftNodeHeight = rootHeight(root.left);
		const rightNodeHeight = rootHeight(root.right);

		if (Math.abs(leftNodeHeight - rightNodeHeight) > 1) return false;
		return checkBalanced(root.left) && checkBalanced(root.right);
	}

	const rebalance = () => {
		let newRoot = [];
		inOrder((data) => newRoot.push(data));
		root = buildTree(newRoot);
		return root;
	}

	let root = buildTree(sortUniqueArr);

	const insert = (key) => root = addItem(root, key);
	const remove = (key) => root = deleteItem(root, key);
	const find = (key) => findItem(root, key);
	const height = (value) => valueHeight(root, value);
	const depth = (value) => valueDepth(root, value);
	const isBalanced = () => checkBalanced(root);

	const levelOrder = (callback) => {
		try {
			levelOrderForEach(root, callback);
		} catch (e) {
			console.error(e);
		}
	}
	const inOrder = (callback) => {
		try {
			inOrderForEach(root, callback);
		} catch (e) {
			console.log(e);
		}
	}
	const preOrder = (callback) => {
		try {
			preOrderForEach(root, callback);
		} catch (e) {
			console.log(e);
		}
	}
	const postOrder = (callback) => {
		try {
			postOrderForEach(root, callback);
		} catch (e) {
			console.log(e);
		}
	}

	return { insert, remove, find, levelOrder, inOrder, preOrder, postOrder, height, depth, isBalanced, rebalance, get root() { return root; } };
}

export const prettyPrint = (node, prefix = '', isLeft = true) => {
	if (node === null) return;

	if (node.right !== null) {
		prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
	}
	console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
	if (node.left !== null) {
		prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
	}
};

// let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
// let array = [1, 2, 3]

// function logging(value) {
// 	return console.log(value);
// }
//
// let tree = Tree(array);
// // tree.levelOrder(logging);
// // tree.inOrder(logging);
// // tree.preOrder(logging);
// // tree.postOrder(logging);
// tree.insert(15);
// tree.insert(25);
// tree.insert(22);
//
// prettyPrint(tree.root);
// tree.rebalance();
// prettyPrint(tree.root);
