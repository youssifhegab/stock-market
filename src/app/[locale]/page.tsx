import HomePage from '@/modules/HomePage';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'Dashboard' });

  return {
    title: t('metaTitle'),
  };
}

export default HomePage;
