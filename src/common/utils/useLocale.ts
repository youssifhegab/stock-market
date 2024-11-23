import { LocaleContext } from '@/providers/LocaleProvider';
import { useContext } from 'react';
import { LANG } from '../constants/lang';

/**
 * Returns the current locale from the nearest LocaleProvider.
 *
 * @throws {Error} if used outside of a LocaleProvider
 * @returns The current locale
 */
export default function useLocale(): LANG {
  const { currentLocale } = useContext(LocaleContext);
  if (!currentLocale) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return currentLocale;
}
