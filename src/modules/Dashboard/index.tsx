import ChangeLang from '@/common/components/ChangeLang';
import ChangeMode from '@/common/components/ChangeMode';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const DashboardPage = () => {
  const t = useTranslations('Dashboard');

  return (
    <div className="bg-white dark:bg-blue-400">
      <ChangeLang />
      <ChangeMode />
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
};

export default DashboardPage;
