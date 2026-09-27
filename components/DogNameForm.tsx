'use client';

import type { Gender, Personality, Size } from '@/lib/dogNames/pool';
import type { RecommendFilters } from '@/lib/dogNames/recommend';
import type { Dictionary } from '@/lib/i18n/dictionaries';

const SIZES: Size[] = ['small', 'medium', 'large'];
const GENDERS: Gender[] = ['male', 'female', 'either'];
const PERSONALITIES: Personality[] = ['energetic', 'calm', 'playful', 'loyal'];

export function DogNameForm({
  dict,
  filters,
  onChange,
  onSubmit,
}: {
  dict: Dictionary;
  filters: RecommendFilters;
  onChange: (filters: RecommendFilters) => void;
  onSubmit: () => void;
}) {
  const field = (labelKey: keyof RecommendFilters, values: readonly string[]) => (
    <fieldset className="flex flex-col gap-2">
      <legend className="text-sm opacity-80">{dict[labelKey]}</legend>
      <div className="flex flex-wrap gap-2">
        {values.map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={filters[labelKey] === value}
            onClick={() => onChange({ ...filters, [labelKey]: value })}
            className={`rounded-full px-4 py-2 text-sm border transition-colors ${
              filters[labelKey] === value ? 'bg-violet-600 border-violet-600 text-white' : 'border-white/20'
            }`}
          >
            {dict[`${labelKey}.${value}`]}
          </button>
        ))}
      </div>
    </fieldset>
  );

  return (
    <form
      className="flex flex-col gap-6 w-full max-w-md"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {field('size', SIZES)}
      {field('gender', GENDERS)}
      {field('personality', PERSONALITIES)}
      <button type="submit" className="rounded-lg bg-violet-600 py-3 font-semibold text-white">
        {dict.submit}
      </button>
    </form>
  );
}
