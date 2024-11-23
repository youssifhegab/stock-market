import { LANG } from '@/common/constants/lang';
import { MODE } from '@/common/constants/mode';
import { cn } from '@/common/utils/cn';
import { archivo, noto } from '@/common/utils/fonts';
import { getModeServer } from '@/common/utils/getModeServer';
import { routing } from '@/i18n/routing';
import { LocaleProvider } from '@/providers/LocaleProvider';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { type Metadata } from 'next';
import { CookiesProvider } from 'next-client-cookies/server';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Nasdaq',
  description: 'application to track nasdaq stocks',
  robots: {
    follow: false,
    index: false,
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as LANG)) {
    notFound();
  }

  // Provide all messages to the client side
  const messages = await getMessages();

  const mode = getModeServer();

  return (
    <html
      lang={locale}
      dir={locale === LANG.AR ? 'rtl' : 'ltr'}
      className={cn(mode === MODE.DARK ? 'dark' : '')}
    >
      <body className={`${archivo.variable} ${noto.variable} w-screen`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CookiesProvider>
            <LocaleProvider>
              <ReactQueryProvider>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
              </ReactQueryProvider>
            </LocaleProvider>
          </CookiesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
