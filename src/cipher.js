const alphabetArr = ("abcdefghijklmnopqrstuvwxyz").split("");

const getAplhabet = () => {
	let alphabet = {}
	for(let i = 0; i<alphabetArr.length; i++) {
		alphabet[alphabetArr[i]] = i;
	}
	return alphabet
}

const getLetter = (pos) => {
	if (pos <= 25) {
		return pos
	} else {
		return pos - 26
	}
}

const caesarCipher = (string, shift) => {
	const arr = string.split("");
	let cipheredString = "";
	let newLetter
	const alphabetObj = getAplhabet();
	for (let i=0; i<string.length; i++) {
		if (arr[i].match(/\W/)) {
			newLetter = arr[i]
		} else {
			let letter = arr[i]
			let pos = alphabetObj[letter.toLowerCase()]
			let shiftedPos = pos + shift
			let newPos = getLetter(shiftedPos);
			if (letter === letter.toUpperCase()) {
				newLetter = alphabetArr[newPos].toUpperCase();
			} else {
				newLetter = alphabetArr[newPos];
			}
		}
		cipheredString+=newLetter
	}
	return cipheredString
}

module.exports = caesarCipher;