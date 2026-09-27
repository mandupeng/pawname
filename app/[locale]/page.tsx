import { PmdFooter, ThemeToggle } from '@pmd/ui/web';
import { HomeClient } from '@/components/home-client';
import { AdSlot } from '@/components/AdSlot';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { isLocale, defaultLocale, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <main className="flex flex-1 flex-col">
      <div className="flex justify-end gap-3 px-4 pt-4">
        <LanguageSwitcher current={locale} />
        <ThemeToggle />
      </div>
      <HomeClient dict={dict} />
      <div className="px-4 pb-6">
        <AdSlot name="footer" />
      </div>
      <PmdFooter />
    </main>
  );
}
