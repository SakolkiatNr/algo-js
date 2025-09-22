class HashMap {
	constructor(initLoadFactor = 0.8, initCap = 16) {
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

	remove(key) {

	}


}

let map = new HashMap();

map.set('lmao', 'value1');
map.set('yahoo', 'old');
map.set('yahoo', 'new');
map.set('yahaha', 'yay!!!!');
map.set('noice', 'noice noice!');

console.log(map.get('yahaha'));
console.log(map.get('noice'));
console.log(map.get('lmao'));
console.log(map.get('nani'));

console.log(map.has('lmao'));
console.log(map.has('nani'));


// console.log(map.bucket);
