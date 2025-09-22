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
			else {
				this.bucket[index].push([key, value]);
			}
		}
	}

}

let map = new HashMap();

map.set('lmao', 'value1');
map.set('yahoo', 'old');
map.set('yahoo', 'new');
map.set('yahoo', 'newer');
map.set('yaw', 'yaranaika!');

console.log(map.bucket);
