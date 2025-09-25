function Node(value) {
	return { left: null, data: value, right: null };
}

function Tree(array) {

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
			// callback(current.data);

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

	let root = buildTree(sortUniqueArr);

	const insert = (key) => root = addItem(root, key);
	const remove = (key) => root = deleteItem(root, key);
	const find = (key) => findItem(root, key);
	const levelOrder = (callback) => {
		try {
			levelOrderForEach(root, callback);
		} catch (e) {
			console.error(e);
			// console.log(`Hint: use -> Tree(array).levelOrder(callback)`);
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


	return { root, insert, remove, find, levelOrder, inOrder, preOrder, postOrder };
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
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
let array = [1, 2, 3, 4, 5, 6, 7]
// let array = [1, 2, 3]

function logging(value) {
	return console.log(value);
}
let tree = Tree(array);
// prettyPrint(tree.root);
// tree.levelOrder(logging);

prettyPrint(tree.root);
// tree.inOrder(logging);
// tree.preOrder(logging);
tree.postOrder(logging);

// tree.remove(4);
// tree.insert(8);
// tree.find(6);
// console.log(tree.find(6));
// prettyPrint(tree.find(9));
