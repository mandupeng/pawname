import tokens, { type LocaleCode } from '@pmd/ui/tokens';

// Single source of truth is @pmd/ui's shared locale catalog — every PMD product reads the same
// list, so adding a language once there lights it up here with zero code change.
export const locales = Object.keys(tokens.locales.catalog) as LocaleCode[];
export type Locale = LocaleCode;
export const defaultLocale = tokens.locales.default as Locale;
export const localeCatalog = tokens.locales.catalog;

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);
