import type { DogName } from '@/lib/dogNames/pool';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import { AdSlot } from '@/components/AdSlot';

export function ResultsView({ dict, results, onRetry }: { dict: Dictionary; results: DogName[]; onRetry: () => void }) {
  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <ul className="flex flex-col gap-3">
        {results.map((dog) => (
          <li key={dog.name} className="rounded-xl border border-white/20 px-4 py-3 text-lg font-semibold">
            {dog.name}
          </li>
        ))}
      </ul>
      <AdSlot name="result" />
      <button type="button" onClick={onRetry} className="rounded-lg border border-white/20 py-3 font-semibold">
        {dict.retry}
      </button>
    </div>
  );
}
