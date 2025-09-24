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

	const insert = (root, key) => {
		if (root === null) return Node(key);

		if (root.data === key) return root;

		if (key < root.data) root.left = insert(root.left, key);
		else if (key > root.data) root.right = insert(root.right, key);

		return root;
	}

	let root = buildTree(sortUniqueArr);

	return { root, insert };
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
	if (node === null) {
		return;
	}
	if (node.right !== null) {
		prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
	}
	console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
	if (node.left !== null) {
		prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
	}
};

// let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
let array = [1, 2, 3]


let tree = Tree(array);
prettyPrint(tree.root);

tree.root = tree.insert(tree.root, 4);
tree.root = tree.insert(tree.root, 3);

prettyPrint(tree.root);

