'use client';
import useScrollBottom from '@/common/utils/useScrollBottom';
import { Link } from '@/i18n/routing';
import { useGetTickers } from '@/services/tickers';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Header from './Header';

const DashboardPage = () => {
  const t = useTranslations('Dashboard');
  const [limit, setLimit] = useState(50);

  const { data } = useGetTickers({ limit });

  useScrollBottom({
    onScrollBottom: () => {
      setLimit(limit + 50);
    },
  });

  return (
    <div className="bg-white dark:bg-blue-400">
      <Header />

      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
      <div className="flex flex-wrap gap-8 justify-between">
        {data?.results.map((ticker) => (
          <div key={ticker.name} className="w-1/4">
            <p>{ticker.name}</p>
            <p>{ticker.ticker}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
