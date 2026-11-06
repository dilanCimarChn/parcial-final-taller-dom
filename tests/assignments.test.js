import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assignments, filterAssignments } from '../src/data/demo.js';
test('filter preserves input and handles empty or unknown status', () => {
  const before = structuredClone(assignments);
  assert.equal(filterAssignments(assignments, 'pendiente').length, 1);
  assert.equal(filterAssignments(assignments, 'completada').length, 1);
  assert.equal(filterAssignments(assignments, 'todas').length, 2);
  assert.deepEqual(filterAssignments([], 'pendiente'), []);
  assert.deepEqual(filterAssignments(assignments, 'missing'), []);
  assert.deepEqual(assignments, before);
});
