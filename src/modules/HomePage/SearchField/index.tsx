'use client';
import { debounce } from '@/common/utils/debounce';
import TextInput from '@/ui/TextInput';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const SearchField = () => {
  const t = useTranslations('Dashboard');
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParam = searchParams.get('search') ?? '';
  const router = useRouter();

  const [search, setSearch] = useState(searchParam);

  return (
    <TextInput
      placeholder={t('search')}
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        debounce(
          () => router.replace(`${pathname}?search=${e.target.value}`),
          500,
        );
      }}
    />
  );
};

export default SearchField;
