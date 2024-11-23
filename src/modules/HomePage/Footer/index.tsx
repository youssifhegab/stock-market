import Typography from '@/ui/Typography';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="flex items-center justify-center py-6 mx-8 border-t border-gray-200">
      <Typography variant="bodySm" className="dark:invert">
        {t('title')}
      </Typography>
    </footer>
  );
};

export default Footer;
