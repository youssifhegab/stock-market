import { LANG } from '@/common/constants/lang';
import { archivo, noto } from '@/common/utils/fonts';
import { routing } from '@/i18n/routing';
import { LocaleProvider } from '@/providers/LocaleProvider';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { type Metadata } from 'next';
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

  return (
    <html lang={locale}>
      <body className={`${archivo.variable} ${noto.variable} w-screen`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LocaleProvider>
            <ReactQueryProvider>
              {children}
              <ReactQueryDevtools initialIsOpen={false} />
            </ReactQueryProvider>
          </LocaleProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
