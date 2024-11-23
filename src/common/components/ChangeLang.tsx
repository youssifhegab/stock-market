'use client';
import useLocale from '@/common/utils/useLocale';
import { Link, usePathname } from '@/i18n/routing';
import { LANG } from '../constants/lang';

const ChangeLang = () => {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <Link href={pathname} locale={locale === LANG.EN ? LANG.AR : LANG.EN}>
      {locale === LANG.EN ? 'العربية' : 'English'}
    </Link>
  );
};

export default ChangeLang;
