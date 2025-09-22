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

	// returns true if the passed in value is in the list and otherwise returns false.
	contains(value) {
		let tmp = this.head;
		if (tmp == null) return false;

		while (tmp.nextNode != null) {
			if (tmp.value == value) return true;
			tmp = tmp.nextNode;
		}
		// check first & last node
		if (tmp.value == value) return true;

		return false;
	}

	// returns the index of the node containing value, or null if not found.
	find(value) {
		let tmp = this.head;
		let index = 0;

		if (tmp == null) return null;

		while (tmp.nextNode != null) {
			if (tmp.value == value) return index;
			index++;
			tmp = tmp.nextNode;
		}

		// check first & last node
		if (tmp.value == value) return index;

		return null;
	}

	// inserts a new node with the provided value at the given index.
	insertAt(value, index) {
		if (index < 0) return;

		let newNode = Node(value);
		let tmp = this.head;
		let i = 0;

		// case: insert at head
		if (index == 0) {
			newNode.nextNode = tmp;
			this.head = newNode;
			return;
		}

		// case: insert between node
		while (tmp.nextNode != null) {
			if (i === index - 1) {
				newNode.nextNode = tmp.nextNode;
				tmp.nextNode = newNode;
				return;
			}
			tmp = tmp.nextNode;
			i++;
		}

		// case: insert at tail
		if (i === index - 1) {
			// newNode.nextNode = tmp.nextNode;
			// tmp.nextNode = newNode;
			tmp.nextNode = newNode;
			return;
		} else if (index - i > 1) {
			console.log('out of bound');
			return;
		}
	}

	// removes node at the given index
	removeAt(index) {
		let i = 0;
		let pointer = this.head;
		if (pointer == null) return;
		if (index < 0) return;

		// remove head node
		if (index === 0) {
			let newHead = pointer.nextNode;
			this.head = newHead;
			return;
		}

		while (pointer != null) {
			// if out of bound
			if (pointer.nextNode == null && index > i) {
				console.log('out of bound');
				return;
			}
			// remove node in between
			if (i == index - 1) {
				let next = pointer.nextNode.nextNode;
				pointer.nextNode = next;
				return;
			}

			pointer = pointer.nextNode;
			i++;
		}
	}

	// preview linkedlist in console. 
	// format: ( value ) -> ( value ) -> ( value ) -> null
	toString() {

		let tmp = this.head;
		let output = '';

		while (tmp.nextNode != null) {
			output += `( ${tmp.value} ) -> `;
			tmp = tmp.nextNode;
		}
		if (tmp.nextNode == null) output += `( ${tmp.value} ) -> null`;
		console.log(output);
	}
}


// TEST
let list = new LinkedList();
list.append("dog");
list.append("cat");
// list.append("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");
list.insertAt('Xenomorph', 0);

list.toString();
list.removeAt(0);
list.toString();
