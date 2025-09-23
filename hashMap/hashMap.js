class HashMap {
	constructor(initLoadFactor = 0.8, initCap = 4) {
		// loadFactor = items / capacity
		this.loadFactor = initLoadFactor;
		this.capacity = initCap;
		this.bucket = new Array(this.capacity).fill(null);
	}

	hash(key) {
		// table size should ideally be a prime number to reduce collision
		const primeNumber = 31;
		let hashCode = 0;

		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i);
			hashCode = hashCode % this.capacity;
		}
		return hashCode;
	}

	set(key, value) {
		// check loadFactor
		if (this.bucket.length > this.loadFactor * this.capacity) {
			// increase capacity ()
		}

		let index = this.hash(key);

		if (this.bucket[index] == null) {
			this.bucket[index] = [];
			this.bucket[index].push([key, value]);
		} else {
			// check item in sub-array
			let item = this.bucket[index].find((pair) => pair[0] === key);

			// if key existed 
			if (item) item[1] = value;
			// handle collision
			else this.bucket[index].push([key, value]);
		}
	}

	// takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
	get(key) {
		let index = this.hash(key);
		let target = this.bucket[index];

		if (target === null) return null;
		else {
			let item = this.bucket[index].find((pair) => pair[0] === key);
			if (item) return item[1];
			else return null;
		}
	}


	// takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
	has(key) {
		let index = this.hash(key);
		let target = this.bucket[index];

		if (target === null) return false;
		else {
			let item = this.bucket[index].find((pair) => pair[0] === key);
			if (item) return true;
			else return false;
		}
	}

	// takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
	remove(key) {
		let index = this.hash(key);
		let target = this.bucket[index];

		if (target === null) return false;
		else {
			let itemIndex = this.bucket[index].findIndex((pair) => pair[0] === key);
			if (itemIndex === -1) return false;

			// remove element
			if (itemIndex !== -1) this.bucket[index].splice(itemIndex, 1);

			// if there is no element left
			if (this.bucket[index].length === 0) this.bucket[index] = null;
			return true;
		}
	}

	// returns the number of stored keys in the hash map.
	length() {
		let count = 0;

		for (let list in this.bucket) {
			if (this.bucket[list] !== null) {
				count += this.bucket[list].length;
			}
		}
		return count;
	}

	// removes all entry in the hash map.
	clear() {
		this.bucket = new Array(this.capacity).fill(null);
	}

	// returns an array containing all the keys inside the hash map.
	keys() {
		let keysArr = [];

		for (let list in this.bucket) {
			if (this.bucket[list] !== null) {
				this.bucket[list].forEach(element => {
					keysArr.push(element[0]);
				});
			}
		}
		return keysArr;
	}

	// returns an array containing all the values
	values() {
		let valuesArr = [];

		for (let list in this.bucket) {
			if (this.bucket[list] !== null) {
				this.bucket[list].forEach(element => {
					valuesArr.push(element[1]);
				});
			}
		}
		return valuesArr;
	}


}

let map = new HashMap();

map.set('lmao', 'value1');
map.set('yahoo', 'old');
map.set('yahoo', 'new');
map.set('yahaha', 'yay!!!!');
map.set('noice', 'noice noice!');

// console.log(map.bucket);
console.log(map.keys());
console.log(map.values());
