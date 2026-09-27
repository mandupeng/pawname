'use client';

import { useState } from 'react';
import { DogNameForm } from '@/components/DogNameForm';
import { ResultsView } from '@/components/ResultsView';
import { recommend, type RecommendFilters } from '@/lib/dogNames/recommend';
import type { DogName } from '@/lib/dogNames/pool';
import type { Dictionary } from '@/lib/i18n/dictionaries';

const DEFAULT_FILTERS: RecommendFilters = { size: 'small', gender: 'either', personality: 'playful' };

export function HomeClient({ dict }: { dict: Dictionary }) {
  const [filters, setFilters] = useState<RecommendFilters>(DEFAULT_FILTERS);
  const [results, setResults] = useState<DogName[] | null>(null);

  return (
    <div className="flex flex-1 flex-col items-center gap-8 px-4 py-12">
      <h1 className="text-2xl font-bold">{dict.title}</h1>
      {results ? (
        <ResultsView dict={dict} results={results} onRetry={() => setResults(null)} />
      ) : (
        <DogNameForm dict={dict} filters={filters} onChange={setFilters} onSubmit={() => setResults(recommend(filters))} />
      )}
    </div>
  );
}
