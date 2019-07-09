const reverseString = require('../src/reverse');

test('reverses', () => {
	expect(reverseString('abc')).toBe('cba')
})