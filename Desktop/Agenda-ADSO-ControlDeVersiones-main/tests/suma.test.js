import test from 'node:test';
import assert from 'node:assert/strict';
function suma(a, b) {
  return a + b;
}
test('suma 5 + 5 = 10', () => {
  assert.equal(suma(2, 3), 5);
});
