const capitalize = require('../src/capitalize');

test('capitalizes', () => {
  expect(capitalize('abc')).toBe('Abc');
});