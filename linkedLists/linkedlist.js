function Node(value) {
	return { value, nextNode: null };
}

class LinkedList {
	constructor() {
		this.head = null;
		this.nodeCount = 0;
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
		this.nodeCount++;
	}

	// adds a new node containing value to the start of the list
	prepend(value) {
		const before = this.head;
		this.head = Node(value);
		this.head.nextNode = before;
		this.nodeCount++;
	}

	// returns the total number of nodes in the list
	size() {
		console.log(`Total Nodes: ${this.nodeCount}`);
		return this.nodeCount;
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

}


// TEST
let list = new LinkedList();
// list.append('lmao');
// list.prepend('ehe');
// list.append('last node');
list.append('node0');
list.append('node1');
list.append('node2');

// console.log(list.size());
// console.log(list.headNode());
// console.log(list.tailNode());
console.log(`At index: `, list.at(3));

