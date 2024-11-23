import { cookies } from 'next/headers';
import { COOKIES } from '../constants/cookies';
import { LANG } from '../constants/lang';

/**
 * Gets the locale from the cookies.
 *
 * @returns The locale, which is either {@link LANG.EN} or {@link LANG.AR}.
 */
export const getLocaleServer = (): LANG => {
  const cookieStore = cookies();
  const locale = cookieStore.get(COOKIES.LOCALE)?.value || LANG.EN;

  return locale as LANG;
};
