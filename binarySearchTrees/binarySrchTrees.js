function Node(value) {
	let data = value;
	let left = null;
	let right = null;
	return { left, data, right };
}

let test = Node('lmao');

console.log(test.data);
console.log(test.left);
console.log(test.right);
