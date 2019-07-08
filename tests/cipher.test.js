const caesarCipher = require('../cipher');

test('ciphers when spaces are present', () => {
  expect(caesarCipher('defend the east wall of the castle', 5)).toBe('ijkjsi ymj jfxy bfqq tk ymj hfxyqj');
});

test('ciphers all letters', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 23)).toBe('xyzabcdefghijklmnopqrstuvw');
});

test('ciphers when punctuation is present', () => {
  expect(caesarCipher('attack at dawn, be careful.', 11)).toBe('leelnv le olhy, mp nlcpqfw.');
});

test('cipher is case sensetive', () => {
  expect(caesarCipher('A b C d', 1)).toBe('B c D e');
});