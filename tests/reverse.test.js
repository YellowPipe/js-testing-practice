const reverseString = require('../reverse');

test('reverses', () => {
	expect(reverseString('abc')).toBe('cba')
})