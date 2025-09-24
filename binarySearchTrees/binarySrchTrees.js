function Node(value) {
	let data = value;
	let left = null;
	let right = null;
	return { left, data, right };
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

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

console.log(Tree(array).root)
