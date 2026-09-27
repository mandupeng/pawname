import type { Locale } from './config';
import en from '@/messages/en.json';
import ko from '@/messages/ko.json';

// Registry keyed by locale — new language = one entry, no code branch.
const dictionaries: Record<Locale, Record<string, string>> = { en, ko };

export const getDictionary = (locale: Locale) => dictionaries[locale];
export type Dictionary = Record<string, string>;
