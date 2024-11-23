'use client';
import LoadingDots from '@/common/components/LoadingDots';
import useScrollBottom from '@/common/utils/useScrollBottom';
import { useGetTickers } from '@/services/tickers';
import Button from '@/ui/Button';
import Typography from '@/ui/Typography';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Ticker from '../Ticker';

const TickerList = () => {
  const t = useTranslations('Error');
  const [limit, setLimit] = useState(20);
  const searchParams = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const { data, isLoading, error, refetch } = useGetTickers({
    limit,
    search,
  });

  const isBottom = useScrollBottom({
    onScrollBottom: () => {
      setLimit(limit + 50);
    },
  });

  if (error) {
    return (
      <div className="flex flex-col items-center text-center justify-center gap-4 w-screen h-screen">
        <Typography variant="body3Xl" className="dark:invert">
          {error.message}
        </Typography>
        <Button onClick={() => refetch()}>{t('retry')}</Button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 p-4 flex-1 animate-pulse">
        {Array.from({ length: 12 }, (_, index) => index).map((index) => (
          <div
            key={index}
            className=" bg-gray-200 rounded-md dark:bg-gray-700 mb-4"
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 flex-1">
        {data?.results.map((ticker) => (
          <Ticker key={`${ticker.name}-${ticker.ticker}`} ticker={ticker} />
        ))}
      </main>
      {isBottom && (
        <div className="h-10 w-full flex self-center items-center justify-center">
          <LoadingDots />
        </div>
      )}
    </div>
  );
};

export default TickerList;
