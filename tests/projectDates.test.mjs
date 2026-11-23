import assert from 'node:assert/strict';
import { test } from 'node:test';
import { projectDateTimestamp, sortProjectsByDate } from '../src/data/projectDates.ts';

test('new projects sort by completion date with year fallback and stable ties', () => {
  const records = [
    { id: 'old', year: '2023' },
    { id: 'year-only', year: '2026' },
    { id: 'month', year: '2026', completedDate: 'November 2026' },
    { id: 'day', year: '2026', completedDate: '2026-11-12' },
    { id: 'tie', year: '2026', completedDate: '2026-11' },
    { id: 'invalid-completion', year: '2025', completedDate: '2026-02-30' },
    { id: 'unknown', year: 'unknown' },
    { id: 'unknown-again', year: '' },
  ];
  const original = [...records];
  assert.deepEqual(sortProjectsByDate(records).map(p => p.id),
    ['day', 'month', 'tie', 'year-only', 'invalid-completion', 'old', 'unknown', 'unknown-again']);
  assert.deepEqual(records, original);
  assert.equal(sortProjectsByDate([...records, { id: 'new', year: '2027' }])[0].id, 'new');
  assert.equal(projectDateTimestamp({ year: '2024', completedDate: '2024-02-29' }), Date.UTC(2024, 1, 29));
});
