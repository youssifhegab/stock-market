'use client';

import Button from '@/ui/Button';
import Typography from '@/ui/Typography';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const t = useTranslations('Error');

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col h-screen text-center items-center justify-center gap-4">
      <Typography variant="body3Xl">{error.message}</Typography>
      <Button onClick={reset}>{t('retry')}</Button>
    </div>
  );
}
