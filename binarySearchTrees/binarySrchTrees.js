function Node(value) {
	return { left: null, data: value, right: null };
}

function Tree(array) {

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

	let root = buildTree(array);

	return { root };
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
let array = [1, 2, 3, 4, 5, 6, 7]

prettyPrint(Tree(array).root)
