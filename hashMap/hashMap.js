
class HashMap {

	constructor() {
		this.capacity = 0;
		this.loadFactor = 0;
	}

	hash(key) {
		let hashCode = 0;
		// table size should ideally be a prime number to
		const primeNumber = 31;

		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i);
		}
		return hashCode;

	}

}


