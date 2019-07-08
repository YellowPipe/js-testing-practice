const capitalize = require('../capitalize');

test('capitalizes', () => {
  expect(capitalize('abc')).toBe('Abc');
});