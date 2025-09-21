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
		let tmp = this.head;
		while (tmp.nextNode != null) tmp = tmp.nextNode;
		return tmp;
	}

}


// TEST
let list = new LinkedList();
list.append('lmao');
list.prepend('ehe');
list.prepend('ehe');
list.prepend('ehe');
list.prepend('ehe');
list.append('last node');

console.log(list.size());
console.log(list.headNode());
console.log(list.tailNode());

