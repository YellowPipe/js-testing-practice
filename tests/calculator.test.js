const caesarCipher = require('../cipher');

test('ciphers', () => {
	expect(caesarCipher("attack", 5)).toBe("fyyfhp")
})
