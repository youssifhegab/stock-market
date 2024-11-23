'use client';

import Toggle from '@/ui/Toggle';
import { useCookies } from 'next-client-cookies';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { COOKIES } from '../constants/cookies';
import { MODE } from '../constants/mode';

const ChangeMode = () => {
  const cookieStore = useCookies();
  const mode = (cookieStore.get(COOKIES.MODE) || MODE.LIGHT) as MODE;
  const [appMode, setAppMode] = useState<MODE>(mode);

  const pathname = usePathname();
  const router = useRouter();

  const darkModeHandler = (value: boolean) => {
    document.body.classList.toggle('dark');
    setAppMode(value ? MODE.DARK : MODE.LIGHT);
    cookieStore.set(COOKIES.MODE, value ? MODE.DARK : MODE.LIGHT);
    router.replace(pathname);
  };

  return (
    <div className="flex gap-1 items-center">
      <IoSunny />
      <Toggle
        value={appMode === MODE.DARK ? true : false}
        onChange={(value) => darkModeHandler(value)}
      />
      <IoMoon />
    </div>
  );
};

export default ChangeMode;
