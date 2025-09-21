function fibs(n) {
	let sequence = [];

	for (let i = 0; i < n; i++) {
		if (i == 0) {
			sequence.push(0);
		} else if (i == 1) {
			sequence.push(1);
		} else {
			let fib = sequence[i - 1] + sequence[i - 2];
			sequence.push(fib);
		}
	}

	return sequence;
}

function fibsRec(n) {

	if (n <= 0) return [];
	if (n === 1) return [0];
	if (n === 2) return [0, 1];

	let prevSeq = fibsRec(n - 1);
	const nextNum = prevSeq[prevSeq.length - 1] + prevSeq[prevSeq.length - 2];
	prevSeq.push(nextNum);
	return prevSeq;
}


console.log(fibs(8));
console.log(fibsRec(8));

