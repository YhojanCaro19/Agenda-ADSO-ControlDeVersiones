import test from 'node:test';
import assert from 'node:assert/strict';
function suma(a, b) {
  return a + b;
}
test('suma 10 + 15 = 25', () => {
  assert.equal(suma(10, 15), 25);
});
