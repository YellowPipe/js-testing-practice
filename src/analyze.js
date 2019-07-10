const analyze = (array) => {
	let min = array[0];
	let max = array[0];
	let sum = 0;
	const length = array.length;
	for (let i=0; i<length; i++) {
		if (array[i] < min) {
			min = array[i]
		}
		if (array[i] > max) {
			max = array[i]
		}
		sum+=array[i]
	}
	
	const avarage = sum/length
	return {
		average: avarage,
		min: min,
		max: max,
		length: length
	}
}

module.exports = analyze;