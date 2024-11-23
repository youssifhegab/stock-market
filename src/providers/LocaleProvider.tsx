'use client';
import { LANG } from '@/common/constants/lang';
import { usePathname } from 'next/navigation';
import { createContext, useEffect, useState, type ReactNode } from 'react';

export const LocaleContext = createContext<{ currentLocale: LANG }>({
  currentLocale: LANG.EN,
});

const getLocaleFromPathname = (pathname: string): LANG => {
  const pathSegments = pathname.split('/');
  return (pathSegments[1] || LANG.EN) as LANG; // Default to 'ar' if no locale segment is found
};

export function LocaleProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const pathname = usePathname();

  const [currentLocale, setCurrentLocale] = useState<LANG>(
    getLocaleFromPathname(pathname),
  );

  useEffect(() => {
    setCurrentLocale(getLocaleFromPathname(pathname));
  }, [pathname]);

  return (
    <LocaleContext.Provider value={{ currentLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
