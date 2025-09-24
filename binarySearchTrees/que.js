function Node(data) {
	return { data, left: null, right: null };
}

function sortedArrayToBST(arr) {
	let n = arr.length;

	if (n === 0) return null;

	let mid = Math.floor((n - 1) / 2);
	let root = Node(arr[mid]);

	let que = [{ node: root, range: [0, n - 1] }];
	let frontIndex = 0;

	while (frontIndex < que.length) {
		let front = q[frontIndex];
		let current = front.node;
		let [start, end] = front.range;
		let index = start + Math.floor((end - start) / 2);

		if (start < index) {
			let midLeft = start + Math.floor((index - 1 - start) / 2);
			let leftNode = Node(arr[midLeft]);
			current.left = leftNode;
			que.push({ node: leftNode, range: [start, index - 1] });
		}
	}

}
