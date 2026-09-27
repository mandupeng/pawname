import { describe, expect, it } from 'vitest';
import { recommend } from './recommend';
import type { DogName } from './pool';

const pool: DogName[] = [
  { name: 'A', gender: 'male', sizes: ['small'], traits: ['calm'] },
  { name: 'B', gender: 'female', sizes: ['large'], traits: ['energetic'] },
  { name: 'C', gender: 'male', sizes: ['small'], traits: ['calm'] },
];

describe('recommend', () => {
  it('only returns dogs matching size/gender/personality when enough match', () => {
    const result = recommend({ size: 'small', gender: 'male', personality: 'calm' }, 2, pool);
    expect(result.length).toBe(2);
    expect(result.every((d) => d.sizes.includes('small') && d.gender === 'male')).toBe(true);
  });

  it('falls back to the whole pool when the filter matches too few', () => {
    const result = recommend({ size: 'large', gender: 'male', personality: 'playful' }, 3, pool);
    expect(result.length).toBe(3);
  });

  it('"either" gender matches both', () => {
    const result = recommend({ size: 'small', gender: 'either', personality: 'calm' }, 2, pool);
    expect(result.length).toBe(2);
  });
});
