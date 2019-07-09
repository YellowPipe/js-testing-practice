const calculator = require('../src/calculator');

test('adds', () => {
	expect(calculator.add(3, 2)).toBe(5)
})

test('substracts', () => {
	expect(calculator.substract(4, 1)).toBe(3)
})

test('multiplies', () => {
	expect(calculator.multiply(8, 2)).toBe(16)
})

test('divides', () => {
	expect(calculator.divide(12, 3)).toBe(4)
})
