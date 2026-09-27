import { DOG_NAME_POOL, type DogName, type Gender, type Personality, type Size } from './pool';

export type RecommendFilters = { size: Size; gender: Gender; personality: Personality };

const matches = (dog: DogName, filters: RecommendFilters): boolean =>
  dog.sizes.includes(filters.size) &&
  (filters.gender === 'either' || dog.gender === filters.gender) &&
  dog.traits.includes(filters.personality);

/** Filters, then random-samples without replacement. Falls back to the whole pool if the filter is too narrow — never returns fewer than requested unless the pool itself is smaller. */
export function recommend(filters: RecommendFilters, count = 3, pool: readonly DogName[] = DOG_NAME_POOL): DogName[] {
  const candidates = pool.filter((dog) => matches(dog, filters));
  const source = candidates.length >= count ? candidates : pool;
  const shuffled = [...source].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
