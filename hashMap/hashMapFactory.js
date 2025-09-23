// rewrite hashmap in factory function form

function HashMap(initLoadFactor = 0.75, initCap = 4) {
	let loadFactor = initLoadFactor;
	let capacity = initCap;
	let bucket = new Array(capacity).fill(null);

	const hash = (key) => {
		const primeNumber = 31;
		let hashCode = 0;

		for (let i = 0; i < key.length; i++) {
			hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
		}
		return hashCode;
	};

	const set = (key, value) => {
		if (length() + 2 > (loadFactor * capacity)) {
			grow();
		}
		let index = hash(key);
		if (bucket[index] == null) {
			bucket[index] = [];
			bucket[index].push([key, value]);
		} else {
			let item = bucket[index].find((pair) => pair[0] === key);
			if (item) item[1] = value;
			else bucket[index].push([key, value]);
		}
	}

	const get = (key) => {
		let index = hash(key);
		let target = bucket[index];
		if (target === null) return null;
		else {
			let item = bucket[index].find((pair) => pair[0] === key);
			if (item) return item[1];
			else return null;
		}
	}

	const remove = (key) => {
		let index = hash(key);
		let target = bucket[index];
		if (target === null) return false;
		else {
			let itemIndex = bucket[index].findIndex((pair) => pair[0] === key);
			if (itemIndex === -1) return false;
			if (itemIndex !== -1) bucket[index].splice(itemIndex, 1);
			if (bucket[index].length === 0) bucket[index] = null;
			return true;
		}
	}

	const length = () => {
		let count = 0;
		for (let list in bucket) {
			if (bucket[list] !== null) {
				count += bucket[list].length;
			}
		}
		return count;
	}

	const clear = () => {
		bucket = new Array(capacity).fill(null);
	}

	const keys = () => {
		let arr = [];
		for (let list in bucket) {
			if (bucket[list] !== null) {
				bucket[list].forEach(element => {
					arr.push(element[0]);
				});
			}
		}
		return arr;
	}

	const values = () => {
		let arr = [];
		for (let list in bucket) {
			if (bucket[list] !== null) {
				bucket[list].forEach(element => {
					arr.push(element[1]);
				});
			}
		}
		return arr;
	}

	const entries = () => {
		let arr = [];
		bucket.forEach(element => {
			if (element !== null) arr = arr.concat(element);
		});

		return arr;
	}

	const grow = () => {
		let entries = entries();
		capacity *= 2;
		bucket = new Array(capacity).fill(null);

		entries.forEach((data) => {
			set(data[0], data[1]);
		});
	}

	return { bucket, set, get, remove, keys, values, length };
}


let map = HashMap();
map.set('Xenomorph', 'Alien')
map.set('Bob', 'Human')

console.log(map.length())
console.log(map.bucket)

