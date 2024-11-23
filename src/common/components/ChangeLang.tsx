'use client';
import useLocale from '@/common/utils/useLocale';
import { Link, usePathname } from '@/i18n/routing';
import { LANG } from '../constants/lang';

const ChangeLang = () => {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <Link
      href={pathname}
      locale={locale === LANG.EN ? LANG.AR : LANG.EN}
      className="text-black bg-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center"
    >
      {locale === LANG.EN ? 'ع' : 'EN'}
    </Link>
  );
};

export default ChangeLang;
