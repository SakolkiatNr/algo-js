function Node(value) {
	return { value, nextNode: null };
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	// adds a new node containing value to the end of the list
	append(value) {
		if (this.head == null) {
			this.head = Node(value);
		} else {
			let tmp = this.head;
			while (tmp.nextNode != null) tmp = tmp.nextNode;
			tmp.nextNode = Node(value);
		}
	}

	// adds a new node containing value to the start of the list
	prepend(value) {
		const before = this.head;
		this.head = Node(value);
		this.head.nextNode = before;
	}

	// returns the total number of nodes in the list
	size() {
		let count = 0;
		let tmp = this.head;

		if (tmp == null) return count;

		while (tmp.nextNode != null) {
			count++;
			tmp = tmp.nextNode
		}
		// last node
		if (tmp.nextNode == null) count++;

		return count;
	}

	// returns the first node in the list
	headNode() {
		return this.head;
	}

	// returns the last node in the list
	tailNode() {
		let tail = this.head;
		while (tail.nextNode != null) tail = tail.nextNode;
		return tail;
	}

	// returns the node at the given index
	at(index) {
		let tmp = this.head;

		for (let i = 0; i < index; i++) {
			if (tmp.nextNode == null && i < index) {
				console.log(`No node at index ${index}`);
				return;
			}
			tmp = tmp.nextNode;
		}
		return tmp;
	}

	// removes the last element from the list
	pop() {
		let tail = this.head;

		// empty list
		if (tail == null) return;

		// only one node
		if (tail.nextNode == null) {
			this.head = null;
			return;
		}

		while (tail.nextNode != null) {
			// node before last node
			if (tail.nextNode.nextNode == null) {
				tail.nextNode = null;
				return;
			}
			tail = tail.nextNode;
		}
	}
}


// TEST
let list = new LinkedList();
list.append('node1');
list.append('node2');
// list.append('node4');
// list.prepend('node0');

// console.log(list.size());
// console.log(list.headNode());
// console.log(list.tailNode());
// console.log(`At index: `, list.at(0));
console.log(list);
// console.log(list.size());
list.pop();
console.log(list);
// console.log(list.size());
list.pop();
console.log(list);
// console.log(list.size());
list.pop();
console.log(list);
