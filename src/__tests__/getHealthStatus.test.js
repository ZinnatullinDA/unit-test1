import getHealthStatus from '../getHealthStatus.js';

describe('getHealthStatus', () => {
  test('returns healthy when health > 50 (e.g. 90)', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
  });

  test('returns wounded at the upper boundary (health = 50)', () => {
    expect(getHealthStatus({ name: 'Лучник', health: 50 })).toBe('wounded');
  });

  test('returns wounded inside the range (health = 30)', () => {
    expect(getHealthStatus({ name: 'Воин', health: 30 })).toBe('wounded');
  });

  test('returns wounded at the lower boundary (health = 15)', () => {
    expect(getHealthStatus({ name: 'Разбойник', health: 15 })).toBe('wounded');
  });

  test('returns critical when health < 15 (e.g. 14)', () => {
    expect(getHealthStatus({ name: 'Паладин', health: 14 })).toBe('critical');
  });
});
